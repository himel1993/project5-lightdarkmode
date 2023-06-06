// let sideBarOpenBtn =  document.querySelector('.btn')
// let sideBar = document.querySelector(".sidebar");

// function sideBarOpen(){
//   sideBar.classList.toggle('active');
  
//     // console.log(sideBar.classList.contains('active'));
//     if(sideBar.classList.contains('active') == true){
//         console.log('side bar is open');
//         sideBarOpenBtn.innerHTML = '<i class="bi bi-x"></i>';
//     } else{
//         sideBarOpenBtn.innerHTML = '<i class="bi bi-list"></i> ';
//         console.log('side bar is closed');
//     }


// }



// sideBarOpenBtn.addEventListener("click", sideBarOpen);

/**
 * if(passwordField.type == 'password')
 */


// let togglerBtn = document.querySelector(".togglerBtn");
// let passwordField = document.querySelector('.passwordField')
// function passwordToggler(){
//     // passwordField.type = 'text';
//     if(passwordField.type == 'password'){
//         passwordField.type = 'text';
//         togglerBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`;
//     } else{
//         passwordField.type = "password";
//         togglerBtn.innerHTML = '<i class="bi bi-eye"></i>';
//     }
// }

//  togglerBtn.addEventListener('click', passwordToggler);


let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector('body')
function darkMode(){
    body.classList.toggle('darkmode')
}

darkModeBtn.addEventListener('click', darkMode)