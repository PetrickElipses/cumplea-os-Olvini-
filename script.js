const scenes = document.querySelectorAll(".scene");


// CAMBIO DE ESCENA

function changeScene(number){

    scenes.forEach(scene=>{
        scene.classList.remove("active");
    });

    document
    .getElementById("scene"+number)
    .classList.add("active");

}



// CREAR ESTRELLAS

const stars = document.getElementById("stars");


for(let i = 0; i < 160; i++){

    let star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay =
    Math.random()*3 + "s";

    stars.appendChild(star);

}



// ESCENA 1

function startAdventure(){

    changeScene(2);

}



// ESCENA 2 AL PORTAL

function openPortal(){

    changeScene(3);

}



// ENTRAR AL PORTAL

function goBirthday(){

    const portal = document.getElementById("portal");

    portal.style.transform="scale(3)";


    setTimeout(()=>{

        changeScene(4);

    },1500);

}



// REGALO FINAL

function gift(){

    changeScene(5);


    createFalling();

    startFireworks();

}



// CORAZONES Y FLORES CAYENDO

function createFalling(){


    const container =
    document.getElementById("falling");


    setInterval(()=>{


        let item =
        document.createElement("div");


        let objects = [

            "❤️",
            "🌸",
            "💙"

        ];


        item.innerHTML =
        objects[
            Math.floor(Math.random()*objects.length)
        ];


        item.className =
        "fallingItem";


        item.style.left =
        Math.random()*100 + "%";


        item.style.animationDuration =
        (3 + Math.random()*4) + "s";


        container.appendChild(item);



        setTimeout(()=>{

            item.remove();

        },7000);



    },300);


}




// FUEGOS ARTIFICIALES

function startFireworks(){


    const container =
    document.getElementById("fireworks");


    setInterval(()=>{


        let fire =
        document.createElement("div");


        fire.className =
        "firework";


        fire.innerHTML =
        "🎆";


        fire.style.left =
        Math.random()*90 + "%";


        fire.style.top =
        Math.random()*70 + "%";



        container.appendChild(fire);



        setTimeout(()=>{

            fire.remove();

        },1500);



    },700);



}