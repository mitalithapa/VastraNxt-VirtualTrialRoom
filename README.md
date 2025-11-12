# VastraNXT: A Virtual Try-On Solution

---

## 🌟 Objective

The primary goals of the **VastraNXT** project are to:

* **Transform the Indian fashion industry** by pioneering advanced technology to redefine and elevate the virtual try-on experience.
* **Cater to the fast-paced lifestyles of modern consumers**, enabling them to explore a diverse range of fashion options with ease and convenience through a dynamic virtual trial room solution.

---

## ✨ Abstract

The project focuses on leveraging Artificial Intelligence (AI), Virtual Reality (VR), and Augmented Reality (AR) to revolutionize the fashion sector. By creating a **dynamic virtual trial room solution**, VastraNXT aims to meet the growing consumer demand for novelty, personalization, and convenience in clothing selection. Key components include real-time body measurement, pose detection, and the rendering of life-like, adjustable 3D avatars, powered by technologies like Unreal Engine.

---

## 🛠️ Key Technologies

The files within this project indicate the use of a diverse and advanced technology stack, including:

* **3D Modeling & Rendering:** VRoid Studio (`.vroid` files) and Unreal Engine.
* **Computer Vision & AI/ML:** MediaPipe, OpenCV, TensorFlow.
* **Body Metrics:** Python libraries like `body-measurements` and `body-matrix`.
* **Development Languages & Frameworks:** Python (Jupyter Notebooks), JavaScript, HTML, Flutter.
* **Other Tools:** Visio (`.vsdx` flowcharts) for process design, AR, VR, React Native, and SQL.

---

## 🚀 Installation

Based on the contents of the Jupyter Notebooks, the following Python dependencies are required for the core components of the project.

### Prerequisites

* Python 3.x
* A suitable environment manager (Anaconda/Conda recommended for package management).
* OpenCV dependencies (installed via `opencv-python` or `opencv-contrib-python`).

### Python Dependencies

Install the necessary libraries using `pip`. The required libraries are mentioned in the project notebooks:

```bash
# From Untitled-checkpoint.ipynb
pip install body-measurements body-matrix numpy scipy trimesh

# From detection.ipynb
pip install mediapipe opencv-python

# From vastra.ipynb
pip install av

# For running the notebooks
pip install jupyter
