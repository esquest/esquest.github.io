 
// GIT417/418:
// Author: Jose Esquivel
// Date: June 20 2021

var myDrink;

// custom drink constuctor
function Order(name, drink, size) {
  this.orderName = name;
  this.orderDrink = drink;
  this.orderSize = size;
}

function createDrink() {
  var drinkName = document.getElementById("orderName").value;
  var drinkType = document.getElementById("orderDrink").value;
  var drinkSize = document.getElementById("orderSize").value;
  
  myDrink = new Order(drinkName, drinkType, drinkSize);
  createDrinkDisplay(myDrink);
}


function createDrinkDisplay(order) {
  var fragment = document.createElement("div");
  var classAttribute = document.createAttribute("class");
  classAttribute.value = "newOrder";
  fragment.setAttributeNode(classAttribute);

  fragment.innerHTML = "<strong>Name</strong>" + "&nbsp;"+ order.orderName + "<br>" +
                     "<strong>Drink</strong>" + "&nbsp;"+ order.orderDrink  + "<br>" +
                      "<strong> Size</strong>" + "&nbsp;" + order.orderSize;
  // document.body.appendChild(fragment);
  parent.insertBefore(fragment, parent.children[5]);
}

function test(){
  document.getElementById("test").innerHTML = "it works!!!!!!!!!!!!!!";
}

document.getElementById("sbuxButton").addEventListener("click", createDrink, false);




/* global variables referencing h2 and p error message elements */
var messageHeadElement = document.getElementById("messageHead");
var messageElement = document.getElementById("message");

//Grader: declare global validity here with var keyword
var validity; 

//  Verifies the first name box has a name.
var nameInput = document.getElementById("nameInput");
var nameInputComplete = true;

// try me button 
// var tryme = document.getElementById("tryme");
// div where user message will appear
var userMessage = document.getElementById("userMessage");
var userInput = document.getElementById("userInput");

function getname() {
document.getElementById("userMessage").innerHTML = userInput.value + ", Lets learn how to code";
}


document.getElementById("tryme").addEventListener("click",getname, false)



function verifyFirstName(){
   var messageText = ""
   try {
      if (nameInput.value =="" ) {
         throw "Please enter your name";
      }
   }
   catch(message) {
      validity = false;
      messageText = message;
      messageElement.innerHTML = messageText;
   }
}

// Verify Email box has email
var emailInput = document.getElementById("emailInput");
var emailInputComplete = true;



function verifyEmail() {
   var messageText = "";
   try {
      // if the email input is none then throw an error message
      if (emailInput.value =="" ) {
         throw "Please enter your email";
      }
   }
   catch(message) {
      validity = false;
      messageText = message;
      messageElement.innerHTML = messageText;   
   }
}

// Check to see if the privacy policy radio button is checked
function privacy() {
   var messageText = "";
   try {
      if (document.querySelector('input[name="privacy"]:checked') == null) {
         throw "Please agree to user policy";
      }
   }
   catch(message) {
      validity = false;
      messageText = message;
      messageElement.innerHTML = messageText;   
   }
}

var serviceComplete = true;
// Verify service of interest is selected
function verifyService() {
   var messageText = ""
   try {
      if (document.querySelector('input[name="service"]:checked') == null) {
         throw "Please select a service";
      }
   }
   catch(message) {
      messageText = message;
      messageElement.innerHTML = messageText;
      validity = false;
   }
}


// Validates from when send is pressed 
//  checks that the the input field in the form have input then throws a success statement
function validateForm(evt) {
  if (evt.preventDefault){
    evt.preventDefault();
  } else {
      evt.returnValue = false;
  }
  //Grader: This should first be declared explicitly as global with var outside of any function. See top of script document
  validity = true;
  verifyFirstName();
  verifyService();
  verifyEmail();
  privacy();
  if (validity === true) {
    messageElement.innerHTML ="";
    document.getElementById("confirmation").innerHTML = "Thank you " + nameInput.value + ", We will reach out to you shortly.";
  //Grader: This doesn't make sense...to have this function keep calling itself creates an infinite loop and will cause the browser to crash eventually
    //} else if ( validateForm(evt) === false){ 
   } else {
      messageElement.innerHTML = "Please enter missing information";
   
  }
}

// button send
document.getElementById("send").addEventListener("click", validateForm);
// Module 4 
// Test for form completness 
var nameBox = document.getElementById("name");
var error = document.getElementById("error");
var nameComplete = true;

