console.log("Life's A Garden, Dig IT!")

// //++++++++++++++++++++++++++++++++++++++++++++++++++++
// //Title: JS Datatypes
// //Type: Homework
// //Duration: "4:00"
// // Original Creator: Thom Page & Matt Huntington
// // Course: WDI
// //Modified by: Kristyn Bryan
// // Competencies: Objects, Arrays, Loops 
// //Prerequisites: JavaScript 
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++
// //Homework
// //-----------
// //Setup
// //-----------
// //Inside your homework folder for tonight, create our html/css/js folder structure, including an app.js file.
// //Write your answers in the app.js file. Use comments for the non-code responses.

// //=================================================================
// //                       Datatypes
// //=================================================================
// //Refresher
// //So far we have seen:

// //Strings
// //Numbers
// //Booleans
// //Arrays
// //Objects
// //When these datatypes are combined, we get a data structure, 
// //for example, an array that contains objects that each contain booleans.

// //Let's say you are tasked with creating some software, and it is 
// //up to you to determine which datatypes and what data structure to use.

// //Answer the Following

// For each of the following, write which datatypes you would use 
// to represent the data, and then give a small example of the data 
// structure:

// // 1. A light switch that can be either on or off.
// Booleans 
// if (lightSwitch === "on")
//   Return true;
//   else {
//     return false
//   }

// // 2. A user's email address.
// // Objects that would store the users personal info type or "key" and then store the values user name pw ect.
// const users = {
//   email: "blah@gmail.com",
//   firstName: "Bob",
//   lastName: "Saget",
//   ect
// }
// // 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// an array since these are a list of characteristics or things that the spaceship has.

// // 4. A list of student names from our class.
// Array
// const classList = [
// Jared,
// David,
// Ron,
// Alex,
// ect.
// ]



// // 5. A list of student names from our class, each with a location.
// objects
// const studentCreepin = {
//   class: ducks,
//   students: [{ 
//   {
//   name: "jared",
//   location: "Lunchroom",
//   }
//   {
//     ect.
//   }]
// };

// // 6. A list of student names from our class, each with a location 
// //    and each with a list of favorite tv shows.

// objects
// const studentCreepin = {
//   class: funkyDucks,
//   students: [{ 
//   {
//   name: "jared",
//   location: "Lunchroom",
//   favoriteTvShow: "the daily show"
//   }
//   {
//     ect.
//   }]
// };


// //=================================================================
// //                       Take it Easy
// //=================================================================
// 1. Make an array that holds all of the colors of the rainbow.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(rainbow);
// 2. Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);

// 3. Make an object that is called your name and holds the 
// information about your favorite food, a hobby, the name of the 
// town that you live in currently, and your favorite datatype.
const jRock = {
  favoriteFood: "Anything Fried",
  hobby: "cooking",
  city: "Chicago",
  datatype: "html"
};

// 4. Write code that will access your hobby from the object that you 
// just created.
console.log(jRock.hobby)






















































