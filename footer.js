document.addEventListener("DOMContentLoaded", () => {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(htmlContent => {
            const navPlaceholder = document.getElementById("footer");
            if (navPlaceholder) {
                navPlaceholder.innerHTML = htmlContent;
                // You can optionally remove the ID after insertion if you want
                // navPlaceholder.removeAttribute("id");
            } else {
                console.error("Navigation placeholder element not found!");
            }
        })
        .catch(error => {
            console.error('There was a problem loading the navigation:', error);
        });
});
