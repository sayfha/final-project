var likes=document.getElementsByClassName('heart')

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click",color)}


    function color(e) {
        var cible=e.target
        console.log(cible)
    
    if (cible.style.color=="red") {
        cible.style.color="#424242"
    }else{
        cible.style.color="red"
    }
}