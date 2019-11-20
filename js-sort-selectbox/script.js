(function () {

    window.addEventListener('load', onLoad);

    function onLoad() {
        var selectBox = document.getElementById('selectbox');
        var sortButton = document.getElementById('sort');
        var selectedValue = document.getElementById('value');


        sortButton.addEventListener('click', function () {
            var selectItems = selectBox.querySelectorAll('option');
            var selectValues = [];

            selectItems.forEach(function (item) {
                selectValues.push(item.innerHTML);
            });

            selectValues.sort();


            for (var i = 0; i < selectItems.length; i++) {
                selectItems[i].innerHTML = selectValues[i];
            }

        });

        selectBox.addEventListener('change', function (ev) {
            selectedValue.innerHTML = ev.target.value;
        });


    }

})();