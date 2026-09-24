// ===== FHIR Académie — Authentification (démo locale via localStorage) =====
// ⚠️ Ceci est une simulation côté navigateur pour la démo du site.
// Un vrai lancement commercial nécessite un backend (Node/Express, Firebase Auth,
// Supabase, Auth0...) car localStorage n'est ni sécurisé ni partagé entre appareils.

const USERS_KEY = "fhir_academie_users";
const SESSION_KEY = "fhir_academie_session";

function getUsers(){
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch(e){ return []; }
}

function saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function createAccount({ fullName, email, password }){
  const users = getUsers();
  const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if(existing){
    setSession(existing);
    return existing;
  }
  const newUser = { id: "u_" + Date.now(), fullName, email, password };
  users.push(newUser);
  saveUsers(users);
  setSession(newUser);
  return newUser;
}

function loginAccount({ email, password }){
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if(!user){
    return { ok: false, message: "Aucun compte trouvé avec cette adresse email." };
  }
  if(user.password !== password){
    return { ok: false, message: "Mot de passe incorrect." };
  }
  setSession(user);
  return { ok: true, user };
}

function setSession(user){
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, fullName: user.fullName, email: user.email }));
}

function getSession(){
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); }
  catch(e){ return null; }
}

function logout(){
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "index.html";
}

function renderAuthHeaderLink(){
  const el = document.getElementById("authHeaderLink");
  if(!el) return;
  const session = getSession();
  if(session){
    el.innerHTML = `<a href="compte.html">👤 ${session.fullName.split(" ")[0]}</a>`;
  } else {
    el.innerHTML = `<a href="connexion.html">Se connecter</a>`;
  }
}

document.addEventListener("DOMContentLoaded", renderAuthHeaderLink);
