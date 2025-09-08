function larkMode() {
    document.getElementById('mainPage').style.backgroundColor = "whitesmoke";
    document.getElementById('mainPage').style.color = "black";
    document.getElementById('mainPage').style.borderColor= "black";
    document.getElementById("hero").setAttribute('src','pics/IMG_9904.jpeg');
    document.getElementById('condition').innerHTML = "Light";

}

function darkMode(){
    document.getElementById('mainPage').style="background-color: Black";
    document.getElementById("hero").setAttribute('src','pics/IMG_9971.jpg');
    document.getElementById('condition').innerHTML = "Dark";
    

}

function defaultMode(){
    document.getElementById('mainPage').style.backgroundColor = "lightblue";
    document.getElementById("hero").setAttribute('src','pics/IMG_7733.jpg');
    document.getElementById('condition').innerHTML = "Default";

}