import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "../../Components/Desktop/Language";
import { HashLink } from 'react-router-hash-link';
import { useRecoilState } from "recoil";
import {
  modalPoolOpenState,
  modalSwapOpenState,
  modalPool2OpenState,
} from "../../../store/modal";

function Gnb({ connectWallet, account, onDisconnect }) {
  const { t, i18n } = useTranslation();
  const [black, setBlack] = useState(false);

  const [modalPoolOpen, setModalPoolOpen] = useRecoilState(modalPoolOpenState);
  const [modalSwapOpen, setModalSwapOpen] = useRecoilState(modalSwapOpenState);
  const [modalPool2Open, setModalPool2Open] = useRecoilState(
    modalPool2OpenState
  );

  // const homeSection = useScrollSection('home');
  // const aboutSection = useScrollSection('about');



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
      <SubContainer>
        <Logo>
          <HashLink
            to={"/#home"}
            onClick={() => {
              setModalPoolOpen(false);
              setModalPool2Open(false);
              setModalSwapOpen(false);
            }}
          >
            <img src="/logo.png" />
          </HashLink>
        </Logo>
        <Nav>
          <HashLink
            to={"/#home"}
            onClick={() => {
              setModalPoolOpen(false);
              setModalPool2Open(false);
              setModalSwapOpen(false);
            }}
          >
            <div className="dropdown">
              <a>Home</a>
            </div>
          </HashLink>
          <div className="dropdown">
            <HashLink
              to={"/about#aboutSection1"}
              onClick={() => {
                setModalPoolOpen(false);
                setModalPool2Open(false);
                setModalSwapOpen(false);
              }}
            >
              <a>About</a>
            </HashLink>
            <div className="dropdownContent">
              <HashLink
                to={"/about#aboutSection1"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Ecosystem</a>
                </div>
              </HashLink>
              <HashLink
                to={"/about#aboutSection2"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <span>Recharge Virtuous Cycle</span>
                </div>
              </HashLink>
              <HashLink
                to={"/about#aboutSection3"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Team members</a>
                </div>
              </HashLink>
              <HashLink
                to={"/about#aboutSection4"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Recharge is on</a>
                </div>
              </HashLink>
            </div>
          </div>
          <div className="dropdown">
            <HashLink
              to={"/recharge#rechargeSection1"}
              onClick={() => {
                setModalPoolOpen(false);
                setModalPool2Open(false);
                setModalSwapOpen(false);
              }}
            >
              <a>Recharge Token</a>
            </HashLink>
            <div className="dropdownContent">
              <HashLink
                to={"/recharge#rechargeSection1"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Features</a>
                </div>
              </HashLink>
              <HashLink
                to={"/recharge#rechargeSection3"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Distribution</a>
                </div>
              </HashLink>
              <HashLink
                to={"/recharge#rechargeSection4"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Governance</a>
                </div>
              </HashLink>
              <HashLink
                to={"/recharge#rechargeSection5"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Exchanges</a>
                </div>
              </HashLink>
            </div>
          </div>
          <div className="dropdown">
            <HashLink
              to={"/defi#station"}
              onClick={() => {
                setModalPoolOpen(false);
                setModalPool2Open(false);
                setModalSwapOpen(false);
              }}
            >
              <a>De-Fi</a>
            </HashLink>
            <div className="dropdownContent">
              <HashLink
                to={"/defi#station"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Station</a>
                </div>
              </HashLink>
              <HashLink
                to={"/defi#mypools"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>My pools</a>
                </div>
              </HashLink>
              <HashLink
                to={"/defi#analytics"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Analytics</a>
                </div>
              </HashLink>
            </div>
          </div>
          <div className="dropdown">
            <Link to={"/docs/1"}>
              <a
                onClick={() => {
                  window.scrollTo(0, 0);
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                Docs
              </a>
            </Link>
            <div className="dropdownContent">
              <Link
                to={"/docs/1"}
                onClick={() => {
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>WhitePaper</a>
                </div>
              </Link>

              <div className="unactive" style={{ cursor: "not-allowed" }}>
                Onepager
              </div>
              <div>
                <a
                  href="https://www.certik.org/projects/therecharge"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setModalPoolOpen(false);
                    setModalPool2Open(false);
                    setModalSwapOpen(false);
                  }}
                >
                  Token Audit
                </a>
              </div>
              <Link
                to={"/docs/2"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>Disclaimer</a>
                </div>
              </Link>
              <Link
                to={"/docs/3"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setModalPoolOpen(false);
                  setModalPool2Open(false);
                  setModalSwapOpen(false);
                }}
              >
                <div>
                  <a>CI Download</a>
                </div>
              </Link>
            </div>
          </div>

        </Nav>
        <Language />
        <ConnectWallet
          onClick={
            account
              ? () => {
                onDisconnect();
              }
              : () => {
                connectWallet();
              }
          }
        >
          <span>
            {account
              ? account.substring(0, 8) + "..." + account.substring(36, 42)
              : "Wallet Connect"}
          </span>
        </ConnectWallet>
      </SubContainer>
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
const SubContainer = styled.div`
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
