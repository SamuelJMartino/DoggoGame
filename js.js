function dog(id, coat, nrg, eye){
    this.id = id;
    this.color = coat;
    this.nrg = nrg;
    this.eyeColor = eye;
}

var kenzie= new dog(1,"gold","energetic","brown");
var max= new dog(2,"black","lazy","black");

function createPuppy(mom, dad) {
    var eyeColors = [mom.eyeColor, dad.eyeColor];
    var coatColors = [mom.color, dad.color];
    var nrgLevels = [mom.nrg, dad.nrg];

    //Choose a color / eye color at random from the parents
    this.eyeColor = eyeColors [Math.floor(Math.random() * eyeColors .length)];
    this.color = coatColors [Math.floor(Math.random() * coatColors .length)];

    //Get a random energy level between the parents levels.
    this.nrg = Math.floor(Math.random() * Math.max(nrgLevels)) + Math.min(nrgLevels)  
}

//Then you will want to generate a puppy on a button press.
//We can store these puppies in an array.
var  puppies = [];

//This $() uses jQuery. (http://api.jquery.com/on/) 
// It allows you to execute a function when an even fires on the element.
$('#some-button-id').on('click', function() { 
    puppies.push(createPuppy(kenzie,max));
});