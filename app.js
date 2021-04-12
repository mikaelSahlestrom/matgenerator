import mat from './matlista.js'

function räknaRecept(){
    const antalRecept = Object.keys(mat).length;
    document.getElementById("recepie-count").innerHTML = antalRecept;
}

function recept(){
    const recepieList = document.getElementById("recept")
    
    Object.keys(mat).forEach(
        (mat) => {
            const newRecepie = document.createElement("ol")
            let text = document.createTextNode(mat)
            newRecepie.appendChild(text)        
            recepieList.appendChild(newRecepie)
       }
        )
}


// content loader
document.getElementById("app").onload = () => {
    räknaRecept()
    recept()
}