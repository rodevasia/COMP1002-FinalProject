// FAQ
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        
        // Toggle arrow direction
        const arrow = item.querySelector('.arrow');
        arrow.innerHTML = arrow.innerHTML === '▼' ? '&#9650;' : '&#9660;';
    });
});