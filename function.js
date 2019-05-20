
window.onload = init;

function init() {
    console.log("Page is loaded ;)");

    let b = document.querySelector(".w3-button"); 

    console.log(b);

        b.addEventListener('click', function(evt){
            console.log("The button clicked was: "+ evt.button);
        })
    
       
}

let images = [{ src: 'pictures/salmon.jpg',
                description: 'Una sutil combinacion de sabores es la clave de nuestras comidas, hechas simplemente para usted. ',
                descriptionTittle:'Salmón'
                },{
                src: 'pictures/lagsana.jpg',
                description: 'Exquisita lagsagna. Nuestra especialidad de la casa hará explotar su paladar en una bomba de sabores.',
                descriptionTittle: 'Plato del dia: '
                },{
                src:'pictures/phelado.jpg',
                description: 'Para que la historia sea maravillosa es necesario de un dulce final',
                descriptionTittle: 'Postre de chocolate italiano'}
            ],
     arrow = [{
                src : "pictures/arrow_l.svg",
                hoverSrc : "pictures/arrow_l-grey.svg"
              },{
                  src : "pictures/arrow_r.svg",
                  hoverSrc: "pictures/arrow_r-grey.svg"
                }];             

                console.log(images);

text = document.getElementById("img_description"),
img = document.getElementById("lag");
var beginSlide = 0;
var i = 0;

function slideNovedades(){
    if(i >= images.length || i < 0){
    i = beginSlide;
 } 
    var tittle = images[i].descriptionTittle
    lag.src = images[i].src;
    text.innerHTML = "<b> <em>" + tittle + " </em></b>" + images[i].description;
    i++;
}

slideNovedades();


//implementation of slide widget ;)


//changestars

var goldenstar = "pictures/goldenstar-ico.png";
var oldstar = "pictures/blackstar-ico.jpg";
var blackstar = document.getElementById("blackstar");

blackstar.addEventListener('mouseover', function(){
          blackstar.src= goldenstar;
          blackstar.style.cursor= 'pointer';
        });

blackstar.addEventListener('mouseout', function(){
  blackstar.src = oldstar;
});

// Change the img src for a new one with a grey arrow

document.getElementById("arrow_l").addEventListener('mouseover', function(evt) {
    this.src = arrow[0].hoverSrc;
    this.style.cursor = 'pointer';
});

document.getElementById("arrow_r").addEventListener('mouseover', function(evt) {
    this.src = arrow[1].hoverSrc;
    this.style.cursor = 'pointer';
});

//puts defaulta image source

document.getElementById("arrow_l").addEventListener('mouseout', function(evt) {
    this.src = arrow[0].src;
});

document.getElementById("arrow_r").addEventListener('mouseout', function(evt) {
    this.src = arrow[1].src;
});

document.getElementById("arrow_l").addEventListener('click', function(evt) {
    slideNovedades();
});

document.getElementById("arrow_r").addEventListener('click', function(evt) {
    slideNovedades();
});


window.onkeydown = escape;

function escape(evt){
    console.log("key pressed:" + evt.keyCode);
    
    if(evt.keyCode === 27) {
        document.getElementById('menu').style.display= 'none';
        document.getElementById('contact').style.display='none'
    }
}



 

