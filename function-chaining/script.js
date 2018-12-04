(function () {
    'use strict';

    class Kitten {
        constructor() {

        }

        setName(name) {
            this.name = name;
            return this;
        }

        setColor(color) {
            this.color = color;
            return this;
        }

        setGender(gender) {

            this.gender = gender;
            return this;
        }

        save() {
            console.log(`saving ${this.name}, the ${this.color} ${this.gender} kitten`);
        }
    }

    const thomas = new Kitten();

    thomas.setName('Thomas');
    thomas.setColor('red');
    thomas.setGender('male');

    thomas.save();

    new Kitten()
        .setName('Bob')
        .setColor('black')
        .setGender('male')
        .save();

})();

