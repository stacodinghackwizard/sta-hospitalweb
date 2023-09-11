const menuIcon = document.querySelector('.menu-icon');
const navLink = document.querySelector('.ul');
menuIcon.onclick = ()=>{
    navLink.classList.toggle('active');
}