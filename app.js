const countryName = () => {
  const inputFild = document.getElementById("country-name");
  const name = inputFild.value;
  loadCountry(name);
};

const loadCountry = (country) => {
  if (country === "all") {
    const url = `https://restcountries.com/v2/${country}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayConutry(data));
  } else {
    const url = `https://restcountries.com/v3.1/name/${country}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayConutry(data));
  }
};

const displayConutry = (countries) => {
  console.log(countries[0]);
  countries.forEach((country) => {
    const { name, flag, capital, nativeName, region, subregion} = country;

    const allCountry = document.getElementById("all-country");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
  <div class="card h-100">
  <img src="${flag}" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">
       Capital: ${capital}
    </p>
    <p class="card-text">
       Region: ${region}  (${subregion}) 
    </p>
    <p class="card-text">
    Subregion: ${subregion} 
    </p>
  </div>
  <div class="d-grid gap-2">
  <button class="btn btn-info" type="button">Detiles</button>
</div>
</div>
  `;
    allCountry.appendChild(div);
  });
};
loadCountry("all");
// loadCountry("bangladesh");
