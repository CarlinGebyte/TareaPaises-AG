import getCountries from "../script/getCountries.js";
import { showCountries } from "../script/showCountries.js";

const endpoint = "https://restcountries.com/v3.1/";

const card = document.getElementById("cards");

document.addEventListener("DOMContentLoaded", () => {
  const countries = getCountries(`${endpoint}all`);
  showCountries(countries, card);
});

card.addEventListener("click", async (e) => {
  const btnDetail = e.target.classList.contains("btn-detail");
  const code = e.target.id;

  if (btnDetail) {
    const list = await getCountries(`${endpoint}all`);
    const country = list.find(
      (element) => element.cca2.toLocaleLowerCase() === code.toLocaleLowerCase()
    );
    localStorage.setItem("Country", JSON.stringify(country));
    window.location.href = "details.html";
  }
});

const inputSearch = document.getElementById("inputBusqueda");

inputSearch.addEventListener("keyup", async () => {
  let searchValue = inputSearch.value;
  console.log(searchValue);
  if (searchValue.length > 0) {
    const countries = await getCountries(`${endpoint}all`);
    let searchResult = countries.filter((country) =>
      country.name.official
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );

    card.innerHTML = "";

    showCountries(searchResult, card);
  }
});

const selectContainer = document.getElementById("selectContainer");
selectContainer.addEventListener("change", async () => {
  card.innerHTML = "";
  let selectValue = selectContainer.value;
  let selectedCountries = await getCountries(
    `${endpoint}region/${selectValue}`
  );
  showCountries(selectedCountries, card);
});
