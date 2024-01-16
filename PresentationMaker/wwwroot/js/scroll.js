// wwwroot/js/scroll.js
window.scrollToSection = function (sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

