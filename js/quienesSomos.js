

  Promise.all([
    fetch('https://randomuser.me/api/?results=3&gender=male').then(response => response.json()),
    fetch('https://randomuser.me/api/?results=3&gender=female').then(response => response.json())
  ])
  .then(data => {
    const hombre = data[0].results;
    const mujer = data[1].results;
  console.log(data);
    // Combinar los resultados de las dos solicitudes de forma intercalada
    const combinar = [];
    for (let i = 0; i < hombre.length || i < mujer.length; i++) {
      if (hombre[i]) {
        combinar.push(hombre[i]);
      }
      if (mujer[i]) {
        combinar.push(mujer[i]);
      }
    }

    // crea un div por cada usuario
    const user = document.getElementById("users");
    combinar.forEach(result => {
      user.innerHTML += `
        <div class="tarjeta">
          <img src="${result.picture.large}">
          <p>${result.name.first} ${result.name.last}</p>
          <p>${result.location.state}, ${result.location.country}</p>
          <p>${result.email}</p>
        </div>
      `;
    });
  })
    