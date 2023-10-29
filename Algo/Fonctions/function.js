let a = "Jean"
let b = "Paul"
let result = checkName(a,b)

function checkName(name1,name2){
    if (name1 == name2){ 
        return "les deux prénoms sont identiques"
        // On peut mettre True
    }else{
        return "les deux prénoms sont différents"
        // On peut mettre False
    }

}

console.log (result) 