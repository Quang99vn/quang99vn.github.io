// var iconNav = document.getElementById('icon-nav')
// var navbar = document.querySelector('.navbar-nav');


// iconNav.onclick = function() {
//     navbar.classList.toggle('navbar-active')
// }


document.addEventListener('DOMContentLoaded', function() {
    const iconNav = document.getElementById('icon-nav')
    const navbar = document.querySelector('.navbar-nav ul');


    iconNav.onclick = function() {
             navbar.classList.toggle('dropdown')
     }
})