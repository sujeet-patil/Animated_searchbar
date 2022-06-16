const searchxyz = document.querySelector('.search');
const btnxyz = document.querySelector('.btn');
const inputxyz = document.querySelector('.input');

btnxyz.addEventListener("click",()=>{
    searchxyz.classList.toggle("active");
    inputxyz.focus();
})