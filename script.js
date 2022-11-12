var btnGreet = document.getElementById("btnSaludo");
var txtName = document.getElementById("txtNombre");
var txtGreet = document.getElementById("txtSaludo");
var lista = [
 "Hello",
  "Bonjour",
  "Hallo",
  "Ciao",
  "Olà",
  "Namaste",
  "Aloha",
 "Konniichiwa",
  "Merhaba",
  "Hola",
  "Nǐ hǎo",
  "Privet",
  "marhaban",
  "Përshëndetje",
  "Chaírete",
  "Witam",
  "Hyālō",
  "Szia",
  "Buna ziua",
  "Salve",
  "Merhaba",
  "Hei",
  "Xin chào",
  "Helo",
  "Sain uu",
  "Sawubona",
  "Ahoj",
  "Szia",
  "Barev DZez",
  "Chaírete",
  "Witam",
  "Akkam",
  "Përshëndetje",
  "Kamisaki",
  "Szia",
  "S̄wạs̄dī",
  "marhaban",
  "aw ni baara",
  "Allinllachu",
  "Salom",
  "Salut",
  "annyeonghasibnikka",
  "zdravo"

]
function saludar(){
  if (txtName.value == "") {
    alert("Error, ingresar un nombre.")
    txtGreet.innerHTML=""

  } else {
    var nombre = txtName.value
    var numero = Math.floor(Math.random()*lista.length)
    var saludo = lista[numero] + ", " + nombre
    txtGreet.innerHTML = saludo
}


}