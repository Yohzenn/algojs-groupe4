let student = {
    name : "Josette Delacroix",
    favoriteFood : "Filet mignon",
    city : "Paris"
}

let values = Object.values (student)

let result = 0

values.forEach ((carac) => {
    result += carac.length
})

console.log (result) 