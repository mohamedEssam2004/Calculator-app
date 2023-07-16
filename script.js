let input = document.getElementById('inputBox');
let btn = document.querySelectorAll('button');

let calc = '';
let arr = Array.from(btn);

arr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML == 'RESET') {
            calc = '';
            input.value = calc; 
        } else if(e.target.innerHTML == 'DEL') {
            calc = calc.substring(0, calc.length-1);
            input.value = calc;
        } else if(e.target.innerHTML == '=') {
            calc = eval(calc);
            input.value = calc;
        } else {
            calc += e.target.innerHTML;
            input.value = calc;
        }
    });
});

input.value = '';


let firstTheme = document.getElementById('first');
let scondTheme = document.getElementById('scond');
let thirdTheme = document.getElementById('third');
let themeBtn = document.getElementById("themeBtn");
let parent = document.getElementById('parent');

firstTheme.onclick = function() {
    themeBtn.style.marginLeft = '0px';
    parent.classList.remove('theme-2');
    parent.classList.remove('theme-3');
    saveData();
};
scondTheme.onclick = function() {
    themeBtn.style.marginLeft = '18px';
    parent.classList.add('theme-2');
    parent.classList.remove('theme-3');
    saveData();
};
thirdTheme.onclick = function() {
    themeBtn.style.marginLeft = '40px';
    parent.classList.add('theme-3');
    parent.classList.remove('theme-2');
    saveData();
};






function saveData() {
    window.localStorage.setItem('data', parent.classList);
    window.localStorage.setItem('toggle', themeBtn.style.marginLeft)
};
function showData() {
    parent.classList = window.localStorage.getItem('data');
    themeBtn.style.marginLeft = window.localStorage.getItem('toggle');
};
showData();