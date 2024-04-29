// get elements using getelementbyId
const random = document.getElementById("random");

//fetch random facts api
const api = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
console.log(api);

api.then((data)=>data.json())
.then((rand)=>{
    console.log(rand);
    random.innerHTML =`${rand.text}`
});


// get elements using getelementbyId
const today = document.getElementById("today");
//fetch today's facts api
const factapi = fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
console.log(factapi);

factapi.then((data1)=>data1.json())
.then((day)=>{
    console.log(day);
    today.innerHTML =`${day.text}`
});