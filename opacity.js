document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.opacity'); // Vyberte všechny prvky s třídou "opacity"
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger bod, kdy se animace spustí (například když se objeví 4/5 prvku na obrazovce)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.style.opacity = '1'; // Pokud je horní okraj prvku blíže než triggerBottom, změňte opacity na 1
        } else {
            box.style.opacity = '0'; // Jinak, ponechte opacity na 0
        }
    });
});

var lastScrollTop = 0;
var scale = 1;

