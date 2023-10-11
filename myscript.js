
    const escuela = document.getElementById("escuela");
    const territorio = document.getElementById("territorio");
    const discurso = document.getElementById("discurso");
    const pdfContainer = document.getElementById("pdf-container");
    const imageContainer = document.getElementById("image-container");
    const pdfList = document.getElementById("pdf-list");
    const imageList = document.getElementById("image-list");

    // Función para mostrar PDFs de manera responsiva
    function showPDF(pdfSrc) {
        const pdfEmbed = document.createElement("iframe");
        pdfEmbed.src = pdfSrc;
        pdfEmbed.type= "application/pdf"
        pdfEmbed.width = "100%";
        pdfEmbed.height = "600"; // Altura fija para PDFs
        pdfList.appendChild(pdfEmbed);
    }

    // Función para mostrar imágenes
    function showImage(imageSrc, altText) {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        imgElement.alt = altText;
        imgElement.style.maxWidth = "100%";
        imageList.appendChild(imgElement);
    }

    escuela.addEventListener("click", () => {
        pdfContainer.style.display = "block";
        imageContainer.style.display = "none";
        pdfList.innerHTML = ""; // Limpiar la lista de PDFs
        // Agregar los PDFs que desees mostrar en la escuela aquí
        showPDF("https://drive.google.com/file/d/12Xvp7Hw-bTQMsGWJ2KqN-4P5KSUoyIUa/preview");
        showPDF("https://drive.google.com/file/d/12_XhjCAIOLE3O8jDu7qDyj1HteQP9Q3S/preview");
        // Agregar más PDFs si es necesario
    });

    territorio.addEventListener("click", () => {
        pdfContainer.style.display = "none";
        imageContainer.style.display = "block";
        imageList.innerHTML = ""; // Limpiar la lista de imágenes
        // Agregar las imágenes del territorio que desees mostrar aquí
        showImage("img/territorio/octubre1.jpeg", "Territorio 1");
        showImage("img/territorio/map.jpeg", "Territorio 2");
        showImage("img/territorio/octubre_2.jpeg", "Territorio 3");
        // Agregar más imágenes si es necesario
    });

    discurso.addEventListener("click", () => {
        pdfContainer.style.display = "none";
        imageContainer.style.display = "block";
        imageList.innerHTML = ""; // Limpiar la lista de imágenes
        // Agregar las imágenes del discurso que desees mostrar aquí
        showImage("img/discurso/octubrea.jpeg", "Discurso A");
        // Agregar más imágenes si es necesario
    });