// function verifyName() {
//    // var validity = true;
//    var emessage = ""; 
//    try {
//       if (nameBox.value =="" ) {
//          throw "Please enter your name";
//       }
//    }
//    catch(message) {
//      validity = false;
//      var emessage = message;
//    }
  
//    finally {
//      nameComplete = validity;
//      error.innerHTML = emessage;
//      testWeightCompleteness();
//    }
// }

// function testWeightCompleteness(){
//   if (nameComplete) {
//    CalcWeight(); 
//   }
// }


// Calculates weight on mars given weight on earth 
// to Precision 4 adjusts number to the hundredths
function CalcWeight() {
  var earth = document.getElementById("Wearth");
  var mars = ( earth.value / 9.81 ) * 3.711;  
  document.getElementById("Wmars").innerHTML = mars.toPrecision(4)+"Lb";
}

// Creates event listners so it updated automatically
function createEventListeners() {
  document.getElementById("converter").addEventListener("change", CalcWeight, false);
}


// Creates new div element vefore the space div
// id= securitysection

var parent = document.getElementById("wrapper");
var security = document.createElement("div");
security.setAttribute("id","securitysection");
parent.insertBefore(security, parent.children[5]);
security.innerHTML = "How Javascript Reveals Information";


// creates ul and 6 li elements inside a div with id security section.
var ul= document.createElement("ul");
for (i=0;i<9;i++)
  {
    var securityList = document.createElement("li"); 
    ul.appendChild(securityList);
  }
document.getElementById("securitysection").appendChild(ul);
// text inside li elements
ul.children[0].innerHTML = "<strong>userAgent</strong><br>String stored in the HTTP user-agent request header, which contains infromation about the brower, the platform name, and compatibility.";
ul.children[1].innerHTML = "<strong>appName</strong><br>Name of the web browser displaying the page";
ul.children[2].innerHTML = "<strong>appVersion</strong><br>Version of the web browser displaying the page";
ul.children[3].innerHTML = "<strong>geoLocation</strong><br>API for accessign the users current location and user permission settings denying or allowing access to that information";
ul.children[4].innerHTML = "<strong>onLine</strong><br>whether the browser currently has a network connection";
ul.children[5].innerHTML = "<strong>platform</strong><br>Operating system in use on the client computer";
ul.children[6].innerHTML = "<a href ='https://www.javatpoint.com/javascript-navigator-object#:~:text=The%20JavaScript%20navigator%20object%20is,it%20can%20be%20accessed%20by%3A&text=navigator,-window.navigator'> The Navigator Object </a>" + "The navigator object is used to get information about the current browser. The following are properties used by the navigator object that are supported by all major browsers.";
ul.children[7].innerHTML = "<a href ='https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting'>XSS attacks</a>"+"Using <em>text content</em> can prevent XSS attacks.";
ul.children[8].innerHTML = "<a href='https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c5-validate-all-inputs.html'>Syntax and Semantic Validity</a>"+ "An application should check that data is both syntactically and semantically valid (in that order) before using it in any way (including displaying it back to the user)";

// writes a paragraph in the page for allow listings
// Sets a link to using the .href 

// resets form when page reloads
window.addEventListener("load", resetForm, false);
//Grader: JS doesn't know what verifyName is
//document.getElementById("button").addEventListener("click", verifyName);


// window.addEventListener("load", createEventListeners, false);

// This calls the CreateEventListener() function when the page loads.
function resetForm() {
	CalcWeight();
	createEventListeners();
   //Grader: JS doesn't know what verifyName is 
  //verifyName();
}


// The following get the day of the week and is used in the if else if statements below.

var date = new Date();
var weekDay = date.getDay();


// This if else if statements writes a message unique to the day of the week. 
// sunday = 0 monday = 1 and so on. 

if (weekDay == 0) {
 document.getElementById("write").innerHTML = "Enjoy your Sunday.";
} 
else if (weekDay == 1){
  document.getElementById("write").innerHTML = "Start your week on a good note, happy monday!"; 
}
else if (weekDay == 2){
  document.getElementById("write").innerHTML = "Happy Tuesday."; 
}
else if (weekDay == 3){
  document.getElementById("write").innerHTML = "Happy Humpday :)"; 
}
else if (weekDay == 4){
  document.getElementById("write").innerHTML = "It's Thursday! The weekend is almost here."; 
}
else if (weekDay == 5){
  document.getElementById("write").innerHTML = "Happy Friday :)"; 
}
else if (weekDay == 6){
  document.getElementById("write").innerHTML = "Enjoy the weekend you beautiful human, happy Saturday."; 
}