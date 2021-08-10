import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import commentList from "./commentList/index";
import Footer from "../../Components/Desktop/Footer";

function Docs({ match }) {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewNum, setViewNum] = useState(1);

  const perPage = 1;

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
  }, []);

  useEffect(() => {
    setViewNum(window.location.pathname.split("/")[2]);
    window.scrollTo(0, 0);
  }, [window.location.pathname])

  return (
    <Container>
      <div className="header">
        <Subnav>
          <div className="theme Roboto_50pt_Black_L">Documents</div>
          <div className="nav">
            <div className="topic">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
                className="Roboto_30pt_Black_L "
                onClick={() => {
                  setViewNum(1);
                  window.scrollTo(0, 0);
                  setCurrentPage(0);
                }}
              >
                Whitepaper
              </a>
              <div
                className="drop "
                style={viewNum == 1 ? { maxHeight: "236px" } : {}}
              >
                <div className="text active">
                  <a
                    className={currentPage == 0 ? "active" : ""}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setViewNum(1);
                      window.scrollTo(0, 0);
                      setCurrentPage(0);
                    }}
                  >
                    Background
                  </a>
                </div>
                <div className="text active">
                  <a
                    className={currentPage == 1 ? "active" : ""}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setViewNum(1);
                      window.scrollTo(0, 0);
                      setCurrentPage(1);
                    }}
                  >
                    About Our Business
                  </a>
                </div>
                <div className="text active">
                  <a
                    className={currentPage == 2 ? "active" : ""}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setViewNum(1);
                      window.scrollTo(0, 0);
                      setCurrentPage(2);
                    }}
                  >
                    Our Platforms
                  </a>
                </div>
                <div className="text active">
                  <a
                    className={currentPage == 3 ? "active" : ""}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setViewNum(1);
                      window.scrollTo(0, 0);
                      setCurrentPage(3);
                    }}
                  >
                    Vision
                  </a>
                </div>
                <div className="text active">
                  <a
                    className={currentPage == 4 ? "active" : ""}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setViewNum(1);
                      window.scrollTo(0, 0);
                      setCurrentPage(4);
                    }}
                  >
                    Disclaimers and Risks
                  </a>
                </div>
                <div className="text active">
                  <a
                    className={currentPage == 5 ? "active" : ""}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setViewNum(1);
                      window.scrollTo(0, 0);
                      setCurrentPage(5);
                    }}
                  >
                    Terms and Definitions
                  </a>
                </div>
              </div>
            </div>
            <div className="topic Roboto_30pt_Black_L unactive">
              <span className="on">Onepager</span>
              <span className="off">Coming Soon</span>
            </div>
            <div className="topic Roboto_30pt_Black_L unactive">
              <a
                href="https://www.certik.org/projects/therecharge"
                style={{ textDecoration: "none", color: "white" }}
              >
                Token Audit
              </a>
            </div>
            <div
              className="topic Roboto_30pt_Black_L active"
              onClick={() => {
                setViewNum(2);
                window.scrollTo(0, 0);
              }}
            >
              <a style={{ textDecoration: "none", color: "white" }}>
                Disclaimer
              </a>
            </div>
            <div
              className="topic Roboto_30pt_Black_L active"
              onClick={() => {
                setViewNum(3);
                window.scrollTo(0, 0);
              }}
            >
              <a style={{ textDecoration: "none", color: "#ffffff" }}>
                CI Download
              </a>
            </div>
          </div>
        </Subnav>
        <Line />
        <Content>
          <Section id="whitepaper">
            <div className={viewNum == 1 ? "active" : "hide"}>
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
                eventListener={"onClick"}
              />
            </div>
          </Section>

          <Section id="disclaimer">
            <div className={viewNum == 2 ? "active" : "hide"}>
              <div className="theme Roboto_50pt_Black_L">Disclaimer</div>
              <div
                id="information"
                style={{ "padding-top": "85px", "margin-top": "-85px" }}
              >
                <div className="semiTitle Roboto_30pt_Black_L">Information</div>
                <div className="text Roboto_20pt_Regular_L">
                  The website Therecharge.io (hereinafter, referred to as the
                  “Website”) provides information and material of a general
                  nature. You are not authorized and nor should you rely on the
                  Website for legal advice, business advice, or advice of any
                  kind. You act at your own risk in reliance on the contents of
                  the Website. Should you make a decision to act or not act you
                  should contact a licensed attorney in the relevant
                  jurisdiction in which you want or need help. In no way are the
                  owners of, or contributors to, the Website responsible for the
                  actions, decisions, or other behavior taken or not taken by
                  you in reliance upon the Website.
                </div>
              </div>
              <div
                id="investmentrisks"
                style={{ "padding-top": "85px", "margin-top": "-85px" }}
              >
                <div className="semiTitle Roboto_30pt_Black_L">
                  Investment risks
                </div>
                <div className="text Roboto_20pt_Regular_L">
                  The investment in Recharge Token can lead to loss of money
                  over short or even long periods. The investors in Recharge
                  token should expect prices to have large range fluctuations.
                  The information published on the Website cannot guarantee that
                  the investors in Recharge token would not lose money.
                </div>
              </div>
              <div
                id="nowarranties"
                style={{ "padding-top": "85px", "margin-top": "-85px" }}
              >
                <div className="semiTitle Roboto_30pt_Black_L">
                  No warranties
                </div>
                <div className="text Roboto_20pt_Regular_L">
                  The Website is provided on an “as is” basis without any
                  warranties of any kind regarding the Website and/or any
                  content, data, materials and/or services provided on the
                  Website.
                </div>
              </div>
              <div
                id="limitationofliability"
                style={{ "padding-top": "85px", "margin-top": "-85px" }}
              >
                <div className="semiTitle Roboto_30pt_Black_L">
                  Limitation of liability
                </div>
                <div className="text Roboto_20pt_Regular_L">
                  Unless otherwise required by law, in no event shall the owners
                  of, or contributors to, the Website be liable for any damages
                  of any kind, including, but not limited to, loss of use, loss
                  of profits, or loss of data arising out of or in any way
                  connected with the use of the Website.
                </div>
              </div>
              <div
                id="lastamendment"
                style={{ "padding-top": "85px", "margin-top": "-85px" }}
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
                <div className="topic Roboto_30pt_Black_L">CI Introduction</div>
                <div className="text Roboto_20pt_Regular_L">
                  The brand logo of Recharge is a representation of charging new
                  future values.
                </div>
                <div className="ci">
                  <div className="logo">
                    <img src="/logo_station.png" />
                  </div>
                  <div className="buttons">
                    <a href="/therecharge_logo_svg.zip">
                      <div className="button Roboto_20pt_Black_L">
                        <div>Download SVG</div>
                        <div>
                          <img
                            src="/ic_download.svg"
                            style={{ width: "20px", height: "18px" }}
                          />
                        </div>
                      </div>
                    </a>
                    <a href="/therecharge_logo_png.zip">
                      <div className="button Roboto_20pt_Black_L">
                        <div>Download PNG</div>
                        <div>
                          <img
                            src="/ic_download.svg"
                            style={{ width: "20px", height: "18px" }}
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
      </div>
      <Footer />
      <Background />
    </Container>
  );
}
const Container = styled.div`
  margin-top: 100px;
  // padding: 0 416px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1088px;
  .header {
    width: 1088px;
    display: flex;
    margin: 0 auto;
    position: relative;
  }
`;

