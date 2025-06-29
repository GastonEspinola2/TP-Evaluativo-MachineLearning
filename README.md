# Prdiccion de calidad de Vino Tinto con Machine Learning

Este proyecto utiliza un modelo de **Árbol de Decisión** entrenado con datos reales de vino tinto (dataset de Kaggle) para predecir si un vino es **bueno** o **no bueno**, basándose en características físico-químicas.

Incluye:

- Backend en **FastAPI** (Python)
- Frontend en HTML, CSS y JavaScript
- Comunicación por JSON usando `fetch` (API REST)
- Modelo entrenado y guardado como `arbol-vinoTinto.pkl`

## Cómo ejecutar el proyecto

### 1. Clonar o descargar el proyecto

```bash
git clone https://github.com/GastonEspinola2/TP-Evaluativo-MachineLearning.git
```

### 2. Backend

- cd backend
- python -m venv env
- env\Scripts\activate # En Windows
- source env/bin/activate # En Linux/Mac

### Instalar Dependencias(Siguiendo en el backend)

- pip install -r requirements.txt
- O instalar manualmente con: pip install fastapi uvicorn joblib numpy pydantic scikit-learn

### Ejecutar el backend

uvicorn app:app --reload

### Frontend

Abrir el archivo frontend/index.html con tu navegador(Con Live Server si usas VSCode)

## Como usar la app

- Ingresá los valores de un vino en el formulario
- Presioná "Predecir"
- Veras los resultados "Vino bueno" o "Vino regular o malo"

## Dataset usado

- Nombre: Red Wine Quality
- Fuente: [Kaggle-Link](https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009)
- Objetivo: Clasificacion binaria(1:bueno (si quality >=7), 0:No bueno)

## Requisitos

- Python 3.9 o superior

## Integrantes

- Gastón Espínola:[Github](https://github.com/GastonEspinola2)
- Alexis Albarenga:[Github](https://github.com/Alexis217)
