function init() {
  var html_btn = document.getElementById("btn");
  html_btn.onclock = convert_button_click; 
}

function convert_button_click() {
   var usd = prompt("Enter USD: ");
   var vnd = usd*25;
   var message = document.getElementById("message");
   html_message.textContent = "You enter: " + usd + " USD, this is converted to VND: " + vnd "K"
}

window.onload = init;