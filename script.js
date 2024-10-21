var img = document.querySelector("#coffee_images");
var col1 = document.querySelector("#txt1-color");
var col2 = document.querySelector("#txt2-color");
var col3 = document.querySelector("#txt3-color");

var pimg = document.querySelector("#pastry-imgs");
var pcol1 = document.querySelector("#pastry-col1");
var pcol2 = document.querySelector("#pastry-col2");
var pcol3 = document.querySelector("#pastry-col3");

var meals_img = document.querySelector("#meals-images");
var mcol1 = document.querySelector("#meal1-color");
var mcol2 = document.querySelector("#meal2-color");
var mcol3 = document.querySelector("#meal3-color");

function Cappucino() {
    img.src = "images/menu-coffee/coffee1.jpg";
    col1.style.color = "#c8935f";
    col2.style.color = "#000";
    col3.style.color = "#000";
}

function Americano() {
    img.src = "images/menu-milktea/milktea9.jpg";
    col1.style.color = "#000";
    col2.style.color = "#c8935f";
    col3.style.color = "#000";
}

function Latte() {
    img.src = "images/menu-fruitjuice/fruitjuice1.jpg";
    col1.style.color = "#000";
    col2.style.color = "#000";
    col3.style.color = "#c8935f";
}

function Cake() {
    pimg.src = "images/menu-frappe/frappe2.jpg";
    pcol1.style.color = "#c8935f";
    pcol2.style.color = "#000";
    pcol3.style.color = "#000";
}

function Cookies() {
    pimg.src = "images/menu-shake/shake2.jpg";
    pcol1.style.color = "#000";
    pcol2.style.color = "#c8935f";
    pcol3.style.color = "#000";
}

function Brownies() {
    pimg.src = "images/menu-pasta/pasta7.jpg";
    pcol1.style.color = "#000";
    pcol2.style.color = "#000";
    pcol3.style.color = "#c8935f";
}

function SMeals() {
    meals_img.src = "images/menu-silog/silog3.jpg";
    mcol1.style.color = "#c8935f";
    mcol2.style.color = "#000";
    mcol3.style.color = "#000";
}

function Pasta() {
    meals_img.src = "images/menu-appetizer/app2.jpg";
    mcol1.style.color = "#000";
    mcol2.style.color = "#c8935f";
    mcol3.style.color = "#000";
}

function Appetizers() {
    meals_img.src = "images/menu-wings/wings3.jpg";
    mcol1.style.color = "#000";
    mcol2.style.color = "#000";
    mcol3.style.color = "#c8935f";
}

document.querySelectorAll('.images-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

const images = ['gallery1', 'gallery2', 'gallery3', 'gallery4', 'gallery5', 'gallery6', 
    'gallery7', 'gallery8', 'gallery9', 'gallery10', 'gallery11', 'gallery12', 
    'gallery13', 'gallery14', 'gallery15',]

let currentIndex = 0;

const popupImage = document.querySelector('.popup-image');
const currentImg = document.getElementById('current-img');

function updatePopupImage() {
    currentImg.src = images[currentIndex] + ".jpg";
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updatePopupImage();
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updatePopupImage();
}

document.querySelectorAll('.gallery-img img').forEach((imgElement, index) => {
    imgElement.addEventListener('click', () => {
        currentIndex = index;
        updatePopupImage();
        popupImage.style.display = 'block';
    });
});

document.querySelector('.popup-image span').addEventListener('click', () => {
    popupImage.style.display = 'none';
});
