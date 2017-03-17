console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");

  // inside, add each land as an article tag
  lands.forEach(function(land) {
    console.log(land);
    var article = document.createElement("article");
    article.setAttribute("id", land);
    var h1 = document.createElement("h1");
    h1.textContent = land;
    article.appendChild(h1);
    middleEarth.appendChild(article);
  });

  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var shireArticle = document.querySelector("article");
  var hobbitsList = document.createElement("ul");
  hobbitsList.setAttribute("id","hobbitsList");
    hobbits.forEach(function(h) {
      console.log(h);
      var hobbit = document.createElement("li");
      hobbit.textContent = h;
      hobbit.setAttribute("class", "hobbit");
      hobbit.setAttribute("id", h);
      hobbitsList.appendChild(hobbit);
    });
  shireArticle.appendChild(hobbitsList);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ringDiv = document.createElement("div");
  ringDiv.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  ringDiv.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ringDiv.addEventListener("click", function(){nazgulScreech();});
  // add the ring as a child of Frodo
  var fBag = document.querySelector(".hobbit");
  fBag.appendChild(ringDiv);
}
keepItSecretKeepItSafe();
// Part 4

function makeBuddies() {
  // create an aside tag
    var asideBuds = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
    var budsList = document.createElement("ul");
    buddies.forEach(function(bud) {
      console.log(bud);
      var budItem = document.createElement("li");
      budItem.textContent = bud;
      budItem.setAttribute("id", bud);
      budsList.appendChild(budItem);
    });
    asideBuds.appendChild(budsList);
  // insert your aside as a child element of rivendell
    var riv = document.getElementById("Rivendell");
    riv.appendChild(asideBuds);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strideMan = document.getElementById("Strider");
  strideMan.textContent = "Aragorn";
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hbList = document.querySelector("#hobbitsList");
  //var fBag = document.querySelector(".hobbit");
  //var hobbitsList = document.createElement("ul");
  var riv = document.getElementById("Rivendell");
  riv.appendChild(hbList);
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var riv = document.getElementById("Rivendell");  
  var theFellowShip = document.createElement("div");
  theFellowShip.setAttribute("id", "the-fellowship");
  riv.appendChild(theFellowShip);
  // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  var fellowList = document.querySelectorAll("li"); 
  fellowList.forEach(function(fellow) {
    theFellowShip.appendChild(fellow);
    var name = fellow.textContent;
  //  alert(name + "has joined your party!");
  }); 
}
 forgeTheFellowShip();

// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandy = document.getElementById("Gandalf the Grey");
  gandy.textContent = "Gandalf the White";
  // apply style to the element
  gandy.style.fontSize = "30px";
  gandy.style.textDecoration = "underline";
  gandy.style.color = "grey";
  // make the background 'white', add a grey border
  gandy.style.background = "white";
  gandy.style.border = "thick solid grey";
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("Look out nerds, the horn of Gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var bor = document.getElementById("Boromir");
  bor.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  var fellowship = document.getElementById("the-fellowship").removeChild(bor);

}
hornOfGondor();

// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mordy = document.getElementById("Mordor");
  var fro = document.getElementById("Frodo Baggins");
  var sammy = document.getElementById('Samwise \'Sam\' Gamgee');
  mordy.appendChild(fro);
  mordy.appendChild(sammy);
  mordy.appendChild(document.createElement("div")).setAttribute("id", "mount-doom");
}
itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var mordy = document.getElementById("Mordor");
  console.log()
  var golly = document.createElement("div").setAttribute("id", "gollum");
  mordy.appendChild(golly);
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(document.getElementById("the-ring"));
  // Move Gollum into Mount Doom
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
