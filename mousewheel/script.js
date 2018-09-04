(function () {
    'use strict';

    let body,
        curBodyWidth = null;

    window.addEventListener('load', () => {
        body = document.querySelector('body');
    });

    window.addEventListener('wheel', event => {
        if (!event.shiftKey) return;

        const delta = Math.sign(event.wheelDelta);
        body.style.margin = '0 auto';

        if (curBodyWidth === null) {
            curBodyWidth = 100;
        }

        if (delta === 1) {
            if (curBodyWidth < 100) {
                curBodyWidth += 5;
            }
            body.style.width = curBodyWidth + '%';
        }

        if (delta === -1) {
            if (curBodyWidth > 0) {
                curBodyWidth -= 5;
            }
            body.style.width = curBodyWidth + '%';
        }

    });


})();

