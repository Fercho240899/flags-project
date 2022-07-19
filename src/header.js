import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";

const HeaderStyled = styled.div`
    background: var(--white);
    margin-bottom: 1rem;
    box-shadow: 0 10px 10px 0 rgba(0,0,0,.06);
.content{
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    height: 80px;
    justify-content: space-between;
    align-items: center;
}
h1{
    font-size: 18px;
}
.dark-mode{
    .moon{
        transform: rotate(-25deg); /*sirve para rotar la luna*/
        display: inline-flex;
        margin-right: 10px;
    }
    p{
        font-size: 12px;
        font-weight: 600;

    }
}
  
`

function Header() {
  function handleClick() {}
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
        <h1>Where in the world?</h1>
        <div className="dark-mode">
          <p onClick={handleClick}>
            <span className="moon">
            <i class="far fa-moon"></i>
            </span>
             Dark Mode
          </p>
        </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
