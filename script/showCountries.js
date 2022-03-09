export const showCountries = async (arrayCountries, cards) => {
  const countries = await arrayCountries;
  countries.forEach((country) => {
    const { id, name, region, population, capital } = country;
    cards.innerHTML += `
      
    `;
  });
};
