
let images = [{ src: 'pictures/lagsaña.jpg',
                description: 'Exquisita lagsagna. Nuestra especialidad de la casa hará explotar su paladar en una bomba de sabores.',
                descriptionTittle: 'Plato del dia: '
                },{
                src: 'pictures/salmon.jpg',
                description: 'Una sutil combinacion de sabores es la clave de nuestras comidas, hechas simplemente para usted. ',
                descriptionTittle:'Salmón'
                },{
                src:'pictures/phelado',
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

var tittle = images.descriptionTittle, text = document.getElementById("img_description"),
img = document.getElementById("lag");

async function slideNovedades(images){
 for(let i = 0; i < images.length; i++){ 
    lag.src = images[i].src;
    text.innerHTML = "<b> <em>" + tittle + " </em></b>" + images.description;
    await sleep(2000);
    }
}

slideNovedades(img);

 



//implementation of slide widget ;)


//changestars

var goldenstar = "pictures/goldenstar-ico.png";
var oldstar = "pictures/blackstar-ico.jpg";
var blackstar = document.getElementById("blackstar");

blackstar.addEventListener('mouseover', function(){
          blackstar.src= goldenstar;
          
});

blackstar.addEventListener('mouseout', function(){
  blackstar.src = oldstar;
});

// Change the img src for a new one with a grey arrow

document.getElementById("arrow_l").addEventListener('mouseover', function(evt) {
    this.src = arrow[0].hoverSrc;
});

document.getElementById("arrow_r").addEventListener('mouseover', function(evt) {
    this.src = arrow[1].hoverSrc;
});

//puts defaulta image source

document.getElementById("arrow_l").addEventListener('mouseout', function(evt) {
    this.src = arrow[0].src;
});

document.getElementById("arrow_r").addEventListener('mouseout', function(evt) {
    this.src = arrow[1].src;
});




 
