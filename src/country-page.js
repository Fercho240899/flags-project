import styled from "styled-components";
import React, {useEffect, useState}from "react";
import Wrapper from "./wrapper";
import { useSelector } from "react-redux";
import CountrySelected from "./country-selected";

const CountryPageStyled = styled.div`
  padding: 1.5rem 3rem;
  
  .back{
    background: var(--white);
    color: var(--black);
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
    padding: .5em 2em;
    cursor: pointer;
    margin-top: 1em;
    i{
      margin-right: 5px;
    }

  }
`;

function CountryPage({ match, history}) {
  
  let DBcountry = useSelector(state => state.countryList.find(item => item.alpha2Code === match.params.id))
  const [country, setCountry] = useState(DBcountry)


  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.com/v2/alpha/${match.params.id.toLowerCase()}`)
      
        .then((response) => {
          return response.json()
        })
        
        .then((data) => {
          setCountry(data)
        })
        
    }
  }, [country, match.params.id])

  function handleClick(){
    history.goBack()
  }


  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}> <i class="fas fa-long-arrow-alt-left"></i> Back</button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage
