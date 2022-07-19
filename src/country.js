import React from 'react'
import styled from 'styled-components'

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0,0,0,.2);
  img{
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }
  .details{
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: .3s border;
    background: var(--white);
  }
  h2{
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p{
    font-size: .9em;
    margin-bottom: .5rem;
  }

`

function Country({
    flag,
    name,
    population,
    region,
    capital,
}) {
  return (
    <CountryStyled>
      
      <div className="details">
        <img src={flag} alt="" />
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country
