// ===== FHIR Académie — Gestion du panier (localStorage) =====
const CART_KEY = "fhir_academie_cart";

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(courseId){
  const cart = getCart();
  if(!cart.includes(courseId)){
    cart.push(courseId);
    saveCart(cart);
  }
  return cart;
}

function removeFromCart(courseId){
  const cart = getCart().filter(id => id !== courseId);
  saveCart(cart);
  return cart;
}

function isInCart(courseId){
  return getCart().includes(courseId);
}

function getCartCourses(){
  const ids = getCart();
  return COURSES.filter(c => ids.includes(c.id));
}

function getCartTotal(){
  return getCartCourses().reduce((sum, c) => sum + c.price, 0);
}

function updateCartBadge(){
  const el = document.getElementById("cartCount");
  if(el) el.textContent = getCart().length;
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
