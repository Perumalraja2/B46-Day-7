var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true);

request.send();

request.onload = function(){
    
var data = JSON.parse(request.response)


console.log(data)
console.log("")

// 1) Get all the countries from the Asia continent /region using the Filter function

console.log("############# Countries from the Asia continent /region #########")
console.log("")

let asiaregion = data.filter(element=>(element.continents=="Asia"))
console.log(asiaregion.map(value=>value.name.common).forEach(element => console.log(element)))
console.log("")
// 2) Get all the countries with a population of less than 2 lakhs using Filter function


console.log("############# Countries with a population of less than 2 lakhs #############")

console.log("")

let population = data.filter(element=>(element.population<200000))
console.log(population.map(value=>value.name.common).forEach(element => console.log(element)))
console.log("")

// 3) Print the country which uses US Dollars as currency.

console.log("#############  Country which uses US Dollars as currency  #############")
console.log("")



let currencies1 = data.filter(element=>(element.currencies))

let test1 = currencies1.filter(element=>(Object.keys(element.currencies)=="USD"))
console.log(test1.map(value=>(value.name.common)).forEach(element => console.log(element)))

console.log("")

// 4 ) Print the following details name, capital, flag using forEach function

console.log("#############  name, capital, flag using forEach function  #############")
console.log("")


let fordata = data.forEach(element => console.log(`Country name : ${element.name.common}
Capital      : ${element.capital}
Flag         : ${element.flag}`))


console.log("")


// 5) Print the total population of countries using reduce function

console.log("#############  total population of countries  #############")
console.log("")



let rest = []
for (let x of data)
{
 let data1 = x.population
 rest.push(data1)
}

let totalpopulation = rest.reduce((value1,value2)=>(value1+value2))
console.log(` The totall population is : ${totalpopulation}`)

console.log("")
}

