$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoWidth:false,
    responsive:{
        0:{
            items:1 
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var myVideo = document.querySelector("#myVideo");
var principal = document.querySelector(".filme-principal")
var btAssistir = document.querySelector("#btAssistir")
var item_val = document.querySelector(".carousel-filmes")



function clicou(valor){
    
    
    filmeSelected(valor);
    //alert(valor); // alerta 'seuid'
    
}

myVideo.onclick = function(){
    $("#video").collapse("hide");

};
btAssistir.onclick = function(){
    $("#video").collapse();
    
};


document.querySelector("body").addEventListener("wheel", myFunction);
function myFunction() {
    $("#video").collapse();
    
    
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});