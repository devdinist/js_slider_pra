const content_box = document.querySelector("div.content_box");

function next(){
    let pos = get_pos();
    let idx = (Math.abs(pos) / 400) + 1;
    
    if(pos-400 <= -2000) pos = 400;

    let c = document.querySelector("div.content"+idx);
    c.classList.remove("view");

    content_box.style.left = pos-400+"px";

    idx = (Math.abs(pos-400) / 400) + 1;
    let f = document.querySelector("div.content"+idx);
    f.classList.add("view");
}

function prev(){
    let pos = get_pos();
    let idx = (Math.abs(pos) / 400) + 1;
    
    if(pos+400 > 0) pos = -2000;

    let c = document.querySelector("div.content"+idx);
    c.classList.remove("view");

    content_box.style.left = pos+400+"px";

    idx = (Math.abs(pos) / 400);
    let f = document.querySelector("div.content"+idx);
    f.classList.add("view");
}

function get_pos(){
    let pos = content_box.style.left.replace("px","");
    return pos ? parseInt(pos) : 0;
}

const prev_btn = document.querySelector("div.btnside button.prev");
const next_btn = document.querySelector("div.btnside button.next");
prev_btn.addEventListener("click",prev);
next_btn.addEventListener("click",next);
