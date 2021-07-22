import React, { useState } from "react";
import styled from "styled-components";

function randomNum() {
  let min = Math.ceil(1);
  let max = Math.floor(8);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Home() {
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
    <Container>
      <Content>
        <div className="first">
          <div className="left">
            <div className="theme Roboto_80pt_Black">The Recharge</div>
            <div className="text Roboto_20pt_Regular_L">
              Decentralized Incentive Hub for Electric Power Based Ecosystem.
              The Recharge provides All-In-one incentive solution to recharge
              holders on various major protocols.
              <br />
              <br />
              We aim to provide a long-term sustainable eco-system that helps
              accelerate a electricity system to reduce carbon emissions.
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
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </Content>
      <Content>
        <div className="second">
          <div className="theme Roboto_50pt_Black">How it works</div>
          <Nav>
            <div className="nav">
              <div
                className={
                  "Roboto_30pt_Black item " + (hiwNum === 1 ? "active" : "")
                }
                onClick={() => setHiwtNum(1)}
              >
                Charging Station
              </div>
              <div
                className={
                  "Roboto_30pt_Black item " + (hiwNum === 2 ? "active" : "")
                }
                onClick={() => setHiwtNum(2)}
              >
                Recharging Swap
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
                    Sorry, your browser doesn't support embedded videos.
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
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
              <div className="text Roboto_20pt_Regular">
                Fully Decentralized Incentive Hub for Recharge Ecosystem.
                Charging Station is built to offer full range of De-Fi services
                for Recharge Labs. Automated Incentive circulation is fueled by
                carbon redemption and it stimulates Recharge Virtuous Cycle as
                well as electric power-based services.
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
                    Sorry, your browser doesn't support embedded videos.
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
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
              <div className="text Roboto_20pt_Regular">
                Recharge Swap is a cross chain gateway for Frequent Use Point as
                well as major blockchain protocols. We aim to provide a simple
                and easy swap experience for Recharge token. Recharge swap is
                compatible with ERC20, HRC20, and BEP20.{" "}
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
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
            <div className="left">
              <div className="title Roboto_30pt_Black_L">2021</div>
              <div className="text Roboto_20pt_Regular_L">
                Q2
                <br />
                - Recharge issued on Huobi Eco Chain
                <br />- Recharge issued on Ethereum Network and Binance Smart
                Chain
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Q3
                <br />
                - Charging Station (De-Fi) launched
                <br />- Initial Liquidity Offering on DEX
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Q4
                <br />
                - Integration of Point to Token system
                <br />- Recharge Swap (Cross-Chain Bridge) Launched 2022
              </div>
            </div>
            <div className="right">
              <div className="title Roboto_30pt_Black_L">2022</div>
              <div className="text Roboto_20pt_Regular_L">
                Q1
                <br />
                - EV Charging Complex 1st unveiling
                <br />- Adoption of EV Charging Complex into Recharge Ecosystem
              </div>
              <div className="Roboto_20pt_Regular_L">
                Q2
                <br />
                - EV Charging Complex Opening
                <br />- 3<span style={{ fontSize: "12px" }}>rd</span> Recharge
                Ecosystem Partner Service Unveiling
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content>
        <div className="fourth">
          <div className="theme Roboto_50pt_Black">Platforms and Verifiers</div>
          <div className="partners">
            <div className="tier">
              <div
                className="partner"
                onClick={() => (window.location = "https://ethereum.org/en/")}
              >
                <img src="/ic_etheteum.svg" />
              </div>
              <div
                className="partner"
                onClick={() =>
                  (window.location = "https://www.hecochain.com/en-us/")
                }
              >
                <img src="/ic_huobi.svg" />
              </div>
              <div
                className="partner"
                onClick={() =>
                (window.location =
                  "https://www.certik.org/projects/therecharge")
                }
              >
                <img src="/ic_certick.svg" />
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() =>
                  (window.location = "https://www.kakaomobility.com/")
                }
              >
                <img src="/ic_kakao.svg" />
              </div>
              <div
                className="partner"
                onClick={() =>
                  (window.location = "https://www.company-pandakorea.com/")
                }
              >
                <img src="/ic_panda.svg" />
              </div>
              <div
                className="partner"
                onClick={() => (window.location = "https://piggycell.com/")}
              >
                <img src="/ic_piggycell.svg" />
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() =>
                  (window.location = "http://www.keyeast.co.kr/index/")
                }
              >
                <img src="/ic_keyeast.svg" />
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        <div className="footer Roboto_20pt_Regular">
          <div className="header">
            <a href="mailto:info@therecharge.io">
              info@therecharge.io<span>〉</span>
            </a>
          </div>
          <div className="sns">
            <div
              className="logo"
              onClick={() =>
                (window.location = "https://github.com/therecharge")
              }
            >
              <img src="/footer1.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location = "https://medium.com/therecharge")
              }
            >
              <img src="/footer2.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location = "https://twitter.com/TheRecharge1")
              }
            >
              <img src="/footer3.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location = "https://t.me/therecharge_officialkr")
              }
            >
              <img src="/footer4.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
              (window.location =
                "https://etherscan.io/token/0xe74bE071f3b62f6A4aC23cA68E5E2A39797A3c30")
              }
            >
              <img src="/footer5.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
              (window.location =
                "https://hecoinfo.com/token/0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b")
              }
            >
              <img src="/footer6.png" />
            </div>
          </div>
          <div className="bottom" style={{ fontSize: "12px" }}>
            @ 2021 Recharge Labs Ltd.
          </div>
        </div>
      </Footer>
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
const Footer = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 180px;
  color: #ffffff;

  .footer {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .header {
      display: flex;
      margin: 0 auto;
      padding: 12px 0;
      width: 286px;
      height: 50px;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid var(--yellow);
      border-radius: 6px;
      a {
        margin: auto;
        margin-top: -3px;
        text-decoration: none;
        color: #ffffff;
      }
      span {
        margin-left: 30px;
        margin-right: -30px;
        color: var(--yellow);
      }
    }
    .header:hover {
      border-radius: 6px;
      background-color: var(--yellow);

      span {
        color: var(--white);
      }
    }
    .sns {
      display: flex;
      margin: 40px auto;
      align-items: center;
      .logo {
        margin: 0 20px;
        cursor: pointer;
        img {
          width: 30px;
          vertical-align: top;
        }
      }
    }
    .bottom {
      margin: 0 auto;
    }
  }
`;

export default Home;
