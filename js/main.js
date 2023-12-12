let container = document.querySelector('.container');
let registerlink = document.querySelector('.register-link');
let loginlink = document.querySelector('.login-link');

registerlink.onclick = () =>{
    container.classList.add('active');
    
}
loginlink.onclick = () =>{
    container.classList.remove('active');

}