const now1 = new Date();
const dayOfWeek = now1.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayOfWeek];
console.log(`Today is ${dayName}.`);

const now2 = new Date();
const hours = now2.getHours();
const minutes = now2.getMinutes();
const seconds = now2.getSeconds();
console.log(`Current time is ${hours} PM : ${minutes} : ${seconds}`);
