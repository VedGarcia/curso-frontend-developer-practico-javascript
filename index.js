// <-- NavBar y Menu -->

// Selectores
let menuHamb = document.querySelector(".menu");
let menuDesktop = document.querySelector(".desktop-menu");
let navEmail = document.querySelector(".navbar-email");
let mobMenu = document.querySelector(".mobile-menu");
let cartIcon = document.querySelector(".navbar-shopping-cart");
let cartProducDetail = document.querySelector(".cart-detail");
let cardContainer = document.querySelector(".cards-container");
let productDetail = document.querySelector(".product-detail");
let productDetailClose = document.querySelector(".product-detail-close");

// Escuchas
navEmail.addEventListener("click", toggMenuD);
menuHamb.addEventListener("click", toggMobMenu);
cartIcon.addEventListener("click", toggCartProducDetail);
productDetailClose.addEventListener("click", closeProductDetail);
//Funciones para mostrar/ocultar

function toggMenuD() {
  const desProdcDetail = cartProducDetail.classList.contains("inactive");
  const productDetailActive = !productDetail.classList.contains("inactive");
  if (!desProdcDetail) {
    toggCartProducDetail();
  }
  if (productDetailActive) {
    closeProductDetail();
  }
  menuDesktop.classList.toggle("inactive");
}
function toggMobMenu() {
  const desProdcDetail = cartProducDetail.classList.contains("inactive");
  const productDetailActive = !productDetail.classList.contains("inactive");

  if (!desProdcDetail) {
    toggCartProducDetail();
  }
  if (productDetailActive){
    closeProductDetail();
  }
  mobMenu.classList.toggle("inactive");
}
function toggCartProducDetail() {
  const productDetailActive = !productDetail.classList.contains("inactive");
  const desMobMenu = mobMenu.classList.contains("inactive");
  const desMenuDesk = menuDesktop.classList.contains("inactive");
  if (!desMobMenu) {
    toggMobMenu();
  }
  if (!desMenuDesk) {
    toggMenuD();
  }
  if (productDetailActive) {
    closeProductDetail();
  }
  cartProducDetail.classList.toggle("inactive");
}
function openProductDetail() {
  const desProdcDetail = cartProducDetail.classList.contains("inactive");
  const desMenuDesk = menuDesktop.classList.contains("inactive");

  if (!desProdcDetail){
  cartProducDetail.classList.add("inactive");
  }
  if (!desMenuDesk){
    toggMenuD();
  }
  productDetail.classList.remove("inactive");
}
function closeProductDetail() {
  productDetail.classList.add("inactive");
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
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", card.img);
    imgCard.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divProductInfo = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + card.price;

    const productName = document.createElement("p");
    productName.innerText = card.name;

    const figureProductInfo = document.createElement("figure");

    const imgAddCart = document.createElement("img");
    imgAddCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    // metiendo hijo dentro de sus padres
    figureProductInfo.appendChild(imgAddCart);
    divProductInfo.append(productPrice, productName);
    productInfo.append(divProductInfo, figureProductInfo);
    productCard.append(imgCard, productInfo);

    cardContainer.appendChild(productCard);
  }
};

renderCardList(arrCardContain);
