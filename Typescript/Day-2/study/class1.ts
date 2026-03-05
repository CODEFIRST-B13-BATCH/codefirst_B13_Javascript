
class Country {
    name: string;
    population: number;

    constructor(name: string, population: number) {
        this.name = name;
        this.population = population;

        console.log(`Country created: ${this.name} with population ${this.population}`);
    }

    getPopulationDensity(area: number): number {
        return this.population / area;

    }
}
const india = new Country("India", 1380004385);