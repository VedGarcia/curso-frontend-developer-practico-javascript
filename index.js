// <-- NavBar y Menu -->

// Selectores
let menuHamb = document.querySelector(".menu");
let menuDesktop = document.querySelector(".desktop-menu");
let navEmail = document.querySelector(".navbar-email");
let mobMenu = document.querySelector(".mobile-menu");
let cartIcon = document.querySelector(".navbar-shopping-cart");
let producDetail = document.querySelector(".product-detail");
let cardContainer = document.querySelector(".cards-container");

// Escuchas
navEmail.addEventListener("click", toggMenuD);
menuHamb.addEventListener("click", toggMobMenu);
cartIcon.addEventListener("click", toggProducDetail);

//Funciones para mostrar/ocultar

function toggMenuD() {
  const desProdcDetail = producDetail.classList.contains("inactive");
  if (!desProdcDetail) {
    toggProducDetail();
  }
  menuDesktop.classList.toggle("inactive");
}
function toggMobMenu() {
  const desProdcDetail = producDetail.classList.contains("inactive");
  if (!desProdcDetail) {
    toggProducDetail();
  }
  mobMenu.classList.toggle("inactive");
}
function toggProducDetail() {
  const desMobMenu = mobMenu.classList.contains("inactive");
  const desMenuDesk = menuDesktop.classList.contains("inactive");
  if (!desMobMenu) {
    toggMobMenu();
  }
  if (!desMenuDesk) {
    toggMenuD();
  }
  producDetail.classList.toggle("inactive");
}
// <~ Final de NavBar y Menu ~>

let arrCardContain = [];
arrCardContain.push({
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 250,
  name: "Bike",
});
arrCardContain.push({
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 300,
  name: "Monitor",
});
arrCardContain.push({
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 500,
  name: "Computer",
});
arrCardContain.push({
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 700,
  name: "Play Station",
});

 
const renderCardList = (arrCard) => { 
  /*<div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
 </div>*/
for (card of arrCard) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  
  const imgCard = document.createElement('img');
  imgCard.setAttribute('src', card.img);
  
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  
  const divProductInfo = document.createElement('div');
  
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + card.price;
  
  const productName = document.createElement('p');
  productName.innerText = card.name;
  
  const figureProductInfo = document.createElement('figure');
  
  const imgAddCart = document.createElement('img');
  imgAddCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
  
  // metiendo hijo dentro de sus padres
  figureProductInfo.appendChild(imgAddCart);
  divProductInfo.append(productPrice, productName);
  productInfo.append(divProductInfo, figureProductInfo);
  productCard.append(imgCard, productInfo);
  
  cardContainer.appendChild(productCard);
}
}

renderCardList(arrCardContain);
