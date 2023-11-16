//Cvičení 1. HOTOVO
function parseDate(datum) {
    const [den, mesic, rok] = datum.split('.');
  
    const day = parseInt(den);
    const month = parseInt(mesic);
    const year = parseInt(rok);
  
    return {
      day,
      month,
      year,
    };
  }

  const vysledek = parseDate('12.03.2015');
  document.body.innerHTML = `Nové datum: ${JSON.stringify(vysledek)}`




