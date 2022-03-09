export const showCountries = async (arrayCountries, cards) => {
  let countries = await arrayCountries;
  countries = countries.slice(0,29);
//   let count = 0;
  countries.forEach((country) => {
    // if (count < 15) {
      const { cca2, flags, name, region, population, capital } = country;
    //   count++;
      cards.innerHTML += `
      <div class="card">
        <div class="card-body" >
        <img src=${flags.png} class="card-img-top" alt="...">
          <h5 class="card-title">${name.official}</h5>
          <p>Región: ${region}</p>
          <p>Población: ${population}</p>
          <p>Capital: ${capital}</p>
          <a href="#" id=${cca2} class="btn btn-outline-dark btn-detail" style="background-color: #db7093;">Detail</a>
        </div>
      </div>
    `;
    // console.log(count);
    // } else {
        // return
    // }
  });
};