const Subnav = styled.div`
  // ) //   else if (window.innerHeight < 800) return { height: "500px" };) //   if (window.innerHeight > 900) return { height: "900px" }; // (() => (
  position: fixed;
  top: 160px;
  width: 256px;
  overflow: scroll;
  height: 78%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  color: white;
  z-index: 3;

  .theme {
    margin-bottom: 80px;
    text-shadow: 0 0 1px white, 0 0 15px white;
  }
  .nav {
    margin-left: 20px;

    .topic {
      margin-top: 40px;
      cursor: pointer;

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
    .text {
      margin: 20px;
      a {
        color: var(--gray-20);
      }
      .active {
        color: #ffffff;
        font-weight: bold;
      }
    }
    .text:hover {
      a {
        color: var(--white);
        font-weight: bold;
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
  }
`;

const Line = styled.div`
  margin-top: 80px;
  margin-left: 276px;
  height: 1767px;
  width: 2px;
  background-color: var(--white);
`;

const Content = styled.div`
  z-index: 3;
  margin-top: 306px;
  margin-left: 60px;
  color: #ffffff;

  .theme {
    text-shadow: 0 0 1px white, 0 0 15px white;
  }

  .ci {
    display: flex;
    margin: 0 30px;
    .logo {
      margin: auto 0;
      img {
        width: 170px;
      }
    }
    .buttons {
      margin: auto auto;
      margin-left: 5vw;
      a {
        color: white;
        text-decoration-line: none;
        .button {
          display: flex;
          margin: 1vw 0;
          width: 274px;
          height: 62px;
          padding: 18px 30px;
          box-sizing: border-box;
          border: 1px solid white;
          border-radius: 10px;
          div {
            margin: auto auto;
          }
        }
        .button:hover {
          background-color: rgba(255, 255, 255, 0.17);
        }
      }
    }
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  .desc .active {
    display: block;
  }
  .hide {
    display: none;
  }
  .theme {
    margin-bottom: 60px;
    text-shadow: 0 0 1px white, 0 0 15px white;
  }
  .text {
    margin-bottom: 40px;
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
