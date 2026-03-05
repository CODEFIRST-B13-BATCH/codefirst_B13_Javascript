var Country = /** @class */ (function () {
    function Country(name, population) {
        this.name = name;
        this.population = population;
        console.log("Country created: ".concat(this.name, " with population ").concat(this.population));
    }
    return Country;
}());
var india = new Country("India", 1380004385);
