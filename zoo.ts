interface IAnimal{
    characteristisc:object;
    biome:string;
    needForReservoir:boolean;
    requiredAreaPerIndividual:number;
    whatDoesItEat:string;
}

interface IName {
    name:string;
    age:number;
    theAmountOfFoodPerDay:number;
}

interface ISettlement {
    biome:string;
    thePresenceOfReservoir:boolean;
    enoughSpaceForThisAnimal:number;
}

let settlement1={
    biome:"biome",
    thePresenceOfReservoir:true,
    enoughSpaceForThisAnimal:12
}

let settlement2={
    biome:"biome1",
    thePresenceOfReservoir:true,
    enoughSpaceForThisAnimal:14
}
let settlement3={
    biome:"biome2",
    thePresenceOfReservoir:false,
    enoughSpaceForThisAnimal:12
}
const settlements=[settlement1, settlement2, settlement3];
let LionChar:IName={
    name:"Miki",
    age:3,
    theAmountOfFoodPerDay:10
};
let Lion:IPredator ={
    characteristisc:LionChar,
    biome:"biome",
    needForReservoir:true,
    requiredAreaPerIndividual:12,
    whatDoesItEat:"food1",
    predator:true,
};

let TigerChar:IName={
    name:"Nikki",
    age:5,
    theAmountOfFoodPerDay:17
};
let Tiger:IPredator={
    characteristisc:TigerChar,
    biome:"biome",
    needForReservoir:true,
    requiredAreaPerIndividual:12,
    whatDoesItEat:"food1",
    predator:true,
    
};
let GiraffeChar:IName={
    name:"Fifi",
    age:2,
    theAmountOfFoodPerDay:22
};
let Giraffe:IHerbivore={
    characteristisc:GiraffeChar,
    biome:"biome",
    needForReservoir:true,
    requiredAreaPerIndividual:12,
    whatDoesItEat:"food1",
    herbivore:true,
   
};
let ZebraChar:IName={
    name:"Philph",
    age:6,
    theAmountOfFoodPerDay:17
};
let Zebra:IHerbivore={
    characteristisc:ZebraChar,
    biome:"biome2",
    needForReservoir:false,
    requiredAreaPerIndividual:12,
    whatDoesItEat:"food1",
    herbivore:true,
   
};

interface IPredator extends IAnimal{
    predator:boolean;
}
interface IHerbivore extends IAnimal{
   herbivore:boolean;
}

const predators:IPredator[]=[];
const herbivores:IHerbivore[]=[];

function isPredator(animal:any):animal is IPredator{
    return "predator" in animal;
}

function isHerbivore(animal:any):animal is IHerbivore{
    return "herbivore" in animal;
}

const animals:IAnimal[]=[Giraffe, Tiger, Lion, Zebra];

function printTheArray(){
    console.log("Predators:");
    console.log(predators);
    console.log("Herbivores");
    console.log(herbivores);
}

function isSuitable(animal:IAnimal, settlement:ISettlement){
    if(isHerbivore(animal)){
    if(animal.biome===settlement.biome&&animal.needForReservoir===settlement.thePresenceOfReservoir&&animal.requiredAreaPerIndividual===settlement.enoughSpaceForThisAnimal){
        herbivores.push(animal);
    }
    else{
        console.log("Error!!!!!!!!!!!!!");
    }
    }
    if(isPredator(animal)){
    if(animal.biome===settlement.biome&&animal.needForReservoir===settlement.thePresenceOfReservoir&&animal.requiredAreaPerIndividual===settlement.enoughSpaceForThisAnimal){
        predators.push(animal);
    }
    else{
        console.log("Error!!!!!!!!!!!!!");;
    }
}
}
isSuitable(Tiger,settlement1);
isSuitable(Zebra,settlement3);
isSuitable(Tiger,settlement1);
isSuitable(Zebra,settlement3);
isSuitable(Tiger,settlement1);
isSuitable(Zebra,settlement3);
isSuitable(Giraffe,settlement3);
printTheArray();















