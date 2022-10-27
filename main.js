// Part one

let li01 = document.querySelector('#li01');

function strikeThrough(){
    li01.style.textDecoration='line-through';
};

strikeThrough(li01);


//---------------------


function imageSource(strId,strUrl){
    let img = document.querySelector(strId);
    img.src = strUrl;
}

imageSource("#image-1","https://images.freeimages.com/images/previews/01a/technology-background-1632715.jpg");



imageSource("#image-2","https://media.istockphoto.com/photos/cat-with-blue-eyes-looks-at-camera-picture-id1067347086?k=20&m=1067347086&s=612x612&w=0&h=Wxch207ChCoqnlqa5zvuy17J_YyApm42L6rUN3hml54=");



imageSource("#image-3","https://media.istockphoto.com/photos/dreamy-white-beach-between-picturesque-rocks-with-turquoise-water-at-picture-id1249362024?s=612x612");


//-------------------

function removesLi(){
   let remove = document.querySelector('li');
   remove.remove();
}
removesLi();
removesLi();

//-------------------
function fontSize(Fstr,idStr){
    let text = document.querySelector(idStr);
    text.style.fontSize = Fstr;
}

fontSize("50px","#heading");
//-------------------
let li = document.createElement('img');
li.src = "https://images.freeimages.com/images/previews/01a/technology-background-1632715.jpg"
li.style.height = "200px";
li.style.width = "200px";

function argument(domElement){
    let ul = document.querySelector('#arguments');
    ul.appendChild(domElement);
}

argument(li);
//-------------------
function height(img){
    img.style.height = "30px";
}

height(li);
//-------------------

function invisible(elem){
    elem.classList.add("invisible");
}

invisible(li);
//-------------------

function takesText (text){
    let x = document.querySelector('li');
    x.innerText = text;
    return x;
}

let y = takesText("xxxyyy");
argument(y);
//-------------------

function last (hSize,text){
    let h = document.querySelector(`h${hSize}`);
    h.innerText = text;
    return h

}

let g = last("3","New Header")

argument(g);