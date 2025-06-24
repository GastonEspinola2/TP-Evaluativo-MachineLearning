const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultado.textContent = "Procesando...";

  const data = Object.fromEntries(new FormData(form));
  for (let key in data) {
    data[key] = parseFloat(data[key]);
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/predecir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Respuesta no válida del servidor");
    }

    const json = await res.json();
    resultado.textContent = "Resultado: " + json.resultado;
    resultado.style.color = "#2d6a4f";
  } catch (error) {
    resultado.textContent = "Error: no se pudo conectar al backend.";
    resultado.style.color = "#d00000";
  }
});
