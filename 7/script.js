let city = {name:"",population:0}
function makeCity(name) {
    let newcity = Object.create(city)
    newcity.name = name
    newcity.population = 0
}
//test
console.log(makeCity("flen"))