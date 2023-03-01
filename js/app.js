// const loadAllCountries =() => {
//     const url = 'https://restcountries.com/v3.1/all'
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayAllCountries(data))
// }

const loadCountryByRegion = (region) =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/region/${region}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllCountries(data));
}

const showAllDataTogether = (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        displayAllCountries(data);
      });
  };



const displayAllCountries = countries => {
    const countryContainer = document.getElementById('country-container')
    countryContainer.innerHTML="";
    countries.forEach(country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add("card", "card-compact", "w-96", "bg-base-100", "shadow-xl");
        countryDiv.innerHTML=`
            <figure><img src="${country.flags.png}" class="mt-5 rounded-lg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${country.name.common}</h2>
                <p>Region: ${country.region}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        `;
        countryContainer.appendChild(countryDiv)
    })

}

const loadCountry = () => {
    const countryRegion = document.getElementById('country-region');
    const region = countryRegion.options[countryRegion.selectedIndex].innerText
        console.log(region)
        loadCountryByRegion(region)
        
    }





loadCountryByRegion('Asia')