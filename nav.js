// nav.js

document.addEventListener("DOMContentLoaded", () => {
    fetch('nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(htmlContent => {
            const navPlaceholder = document.getElementById("navigator");
            if (navPlaceholder) {
                navPlaceholder.innerHTML = htmlContent;

                // --- START of the key change ---
                // Now that the HTML is loaded, find the dropdown elements and add the listeners
                const dropdowns = navPlaceholder.querySelectorAll('.dropdown');

                dropdowns.forEach(dropdown => {
                    const toggle = dropdown.querySelector('.dropdown-toggle');

                    // Toggle the dropdown when the link is clicked
                    toggle.addEventListener('click', (event) => {
                        event.preventDefault(); // Prevent the link from navigating
                        event.stopPropagation(); // Stop the event from bubbling up to the document
                        dropdown.classList.toggle('active');
                    });
                });

                // Close all dropdowns when clicking anywhere else on the document
                document.addEventListener('click', (event) => {
                    dropdowns.forEach(dropdown => {
                        if (!dropdown.contains(event.target)) {
                            dropdown.classList.remove('active');
                        }
                    });
                });
                // --- END of the key change ---
            } else {
                console.error("Navigation placeholder element not found!");
            }
        })
        .catch(error => {
            console.error('There was a problem loading the navigation:', error);
        });
});