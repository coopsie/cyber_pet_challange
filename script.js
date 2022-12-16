// create animal template

class Animal {
    constructor(name) {
       this._name = name;
    }
    get name() {
       return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
    feed() {
       happinessLevel.value += 20;
       petEmotion.textContent = `${pet.name} loves food!`;
    }
    wash() {
       happinessLevel.value -= 15;
       petEmotion.textContent = `Uh-oh! ${pet.name} hates bath time.`;
    }
    stroke() {
       happinessLevel.value += 5;
       petEmotion.textContent = `${pet.name} likes cuddles.`;
    }
 }
 
 class Dog extends Animal {
    constructor(name) {
       super(name)
    }
    play() {
       happinessLevel.value += 15;
       petEmotion.textContent = `Yes! ${pet.name} loves walkies!`;
    }
 }
 
 class Cat extends Animal {
    constructor(name) {
       super(name)
    }
    play() {
       happinessLevel.value -= 10;
       petEmotion.textContent = `No way. ${pet.name} likes alone time.`;
    }
 }
 
 class Rabbit extends Animal {
    constructor(name) {
       super(name)
    }
    play() {
       happinessLevel.value += 15;
       petEmotion.textContent = `${pet.name} likes to play.`;
    }
 }

 // images the user will interact with
const dogImg = document.querySelector("#dog-img");
const catImg = document.querySelector("#cat-img");
const rabbitImg = document.querySelector("#rabbit-img");
// elements of interface
const welcomeScreen = document.querySelector("#welcome-screen");
const petInterface = document.querySelector("#pet-interface");
const petImg = document.querySelector("#pet-img");
const insertName = document.querySelector("#insert-name");
const happinessLevel = document.querySelector("#happiness-level");
const petEmotion = document.querySelector("#pet-emotion");
const startAgain = document.querySelector("#start-again");
// action buttons
const feedBtn = document.querySelector("#feed-button");
const washBtn = document.querySelector("#wash-button");
const strokeBtn = document.querySelector("#stroke-button");
const playBtn = document.querySelector("#play-button");
// variables that will be updated during the programme
let pet;
let petName;

petInterface.style.display = "none";

// function that asks user for name of pet
const getName = () => {
   petName = prompt("Aw, great choice! Now enter a name for your pet.");
   while (petName.length === 0) {
      alert("Please enter a name for your pet.");
      petName = prompt("Your pet name:");
   }
};

// decreasing the happiness level of progress bar
const decreaseHappiness = () => {
   const intervalId = setInterval(reduceBar, 1000);
   function reduceBar() {
      happinessLevel.value--;
   }
};

dogImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   getName();
   petImg.src = "./petGIFs/dog-idle.gif";
   pet = new Dog(petName);
   insertName.textContent = pet.name;
   decreaseHappiness();
});

catImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   getName();
   petImg.src = "./petGIFs/cat-idle.gif";
   pet = new Cat(petName);
   insertName.textContent = pet.name;
   decreaseHappiness();
});

rabbitImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   getName();
   petImg.src = "./petGIFs/rabbit-idle.gif";
   pet = new Rabbit(petName);
   insertName.textContent = pet.name;
   decreaseHappiness();
});

feedBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.feed();
});

strokeBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.stroke();
});

washBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.wash();
});

playBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.play();
});

// start again option
startAgain.addEventListener("click", () => {
   petInterface.style.display = "none";
   welcomeScreen.style.display = "block";
   petEmotion.textContent = ``;
   happinessLevel.value = 50;
});

