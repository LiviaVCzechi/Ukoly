//Úkol č. 1 FIT email
/*const jmeno = prompt("Jmeno bez diakritiky").trim();
const prijmeni = prompt("Prijmeni bez diakritiky").trim();
const email = { 
    jmenoKurz: jmeno.slice(0, 3),
    prijmeniKurz: prijmeni.slice(0, 5),
    };  
document.body.innerHTML = "<p>Email: " + email.prijmeniKurz.toLowerCase() + email.jmenoKurz.toLowerCase() + "@fit.cvut.cz"
"</p>" */

//Úkol č. 2 Množstevní slevy
const pocetKusu = prompt ("Zadej počet kusů: ")
{
    
    if (pocetKusu < 50) {
        document.body.innerHTML = "<p>Cena: " + pocetKusu
        * 300 + "</p>"; 
    }
        else if (pocetKusu < 200) {
        document.body.innerHTML = "<p>Cena: " + pocetKusu * 250 + "</p>"; 
    }
  
    else if (pocetKusu < 500) {
        document.body.innerHTML = "<p>Cena: " + pocetKusu * 200 + "</p>";
    }
  
    else if (pocetKusu < 1000) {
        document.body.innerHTML = "<p>Cena: " + pocetKusu * 150 + "</p>";
    }
  
    else {
        document.body.innerHTML = "<p>Cena: " + pocetKusu * 120 + "</p>";
    }
  }



