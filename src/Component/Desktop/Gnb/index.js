import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Language from "../../Components/Desktop/Language";

function Gnb({ connectWallet, account, onDisconnect }) {
  const { t, i18n } = useTranslation();
  const [black, setBlack] = useState(false);
  const listener = (e) => {
    if (window.scrollY > 0) {
      setBlack(true);
    }
    if (window.scrollY == 0) {
      setBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <Container
      style={
        black
          ? { backgroundColor: "#000000", borderBottom: "1px solid white" }
          : { backgroundColor: "#02051c" }
      }
    >
      <Section>
        <Logo>
          <Link
            to={"/"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src="/logo.png" />
          </Link>
        </Logo>

        <Nav>
          <Link to={"/"}>
            <div className="dropdown">
              <a
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </a>
            </div>
          </Link>
          <Link to={"/about"}>
            <div className="dropdown">
              <a
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                About
              </a>
              <div className="dropdownContent">
                <Link to={"/about#aboutSection1"}>
                  <div>
                    <a>Ecosystem</a>
                  </div>
                </Link>
                <Link to={"/about#aboutSection2"}>
                  <div>
                    <a>Recharge Virtuous Cycle</a>
                  </div>
                </Link>
                <Link to={"/about#aboutSection3"}>
                  <div>
                    <a>Team members</a>
                  </div>
                </Link>
                <Link to={"/about#aboutSection4"}>
                  <div>
                    <a>Recharge is on</a>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
          <Link to={"/recharge"}>
            <div className="dropdown">
              <a
                href={"/recharge"}
              // onClick={() => {
              //   window.scrollTo(0, 0);
              // }}
              >
                Recharge Token
              </a>
              <div className="dropdownContent">
                <Link to={"/recharge#rechargeSection1"}>
                  <div>
                    <a>Features</a>
                  </div>
                </Link>
                <Link to={"/recharge#rechargeSection3"}>
                  <div>
                    <a>Distribution</a>
                  </div>
                </Link>
                <Link to={"/recharge#rechargeSection4"}>
                  <div>
                    <a>Governance</a>
                  </div>
                </Link>
                <Link to={"/recharge#rechargeSection5"}>
                  <div>
                    <a>Exchanges</a>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
          <Link to={"/defi"}>
            <div className="dropdown">
              <a
                href={"/defi"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                De-Fi
              </a>
              <div className="dropdownContent">
                <Link to={"/defi#station"}>
                  <div>
                    <a>Station</a>
                  </div>
                </Link>
                <Link to={"/defi#mypools"}>
                  <div>
                    <a>My pools</a>
                  </div>
                </Link>
                <Link to={"/defi#analytics"}>
                  <div>
                    <a>Analytics</a>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
          <Link to={"/docs/1"}>
            <div className="dropdown">
              <a
                href={"/docs/1"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Docs
              </a>
              <div className="dropdownContent">
                <Link to={"/docs/1"}>
                  <div>
                    <a>WhitePaper</a>
                  </div>
                </Link>

                <div className="unactive" style={{ cursor: "not-allowed" }}>
                  Onepager
                </div>
                <div>
                  <a href="https://www.certik.org/projects/therecharge">
                    Token Audit
                  </a>
                </div>
                <Link to={"/docs/1"}>
                  <div>
                    <a>Disclaimer</a>
                  </div>
                </Link>
                <Link to={"/docs/3"}>
                  <div>
                    <a>CI Download</a>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
        </Nav>
        <Language />
        <ConnectWallet
          onClick={account
            ? () => { onDisconnect(); }
            : () => { connectWallet(); }
          }
        >
          <span>
            {account
              ? account.substring(0, 8) + "..." + account.substring(36, 42)
              : "Wallet Connect"}
          </span>
        </ConnectWallet>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  // width: 1920px;
  width: 100%;
  min-width: 1088px;
  height: 100px;
  z-index: 6;
  a {
    text-decoration: none;
  }
`;
const Section = styled.div`
  display: flex;
  width: 1080px;
  margin: auto auto;
  .lang {
    margin: auto;
    margin-left: 0px;
    margin-right: 0px;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Logo = styled.div`
  margin: auto auto;
  margin-left: 20px;
  img {
    width: 40px;
    height: 40px;
  }
`;

const Nav = styled.div`
  display: flex;
  // width: 30%;
  margin: auto auto;
  margin-right: 0px;

  .dropdown {
    align-items: center;
    display: flex;
    margin: auto auto;
    padding: 0 30px;
    height: 60px;

    a {
      color: #ffffff;
    }
  }
  .dropdownContent {
    display: none;
    position: absolute;
    top: 75px;
    min-width: 9%;
    padding: 10px 35px 10px 15px;
    margin-left: -15px;
    background-color: black;

    a {
      color: var(--gray-20);
    }
    a: hover {
      color: #ffffff;
    }
    div {
      margin: 10px 0;
    }
    div:hover {
    }
    .unactive {
      color: var(--gray-20);
    }
  }
  .dropdown:hover .dropdownContent {
    display: block;
  }
`;

const ConnectWallet = styled.div`
  margin: auto 15px;
  margin-right: 20px;
  padding: 5px 10px;
  color: gray;

  border: 1px solid var(--yellow);
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: var(--yellow);
    color: var(--white);
  }
`;

export default Gnb;
