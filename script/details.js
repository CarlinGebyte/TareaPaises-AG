const showDetails = () => {
	const container = document.querySelector('#app');
	const country = JSON.parse(localStorage.getItem(country));
	const { name, flags, population, region, capital } = country;
	const { official } = name;
	const { svg } = flags;

	const card = `
    <article>
      <img src=${svg}  alt="${official}">
      <h2>${official}</h2>
      <span>Population: ${population}</span>
      <span>Region: ${region}</span>
      <span>Capital: ${capital}</span>

    </article>
      `;

	container.insertAdjacentHTML('beforeend', card);
};

document.addEventListener('DOMContentLoaded', showDetails);
