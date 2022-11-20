var settlement1 = {
    biome: "biome",
    thePresenceOfReservoir: true,
    enoughSpaceForThisAnimal: 12
};
var settlement2 = {
    biome: "biome1",
    thePresenceOfReservoir: true,
    enoughSpaceForThisAnimal: 14
};
var settlement3 = {
    biome: "biome2",
    thePresenceOfReservoir: false,
    enoughSpaceForThisAnimal: 12
};
var settlements = [settlement1, settlement2, settlement3];
var LionChar = {
    name: "Miki",
    age: 3,
    theAmountOfFoodPerDay: 10
};
var Lion = {
    characteristisc: LionChar,
    biome: "biome",
    needForReservoir: true,
    requiredAreaPerIndividual: 12,
    whatDoesItEat: "food1",
    predator: true
};
var TigerChar = {
    name: "Nikki",
    age: 5,
    theAmountOfFoodPerDay: 17
};
var Tiger = {
    characteristisc: TigerChar,
    biome: "biome",
    needForReservoir: true,
    requiredAreaPerIndividual: 12,
    whatDoesItEat: "food1",
    predator: true
};
var GiraffeChar = {
    name: "Fifi",
    age: 2,
    theAmountOfFoodPerDay: 22
};
var Giraffe = {
    characteristisc: GiraffeChar,
    biome: "biome",
    needForReservoir: true,
    requiredAreaPerIndividual: 12,
    whatDoesItEat: "food1",
    herbivore: true
};
var ZebraChar = {
    name: "Philph",
    age: 6,
    theAmountOfFoodPerDay: 17
};
var Zebra = {
    characteristisc: ZebraChar,
    biome: "biome2",
    needForReservoir: false,
    requiredAreaPerIndividual: 12,
    whatDoesItEat: "food1",
    herbivore: true
};
var predators = [];
var herbivores = [];
function isPredator(animal) {
    return "predator" in animal;
}
function isHerbivore(animal) {
    return "herbivore" in animal;
}
var animals = [Giraffe, Tiger, Lion, Zebra];
function printTheArray() {
    console.log("Predators:");
    console.log(predators);
    console.log("Herbivores");
    console.log(herbivores);
}
function isSuitable(animal, settlement) {
    if (isHerbivore(animal)) {
        if (animal.biome === settlement.biome && animal.needForReservoir === settlement.thePresenceOfReservoir && animal.requiredAreaPerIndividual === settlement.enoughSpaceForThisAnimal) {
            herbivores.push(animal);
        }
        else {
            console.log("Error!!!!!!!!!!!!!");
        }
    }
    if (isPredator(animal)) {
        if (animal.biome === settlement.biome && animal.needForReservoir === settlement.thePresenceOfReservoir && animal.requiredAreaPerIndividual === settlement.enoughSpaceForThisAnimal) {
            predators.push(animal);
        }
        else {
            console.log("Error!!!!!!!!!!!!!");
            ;
        }
    }
}
isSuitable(Tiger, settlement1);
isSuitable(Zebra, settlement3);
isSuitable(Tiger, settlement1);
isSuitable(Zebra, settlement3);
isSuitable(Tiger, settlement1);
isSuitable(Zebra, settlement3);
isSuitable(Giraffe, settlement3);
printTheArray();
