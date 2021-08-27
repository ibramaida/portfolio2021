const skills = document.querySelectorAll('.obs-skill');

const percentageOptions = {}

const showPercentage = new IntersectionObserver(function(entries, showPercentage) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('percentage');
            showPercentage.unobserve(entry.target);
        }
    });
}, percentageOptions);


skills.forEach(skill => {
    showPercentage.observe(skill);
});