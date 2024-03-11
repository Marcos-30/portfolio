
//scroll seccion
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //activo navbar links

            navLinks.forEach(links => {
                links.classList.remove('activa');
                document.querySelector('header nav a[href*='+ id +']').classList.add('activa');
            })
        }
    });
    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);    
    /*eliminar el icono de alternancia
     y la barra de navegación al hacer clic en los enlaces de la barra de navegación (desplazamientos)*/

}
    


