// Skapar ett htttp req
var xhr = new XMLHttpRequest();
// VArt datan hämtas
xhr.open('GET', '../data/personer.json');
// När datan hämtas kör denna funktion
xhr.onreadystatechange = function () {
  // Om allt är hämtat
  if(xhr.readyState === 4 && xhr.status === 200) {
    // Gör datan till en json objekt för att kunna loopa igenom som sparas i var
    var personer = JSON.parse(xhr.responseText);
    // skapa ul där allt ska läggas i
    var statusHTML = '<ul class="bulleted">';
    // Kör loopen igenom datan
    for (var i=0; i<personer.length; i += 1) {
      // om han är inne lägger vi till classen .in
      if (personer[i].inoffice === true) {
        statusHTML += '<li class="in">';
        // nom hanär ute lägger vi classen .out
      } else {
        statusHTML += '<li class="out">';
      }
      // Hämtar namn från datan
      statusHTML += personer[i].name;
      // avslutar raden
      statusHTML += '</li>';
    }
    // stänger ul
    statusHTML += '</ul>';
    // lägger in allt till diven med id
    document.getElementById('personListan').innerHTML = statusHTML;
  }
};
xhr.send();
