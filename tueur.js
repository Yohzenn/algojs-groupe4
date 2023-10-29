class combattant {
    constructor ( name, carac, ProbMourir, ProbDegats, ProbMougat){
        this.name = name
        this.carac = carac
        this.ProbMourir = ProbMourir
        this.ProbDegats = ProbDegats
        this.ProbMougat = ProbMougat

    }
}

class tueur {
    constructor (nom, hp) {
        this.nom = nom
        this.hp = hp
    }
}

let jason = new tueur ("Jason", 100)

const names = ["Lucille","Jeanne","Agathe","Thibaud","Grégoire","Tristan","Zoe","Thomas","Marie","Coralie"]

const characteristics = {
    timide: [0.1, 0.6, 0.2],
    nerd: [0.3, 0.1, 0.6],
    cheerleader: [0.6, 0.3, 0.1],
    sportif: [0.1, 0.8, 0.1],
    solitaire: [0.2, 0.6, 0.2],
  }

const thechosenone = []

const rip = []

function choisir() {
    const generer = Math.floor(Math.random() * names.length)
    const nom = names.splice(generer, 1)[0]
    const caracrandom = Object.keys(characteristics)[Math.floor(Math.random() * Object.keys(characteristics).length)]
    const [ProbMourir, ProbDegats, ProbMougat] = characteristics[caracrandom]
    return new combattant(nom, caracrandom, ProbMourir, ProbDegats, ProbMougat)
}

for (i=0 ; i < 5; i++){
    thechosenone.push (choisir())
}
console.log (thechosenone)

while (thechosenone.length > 0 && jason.hp >= 0) {

    let attaque = Math.random()
    const combattant1 = thechosenone[0]

    if (attaque < combattant1.ProbMourir) {
        console.log("Jason à tué " + combattant1.name)
        thechosenone.splice(combattant1, 1)
        rip.push(combattant1.name)
        break
    }
    else if (attaque < combattant1.ProbDegats) {
        console.log(combattant1.name + " a infligé 10 points de dégâts à Jason")
        jason.hp -= 10
        if (jason.hp <= 0) {
            console.log("L'assassin est mort")
            break
        }
        break
    }
    else if (attaque < combattant1.ProbMougat) {
        console.log("Jason a tué " + combattant1.name + " mais prend un coup inattendu de 15 dégâts")
        jason.hp -= 15
        thechosenone.splice(combattant1, 1)
        rip.push(combattant1.name)
        if (jason.hp <= 0) {
            console.log("L'assassin est mort")
            break
        }
        break
    }
}

if ( thechosenone.length > 0){
    console.log ("Les survivants ont gagné ")
    if ( rip != null){
        console.log (" mais rip a", rip)
    }
}else{
    console.log ("Jason à tué tous les survivants")
}