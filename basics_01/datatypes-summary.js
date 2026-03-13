// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
 
let userEmail ;

const id= Symbol("123")

const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 1234567890123456789n

console.log(typeof outsideTemp);



// Reference (Non Primitive)

// Array , Objects , Functions


const heroes = ["shaktiman", "nagraj","doga"];
let myObj = {
    name : "abhinav",
    age: 22,

}

const myFunction = function(){
    console,log("Hello World")
}



//***************************************************

// stack (Primitive) , Heap(Non-Primitive)

let myYoutubename ="Abhinav'sWorlddotcom"

let anothername = myYoutubename 

anothername = "bhaijismile"

console.log(myYoutubename)

console.log (anothername);

let user = {
    email: "user@google.com",
    upi: "user@ybl",

}

let userone = user

userone.email = "abhinav@google.com"

console.log(userone);
