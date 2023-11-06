{
    // oop -class
    var Animal = /** @class */ (function () {
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        Animal.prototype.makeSound = function () {
            console.log("The ".concat(this.name, " says ").concat(this.sound));
        };
        return Animal;
    }());
    var dog = new Animal('German shephard', 'dog', 'gheu gheu');
    var cat = new Animal('parsian', 'cat', 'mew mew');
    cat.makeSound();
}
