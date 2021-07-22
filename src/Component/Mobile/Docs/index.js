import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Whitepaper from "./whitepaper";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import commentList from "./commentList/index";

const perPage = 1;

function Docs({ match }) {
  const [menu, setMenu] = useState("Whitepaper");
  const [menuOpen, setMenuOpen] = useState(false);

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewNum, setViewNum] = useState(1);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

  function handlePage(data) {
    setCurrentPage(data.selected);
    window.scrollTo(0, 0);
  }

  const currentComment = (pages) => {
    return pages.slice(currentPage, currentPage + perPage).map((page) => {
      return <div className="currentComment">{page}</div>;
    });
  };

  useEffect(() => {
    setViewNum(match.params.viewNum);
    setPageCount(commentList.length / perPage);
    if (match.params.viewNum == 1) {
      setMenu("Whitepaper");
    } else if (match.params.viewNum == 2) {
      setMenu("Disclaimer");
    } else if (match.params.viewNum == 3) {
      setMenu("CI Download");
    }
    setCurrentPage(currentPage);
  }, []);

  return (
    <Container>
      <div className="menuToggle Roboto_40pt_Black" onClick={() => toggle()}>
        <span>{menu}</span>
        <img src={menuOpen ? "/ic_rollup.svg" : "/ic_rolldown.svg"} />
      </div>
      <Subnav style={menuOpen ? { display: "block" } : { display: "none" }}>
        <div className="nav">
          <div className="topic">
            <Link
              to={"/docs/1"}
              className="Roboto_40pt_Black"
              style={{ textDecoration: "none" }}
              // href="/docs/1"
              onClick={() => {
                toggle();
                setMenu("Whitepaper");
                setViewNum(1);
                window.scrollTo(0, 0);
                setCurrentPage(0);
              }}
            >
              Whitepaper
            </Link>
            <div>
              <Link
                to={"/docs/1"}
                className="text active Roboto_30pt_Regular_Mobile"
                // href="/docs/1"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  toggle();
                  setMenu("Whitepaper");
                  setViewNum(1);
                  window.scrollTo(0, 0);
                  setCurrentPage(0);
                }}
              >
                Background
              </Link>
            </div>
            <div>
              <Link
                to={"/docs/1"}
                className="text active Roboto_30pt_Regular_Mobile"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  toggle();
                  setMenu("Whitepaper");
                  setViewNum(1);
                  window.scrollTo(0, 0);
                  setCurrentPage(1);
                }}
              >
                About Our Business
              </Link>
            </div>
            <div>
              <Link
                to={"/docs/1"}
                className="text active Roboto_30pt_Regular_Mobile"
                href="/docs/1"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  toggle();
                  setMenu("Whitepaper");
                  setViewNum(1);
                  window.scrollTo(0, 0);
                  setCurrentPage(2);
                }}
              >
                Our Platforms
              </Link>
            </div>
            <div>
              <Link
                to={"/docs/1"}
                className="text active Roboto_30pt_Regular_Mobile"
                href="/docs/1"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  toggle();
                  setMenu("Whitepaper");
                  setViewNum(1);
                  window.scrollTo(0, 0);
                  setCurrentPage(3);
                }}
              >
                Vision
              </Link>
            </div>
            <div>
              <Link
                to={"/docs/1"}
                className="text active Roboto_30pt_Regular_Mobile"
                href="/docs/1"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  toggle();
                  setMenu("Whitepaper");
                  setViewNum(1);
                  window.scrollTo(0, 0);
                  setCurrentPage(4);
                }}
              >
                Disclaimers and Risks
              </Link>
            </div>
            <div>
              <Link
                to={"/docs/1"}
                className="text active Roboto_30pt_Regular_Mobile"
                href="/docs/1"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  toggle();
                  setMenu("Whitepaper");
                  setViewNum(1);
                  window.scrollTo(0, 0);
                  setCurrentPage(5);
                }}
              >
                Terms and Definitions
              </Link>
            </div>
          </div>
          <div className="topic unactive Roboto_40pt_Black">
            <span className="on">Onepager</span>
            <span className="off">Coming Soon</span>
          </div>
          <div className="topic Roboto_40pt_Black">
            <a
              href="https://www.certik.org/projects/therecharge"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className="on">Token Audit</span>
            </a>
            {/* <span className="off">Coming Soon</span> */}
          </div>
          <div className="topic active Roboto_40pt_Black">
            <Link
              to={"/docs/2"}
              style={{ textDecoration: "none", color: "white" }}
              // href="/docs/2"
              onClick={() => {
                toggle();
                setMenu("Disclaimer");
                setViewNum(2);
                window.scrollTo(0, 0);
              }}
            >
              Disclaimer
            </Link>
          </div>
          <div className="topic active Roboto_40pt_Black">
            <Link
              to={"/docs/3"}
              // href="/docs/3"
              style={{ textDecoration: "none", color: "#ffffff" }}
              onClick={() => {
                toggle();
                setMenu("CI Download");
                setViewNum(3);
                window.scrollTo(0, 0);
              }}
            >
              CI Download
            </Link>
          </div>
        </div>
      </Subnav>
      <Content>
        <Section id="whitepaper">
          <div
            className={viewNum == 1 ? "active" : "hide"}
            // style={{ "padding-top": "300px", "margin-top": "-300px" }}
          >
            {currentComment(commentList)}
            <ReactPaginate
              previousLabel={"< Back"}
              nextLabel={"Next >"}
              pageCount={pageCount}
              forcePage={currentPage}
              onPageChange={handlePage}
              previousLinkClassName={
                "previousButton Roboto_20pt_Regular_L " +
                (currentPage == 0 ? "hide" : "")
              }
              nextLinkClassName={
                "nextButton Roboto_20pt_Regular_L " +
                (currentPage == 5 ? "hide" : "")
              }
              containerClassName={"pagination"}
              pageClassName={"break"}
            />
          </div>
        </Section>

        <Section id="disclaimer">
          <div className={viewNum == 2 ? "active" : "hide"}>
            <div className="theme Roboto_50pt_Black_L">Disclaimer</div>
            <div
              id="information"
              // style={{ "padding-top": "85px", "margin-top": "-85px" }}
            >
              <div className="semiTitle Roboto_30pt_Black_L">Information</div>
              <div className="text Roboto_20pt_Regular_L">
                The website Therecharge.io (hereinafter, referred to as the
                “Website”) provides information and material of a general
                nature. You are not authorized and nor should you rely on the
                Website for legal advice, business advice, or advice of any
                kind. You act at your own risk in reliance on the contents of
                the Website. Should you make a decision to act or not act you
                should contact a licensed attorney in the relevant jurisdiction
                in which you want or need help. In no way are the owners of, or
                contributors to, the Website responsible for the actions,
                decisions, or other behavior taken or not taken by you in
                reliance upon the Website.
              </div>
            </div>
            <div
              id="investmentrisks"
              // style={{ "padding-top": "85px", "margin-top": "-85px" }}
            >
              <div className="semiTitle Roboto_30pt_Black_L">
                Investment risks
              </div>
              <div className="text Roboto_20pt_Regular_L">
                The investment in Recharge Token can lead to loss of money over
                short or even long periods. The investors in Recharge token
                should expect prices to have large range fluctuations. The
                information published on the Website cannot guarantee that the
                investors in Recharge token would not lose money.
              </div>
            </div>
            <div
              id="nowarranties"
              // style={{ "padding-top": "85px", "margin-top": "-85px" }}
            >
              <div className="semiTitle Roboto_30pt_Black_L">No warranties</div>
              <div className="text Roboto_20pt_Regular_L">
                The Website is provided on an “as is” basis without any
                warranties of any kind regarding the Website and/or any content,
                data, materials and/or services provided on the Website.
              </div>
            </div>
            <div
              id="limitationofliability"
              // style={{ "padding-top": "85px", "margin-top": "-85px" }}
            >
              <div className="semiTitle Roboto_30pt_Black_L">
                Limitation of liability
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Unless otherwise required by law, in no event shall the owners
                of, or contributors to, the Website be liable for any damages of
                any kind, including, but not limited to, loss of use, loss of
                profits, or loss of data arising out of or in any way connected
                with the use of the Website.
              </div>
            </div>
            <div
              id="lastamendment"
              // style={{ "padding-top": "85px", "margin-top": "-85px" }}
            >
              <div className="semiTitle Roboto_30pt_Black_L">
                Last amendment
              </div>
              <div className="text Roboto_20pt_Regular_L">
                This disclaimer was amended for the last time on May 21 2021
              </div>
            </div>
          </div>
        </Section>

        <Section id="docsSection2">
          <div className={viewNum == 3 ? "active" : "hide"}>
            <div className="ciContent">
              <div className="theme Roboto_50pt_Black_L">CI Download</div>
              <div className="topic Roboto_40pt_Black">CI Introduction</div>
              <div className="text Roboto_30pt_Regular_Mobile">
                The brand logo of Recharge is a representation of charging new
                future values.
              </div>
              <div className="ci">
                <div className="logo">
                  <img src="/logo_station.png" />
                </div>
                <div className="buttons">
                  <a href="/therecharge_logo_svg.zip">
                    <div className="button Roboto_30pt_Black_L">
                      <div>Download SVG</div>
                      <div>
                        <img
                          src="/ic_download.svg"
                          style={{ width: "28.7px", height: "25.8px" }}
                        />
                      </div>
                    </div>
                  </a>
                  <a href="/therecharge_logo_png.zip">
                    <div className="button Roboto_30pt_Black_L">
                      <div>Download PNG</div>
                      <div>
                        <img
                          src="/ic_download.svg"
                          style={{ width: "28.7px", height: "25.8px" }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Content>
      <Background />
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
  width: 620px;
  overflow-x: hidden;

  .menuToggle {
    display: flex;
    position: fixed;
    align-items: flex-end;
    top: 100px;
    z-index: 8;
    margin: auto;
    margin-bottom: 120px;
    width: 620px;
    height: 250px;
    color: var(--white);
    border-bottom: 2px solid white;
    background-color: var(--midnight);
    span {
      margin-bottom: 8px;
    }
    img {
      margin: auto;
      margin-right: 50px;
      margin-bottom: 25.5px;
    }
  }
`;

const Subnav = styled.div`
  position: fixed;
  z-index: 2;
  top: 350px;
  overflow: hidden;
  width: 620px;
  height: 100%;
  color: white;
  text-align: center;
  background-color: rgb(0, 0, 0, 0.9);

  .theme {
    text-shadow: 0 0 1px white, 0 0 15px white;
  }

  .nav {
    .topic {
      margin: auto;
      margin-top: 40px;
      div {
        display: flex;
      }

      .text {
        margin: auto;
        margin-top: 20px;
        a {
          color: var(--gray-20);
        }
        .active {
          color: #ffffff;
        }
      }
      .text:hover {
        a {
          color: var(--white);
        }
      }

      .drop {
        /* Initially we don't want any height, and we want the contents to be hidden */
        max-height: 0;
        overflow: hidden;

        /* Set our transitions up. */
        -webkit-transition: max-height 0.8s;
        -moz-transition: max-height 0.8s;
        transition: max-height 0.8s;
      }
    }
    .topic:hover {
      .drop {
        max-height: 236px;
      }
    }

    .unactive {
      color: #7e7e7e;
      .on {
        display: block;
      }
      .off {
        display: none;
      }
    }
    .unactive:hover {
      .on {
        display: none;
      }
      .off {
        display: block;
        animation: fadein 1s;
        -moz-animation: fadein 1s; /* Firefox */
        -webkit-animation: fadein 1s; /* Safari and Chrome */
        -o-animation: fadein 1s; /* Opera */
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @-moz-keyframes fadein {
        /* Firefox */
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @-webkit-keyframes fadein {
        /* Safari and Chrome */
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @-o-keyframes fadein {
        /* Opera */
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
    .active {
      color: #ffffff;
    }
  }
`;

const Content = styled.div`
  margin-top: 350px;
  // height: 100%;
  color: #ffffff;

  .theme {
    margin-bottom: 80px;
    text-align: center;
  }

  .ci {
    display: flex;
    flex-direction: column;
    .logo {
      margin: 120px auto;
      img {
        width: 250px;
      }
    }
    .buttons {
      margin: auto;
      a {
        color: white;
        text-decoration-line: none;
        .button {
          display: flex;
          margin-bottom: 30px;
          width: 394px;
          height: 89px;
          border: 1px solid white;
          border-radius: 10px;
          div {
            margin: auto;
          }
        }
        .button:hover {
          background-color: rgba(255, 255, 255, 0.17);
        }
      }
    }
  }
  .moreDetails {
    margin: auto auto;
    margin-top: 50px;
    width: 192px;
    text-align: center;

    color: #ffb900;
    border-bottom: 1px solid #ffb900;
    span {
      margin: 0 5px;
    }
  }
`;

const Line = styled.div`
  margin-top: 80px;
  margin-left: 276px;
  height: 1767px;
  width: 2px;
  background-color: var(--white);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  .active {
    display: block;
    margin-top: 120px;
    margin-bottom: 180px;
  }
  .hide {
    display: none;
  }
  .semiTitle {
    margin-top: 40px;
  }
  .text {
    margin-top: 8px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin: 120px auto;

    .previousButton {
      margin: 0 50px;
      cursor: pointer;
    }
    .nextButton {
      margin: 0 50px;
      cursor: pointer;
    }
    .activePage {
      display: none;
    }
    .break {
      display: none;
    }
    .hide {
      opacity: 0;
    }
  }
`;
const Background = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  right: 10vw;
  top: 15vh;
  background: url(/bg_docs_top.svg) no-repeat;
  background-size: contain;
  background-position: right 0px;
`;

export default Docs;
