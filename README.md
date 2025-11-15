AI-powered web application that finds visually similar products using deep-learning image embeddings and fast vector search.

🚀 Features

Upload an image or provide an image URL

ResNet50-based feature extraction

FAISS-powered fast similarity search

Responsive UI with clean modern design

Adjustable similarity threshold

Works with any product dataset

🛠️ Tech Stack

Backend: Python, Flask, PyTorch, FAISS
Frontend: HTML, CSS, JavaScript
Image Processing: Pillow
Model: ResNet50 pretrained on ImageNet

📁 Project Structure
Visual-Product-Matcher/
│── app/
│   ├── app.py
│   ├── routes/
│   ├── static/
│   └── templates/
│
│── scripts/
│   └── generate_embeddings.py
│
│── data/
│   └── product_images/
│
│── embeddings/
│   ├── product_vectors.npy
│   └── product_index.faiss
│
│── requirements.txt
│── .env.example
│── README.md

Acknowledgments :

ResNet50 by Microsoft Research

FAISS by Facebook AI Research

Flask framework

PyTorch team
Built with ❤️ using Flask, PyTorch & FAISS
