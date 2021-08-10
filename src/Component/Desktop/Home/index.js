import React, { useState } from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Section } from 'react-scroll-section';
import Footer from "../../Components/Desktop/Footer";

function randomNum() {
  let min = Math.ceil(1);
  let max = Math.floor(8);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Home({ t }) {
  const [hiwNum, setHiwtNum] = useState(1);
  const [startVideo, setStartVideo] = useState(randomNum());
  const [firstVideo, setFirstVideo] = useState(false);
  const [secondVideo, setSecondVideo] = useState(false);
  const disableVideoStyle = {
    position: "absolute",
    zIndex: "-100",
    top: 0,
    width: 0,
    height: 0,
    left: 0,
  };

  const run = (type) => {
    if (type == "firstVideo") {
      if (hiwNum == 1) setFirstVideo(true);
    } else if (type == "secondVideo") {
      if (hiwNum == 2) setSecondVideo(true);
    } else if (type == "mainVideo") {
      let videoPlayer = document.getElementById(type);
      setStartVideo(randomNum());
      let nextVideo = "/logo/" + `${startVideo}` + ".mp4";
      videoPlayer.src = nextVideo;
      videoPlayer.play();
    }
  };

  return (
    <Container id="home">
      <Content>
        <div className="first">
          <div className="left">
            <div className="theme Roboto_80pt_Black">
              {t("Home/text/title")}
            </div>
            <div className="text Roboto_20pt_Regular_L">
              {t("Home/text/info")}
            </div>
          </div>
          <div className="right">
            <video
              id="mainVideo"
              autoPlay
              muted
              width="700px"
              onEnded={() => run("mainVideo")}
            >
              <source
                id="mainSource"
                src={"/logo/" + `${startVideo}` + ".mp4"}
                type="video/mp4"
              />
              {t("Home/text/if-cannot-embed-videos")}
            </video>
          </div>
        </div>
      </Content>
      <Content>
        <div className="second">
          <div className="theme Roboto_50pt_Black">
            {t("Home/text/how-it-works")}
          </div>
          <Nav>
            <div className="nav">
              <div
                className={
                  "Roboto_30pt_Black item " + (hiwNum === 1 ? "active" : "")
                }
                onClick={() => setHiwtNum(1)}
              >
                {t("Home/text/charging-station")}
              </div>
              <div
                className={
                  "Roboto_30pt_Black item " + (hiwNum === 2 ? "active" : "")
                }
                onClick={() => setHiwtNum(2)}
              >
                {t("Home/text/recharging-swap")}
              </div>
            </div>
          </Nav>
          <div>
            <div className={"desc " + (hiwNum === 1 ? "active" : "hide")}>
              <div className="img">
                {!firstVideo && (
                  <video
                    id="firstVideo"
                    autoPlay
                    muted
                    width="1088px"
                    onEnded={() => run("firstVideo")}
                  >
                    <source
                      id="firstSource"
                      src="/open/w1o.mp4"
                      type="video/mp4"
                    />
                    {t("Home/text/if-cannot-embed-videos")}
                  </video>
                )}
                <video
                  id="firstVideo"
                  loop
                  preload="metadata"
                  style={firstVideo ? undefined : disableVideoStyle}
                  autoPlay
                  muted
                  width="1088px"
                >
                  <source
                    id="firstSource"
                    src="/roll/w1r.mp4"
                    type="video/mp4"
                  />
                  {t("Home/text/if-cannot-embed-videos")}
                </video>
              </div>
              <div className="text Roboto_20pt_Regular">
                {t("Home/text/info-charging-station")}
              </div>
            </div>
            <div className={"desc " + (hiwNum === 2 ? "active" : "hide")}>
              <div className="img">
                {!secondVideo && (
                  <video
                    id="secondVideo"
                    autoPlay
                    muted
                    width="1088px"
                    onEnded={() => run("secondVideo")}
                  >
                    <source
                      id="secondSource"
                      src="/open/w2o.mp4"
                      type="video/mp4"
                    />
                    {t("Home/text/if-cannot-embed-videos")}
                  </video>
                )}
                <video
                  id="secondVideo"
                  loop
                  preload="metadata"
                  style={secondVideo ? undefined : disableVideoStyle}
                  autoPlay
                  muted
                  width="1088px"
                >
                  <source
                    id="secondSource"
                    src="/roll/w2r.mp4"
                    type="video/mp4"
                  />
                  {t("Home/text/if-cannot-embed-videos")}
                </video>
              </div>
              <div className="text Roboto_20pt_Regular">
                {t("Home/text/info-recharging-swap")}
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content>
        <div className="third">
          <div className="theme Roboto_50pt_Black">Visioning</div>
          <div className="desc">
            <div className="image">
              <video autoPlay loop muted preload="metadata" width="1088px">
                <source src="/roll/w5r.mp4" type="video/mp4" />
                {t("Home/text/if-cannot-embed-videos")}
              </video>
            </div>
            <div className="left">
              <div className="title Roboto_30pt_Black_L">2021</div>
              <div className="text Roboto_20pt_Regular_L">
                Q2
                <br />
                {t("Home/Visioning/text/21Q2")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Q3
                <br />
                {t("Home/Visioning/text/21Q3")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Q4
                <br />
                {t("Home/Visioning/text/21Q4")}
              </div>
            </div>
            <div className="right">
              <div className="title Roboto_30pt_Black_L">2022</div>
              <div className="text Roboto_20pt_Regular_L">
                Q1
                <br />
                {t("Home/Visioning/text/22Q1")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Q2
                <br />
                {t("Home/Visioning/text/22Q2")}
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content>
        <div className="fourth">
          <div className="theme Roboto_50pt_Black">
            {t("Home/Platforms/text/title")}
          </div>
          <div className="partners">
            <div className="tier">
              <div
                className="partner"
                onClick={() => {
                  window.open("https://ethereum.org/en/", "_blank");
                }}
              >
                <img src="/ic_etheteum.svg" />
              </div>
              <div
                className="partner"
                onClick={() => {
                  window.open("https://www.hecochain.com/en-us/", "_blank");
                }}
              >
                <img src="/ic_huobi.svg" />
              </div>
              <div
                className="partner"
                onClick={() => {
                  window.open(
                    "https://www.certik.org/projects/therecharge",
                    "_blank"
                  );
                }}
              >
                <img src="/ic_certick.svg" />
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() => {
                  window.open("https://www.kakaomobility.com/", "_blank");
                }}
              >
                <img src="/ic_kakao.svg" />
              </div>
              <div
                className="partner"
                onClick={() => {
                  window.open("https://www.company-pandakorea.com/", "_blank");
                }}
              >
                <img src="/ic_panda.svg" />
              </div>
              <div
                className="partner"
                onClick={() => {
                  window.open("https://piggycell.com/", "_blank");
                }}
              >
                <img src="/ic_piggycell.svg" />
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() => {
                  window.open("http://www.keyeast.co.kr/index/", "_blank");
                }}
              >
                <img src="/ic_keyeast.svg" />
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
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
`;
const Content = styled.div`
  display: flex;
  color: #ffffff;
  width: 1088px;
  margin: 0 auto;

  .first {
    display: flex;
    position: relative;
    margin: 60px 0;
    // padding: 240px 0;
    // box-sizing: border-box;
    width: 1292px;
    z-index: 2;

    .left {
      margin-top: 240px;
      margin-right: 8px;
      width: 597px;
      .theme {
        width: 597px;
        margin-bottom: 10px;
        text-shadow: 0 0 1px white, 0 0 15px white;
      }
      .text {
        width: 597px;
        white-space: pre-line;
        // max-width: 36vw;
      }
    }
    .right {
      position: abolute;
      top: 0;
      height: 700px;
      width: 700px;

      img {
        width: 700px;
      }
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    width: 1088px;
    margin-bottom: 120px;

    .theme {
      margin: 0 auto;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }
    .desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .text {
        width: 950px;
        height: 86px;
        margin: 60px auto;
        text-align: center;
        white-space: pre-line;
      }
    }
    .desc .active {
      display: block;
    }
    .hide {
      display: none;
    }
  }

  .third {
    display: flex;
    flex-direction: column;
    width: 1088px;
    margin-bottom: 180px;

    .theme {
      margin: 120px auto;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }
    .desc {
      height: 524px;
      position: relative;
      display: flex;
      justify-content: center;

      .left {
        width: 589px;
        position: absolute;
        left: 0;
      }
      .right {
        width: 451px;
        position: absolute;
        top: 230px;
        right: 0;
      }
      .title {
        margin-bottom: 40px;
      }
      .text {
        margin-bottom: 20px;
        white-space: pre-line;
      }
      .image {
        position: absolute;
        margin-top: 165px;
      }
    }
  }

  .fourth {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 180px;

    .theme {
      margin: 120px auto;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }

    .partners {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      .tier {
        display: flex;
        justify-content: center;

        .partner {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 362px;
          height: 190px;
          padding: 0 60px;
          box-sizing: border-box;
          border-color: transparent;
          cursor: pointer;
          img {
            margin: auto;
            width: 242px;
          }
        }
        .partner:hover {
          background-color: rgba(75, 75, 75, 0.45);
        }
      }
    }
  }
`;
const Nav = styled.div`
  display: flex;
  color: #7e7e7e;

  .nav {
    display: flex;
    margin: 0 auto;
    justify-content: space-around;

    .item {
      width: 276px;
      margin: 120px 90px;
      padding: 8px 0;
      cursor: pointer;
    }
    .active {
      border-bottom: 2px solid #ffb900;
      color: #ffffff;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }
  }
`;
export default withTranslation()(Home);
