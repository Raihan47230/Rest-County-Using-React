

const SingleCountry = ({countryName}) => {
     console.log(countryName)
     const {continents,capital, flags,area,name}=countryName
     return (
          <div className="rest">
               <p>Country Name : {name.common}</p>
               <p>Capital : {capital}</p>
               <p>Area : {area}</p>
               <img src={flags.png} alt="" /> <br />
               <br />
               <button>Visited</button>
          </div>
     );
};

export default SingleCountry;




