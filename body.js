const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

async function setupCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  video.srcObject = stream;
  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

async function loadBodyPix() {
  return await bodyPix.load();
}

async function detectBody(model) {
  const segmentation = await model.segmentPerson(video, {
    internalResolution: 'medium',
    segmentationThreshold: 0.7,
  });

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const mask = bodyPix.toMask(segmentation);
  bodyPix.drawMask(canvas, video, mask, 0.7, 0, false);

  // Process keypoints for dimensions
  const keypoints = await model.estimatePerson(video);

  if (keypoints && keypoints.length > 0) {
    const keypoint = keypoints[0].keypoints;

    // Calculate height (rough estimate from nose to ankle)
    const nose = keypoint.find(p => p.part === 'nose');
    const ankle = keypoint.find(p => p.part === 'leftAnkle');
    if (nose && ankle) {
      const height = Math.sqrt(Math.pow(nose.position.x - ankle.position.x, 2) + Math.pow(nose.position.y - ankle.position.y, 2));
      console.log('Height:', height);
    }

    // Calculate waist (rough estimate between left and right hip)
    const leftHip = keypoint.find(p => p.part === 'leftHip');
    const rightHip = keypoint.find(p => p.part === 'rightHip');
    if (leftHip && rightHip) {
      const waist = Math.sqrt(Math.pow(leftHip.position.x - rightHip.position.x, 2) + Math.pow(leftHip.position.y - rightHip.position.y, 2));
      console.log('Waist:', waist);
    }
  }

  requestAnimationFrame(() => detectBody(model));
}

async function main() {
  await setupCamera();
  const model = await loadBodyPix();
  detectBody(model);
}

main();
