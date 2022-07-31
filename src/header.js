import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1rem;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.06);
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: var(--dark);
  }
  button {
    background: var(--black);
    color: var(--white);
    border: 2px solid var(--white);
    border-radius: 10px;
    cursor: pointer;
  }
  .dark-mode {
    cursor: pointer;

    .moon {
      transform: rotate(-25deg); /*sirve para rotar la luna*/
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }

    button {
      background: var(--white);
      color: var(--black);
      border: 2px solid var(--black);
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3.5rem;

    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

function Header({ setDarkMode, darkMode }) {
  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {darkMode ? (
                  <i class="fas fa-moon"></i>
                ) : (
                  <i class="far fa-moon"></i>
                )}
              </span>
              <button>Dark Mode</button>
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
