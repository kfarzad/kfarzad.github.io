document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

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
});