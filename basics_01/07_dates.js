// date

//let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate)

//let myCreationDate = new Date (2023, 0 , 23)
//let myCreationDate = new Date (2023, 0 , 23,5,3)
let myCreationDate = new Date ('01-14-2023')

//console.log(myCreationDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreationDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()


//console.log(`${newDate.getDay()} and the time is ${newDate.getTime()} `)

console.log(newDate.toLocaleString('default',{
    weekday : "long",
}))

