import getCountries from "./getCountries";
import { showCountries } from "./showCountries";

const endpoint = "https://restcountries.com/v3.1/";

const card = document.getElementById("cards");

document.addEventListener("DOMContentLoaded", () => {
  const countries = getCountries(endpoint);
  showCountries(countries, card);
});

card.addEventListener("click", async (e) => {
  const btnDetail = e.target.classList.contains("btn-detail");
  const code = e.target.id;

  if (btnDetail) {
    const list = await getCountries(endpoint);
    const country = list.find(
      (element) => element.alpha2Code.toLocaleLowerCase === code
    );
    localStorage.setItem("Country", JSON.stringify(country));
    window.location.href = "details.html";
  }
});
