import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
import Country from './country';

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  border: 1px solid red;
  padding: 4em 2em;
`

function CountryList () {
    const [countryList, setCountryList] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then((response) => {
            return response.json()

        })
        .then((data) => {
            setCountryList(data)
            console.log(data)

        })
        .catch(() => {
            console.log('hubo un error, que dolor')

        })
    
    }, [])
  return (
    <CountryListStyled>
        {
            countryList.map(({flag, name, population, region, capital}) => {
                return (
                <Country 
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
                />
      )
    })
  }
     
    </CountryListStyled>
  );
}

export default CountryList
