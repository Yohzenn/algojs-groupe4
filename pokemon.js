class Pokemon {
    constructor (name,attack,defense,hp,luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    attackPokemon (poke) {
        if (this.isLucky()){
            let damage = this.attack - poke.defense
                poke.hp -= damage
            console.log (this.name+" a attaqué "+ poke.name+" en infligeant "+ damage+ " de dégats, il lui reste "+ poke.hp + " points de vie.")
        }else{
            console.log (this.name + " échec critique")
        }
    
    }
    isLucky() {
        return this.luck > Math.random()
    }
}

let salameche = new Pokemon ("Salamèche",50,30,100,0.4)

let aspifouette = new Pokemon ("Aspifouette",60,30,80,0.5)

while (salameche.hp > 0 && aspifouette.hp > 0 ){
    salameche.attackPokemon(aspifouette)
        if ( aspifouette.hp <= 0) {
            console.log ( "Aspifouette à mordu la poussière." )
                break
        }
    aspifouette.attackPokemon (salameche)
        if (salameche.hp <=0){
            console.log ("Salamèche s'est fait fumé.")
                break
        }
}