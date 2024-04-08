let start = false;
let list = [];
let list2 = [];
let level = 0;
let body = document.querySelector("body");
body.addEventListener("keydown", function (event) {
    if (!start) {
        level = 0;
        start = true;
        list = [];
        let head = document.querySelector("h2");
        head.innerText = `Level ${level}`;
        console.log("Started");
        add();
        play();
    }
});
function play() {
    let y = 0;
    for (let x = 0; x < list.length; x++) {
        console.log("start loop");
        flash1(list[x], y);
        y += 2;
    }
}

function btnClick() {
    let btn = this;
    flash2(btn);
    list2.push(btn);
    equal(list2.length-1);
}
let btns = document.querySelectorAll(".box");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", btnClick );
}
function equal(idx) {
    if(list[idx] == list2[idx]) {
        if(list.length == list2.length) {
            setTimeout(add, 1000);
        }
        console.log("same");
    }
    else {
        console.log(list[idx]);
        console.log(list2[idx]);
        console.log("Game over");
        let head = document.querySelector("h2");
        head.innerText = `Game Over, Score :- ${level} Press Enter, To Start Again`;
        let el = document.querySelector("body");
        body.setAttribute("class", "over");
        setTimeout(function() {
            body.classList.remove("over");
        }, 500);
        start = false;
    }
}
function add() {
    list2 = [];
    level++;
    let rand = Math.floor((Math.random() * 4) + 1);
    let elem = document.querySelector(`#box${rand}`);
    list.push(elem);
    console.log(rand);
    let head = document.querySelector("h2");
    head.innerText = `Level ${level}`;
    play();
}
function flash1(box, x) {
    let cl = box.getAttribute("class");
    setTimeout(function () {
        box.setAttribute("class", "flash");
    }, (1000 * x));
    setTimeout(function () {
        box.setAttribute("class", cl);
    }, (1000 * (x + 1)));
}
function flash2(box) {
    let cl = box.getAttribute("class");
    box.setAttribute("class", "flash1");
    setTimeout(function () {
        box.setAttribute("class", cl);
    }, (100));
}
