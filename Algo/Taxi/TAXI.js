
let santementale = 10
let feuxrouges = 30


while (santementale > 0 && feuxrouges > 0){
 
    let luck = Math.random ()

 if (luck<= 0.2){
    console.log ("Wejdene-Anissa joue à la radio")
    santementale--
    if (santementale == 0 ) 
        {
            console.log ("Explosion")
            break
        }
 }
 if (luck <= 0,4 && luck > 0.2) {
    console.log ("Dofus rétro OST joue à la radio")
 }

 if (luck <= 0.6 && luck > 0.4){
    console.log ("Baby-Justin bieber joue à la radio")
 }
 if (luck <= 0.8 && luck > 0.6){
    console.log ("On m'appelle l'ovni-Jul joue à la radio")
 }
 if (luck <= 1 && luck > 0.8){
    console.log ("Wii theme 10 hours joue à la radio")
 } 

 feuxrouges--

 if ( feuxrouges == 0)
 {
    console.log ("John est bien rentré chez lui")
 }
}


/*for(let i = 30; i >= 0 ; i--){
    
    let luck = Math.random ()
    
    if (luck<= 0.2){
    console.log ("Wejdene-Anissa joue à la radio")
    santementale--
    console.log ("santé mentale est à "+santementale)
        if (santementale == 0 ) {
            console.log ("Explosion")
            break
        }
    }
    if (luck <= 0.4 && luck > 0.2) {
    console.log ("Petit poney joue à la radio")
    }

    if (luck <= 0.6 && luck > 0.4){
    console.log ("Baby-Justin bieber joue à la radio")
    }
    if (luck <= 0.8 && luck > 0.6){
    console.log ("On m'appelle l'ovni-Jul joue à la radio")
    }
    if (luck <= 1 && luck > 0.8){
    console.log ("Wii theme 10 hours joue à la radio")
    } 


    if ( i == 0)
    {
    console.log ("John est bien rentré chez lui") 
    break
    }
    
    
    console.log (i + " feux restants")
}
*/
