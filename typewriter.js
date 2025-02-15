document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typewriter-text");
    const text = "Hola, soy Fernando Quintero. Soy desarrollador web con pasión por crear sitios y aplicaciones interactivas.";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Ajusta el tiempo para controlar la velocidad
        }
    }

    typeEffect();
});
