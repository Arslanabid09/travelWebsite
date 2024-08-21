const hamburger = document.querySelector('.hamburger');
const bars = document.getElementById('bars');
const cancel = document.getElementById('cancel');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
    
    if (navList.classList.contains('show')) {
        bars.style.display = "none";
        cancel.style.display = 'block';
    }
    else{
    bars.style.display = 'block';
    cancel.style.display = 'none';

    }
});