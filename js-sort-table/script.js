(function () {

    'use strict';

    function sortableTable(id) {
        let srtLabels = document.querySelectorAll('#' + id + ' th');

        srtLabels.forEach(function (el) {
            el.addEventListener('click', function (e) {
                console.log(e.target);
            });
            el.style.cursor = 'pointer';
        });

    }

    window.addEventListener('load', function () {
        sortableTable('my-table');
    });

})();