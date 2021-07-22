import React, { useState, useEffect } from "react";
import DefaultSlider from "../../Components/Slider";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Modal1 from "./modal1";
import Modal2 from "./modal2";

function randomNum() {
  let min = Math.ceil(1);
  let max = Math.floor(8);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Home() {
  const [hiwNum, setHiwtNum] = useState(1);
  const [sliderIndex, setSliderIndex] = useState([0, 0]);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
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
      // let videoPlayer = document.getElementById(type);
      // let nextVideo = "/roll/w1r.mp4"
      // videoPlayer.src = nextVideo;
      // videoPlayer.loop = true;
      // videoPlayer.play();
    } else if (type == "secondVideo") {
      if (hiwNum == 2) setSecondVideo(true);
      // let videoPlayer = document.getElementById(type);
      // let nextVideo = "/roll/w2r.mp4"
      // videoPlayer.src = nextVideo;
      // videoPlayer.loop = true;
      // videoPlayer.play();
    } else if (type == "fifVi") {
      let videoPlayer = document.getElementById(type);
      let nextVideo = "/roll/m5r.mp4"
      videoPlayer.src = nextVideo;
      videoPlayer.play();
    }
    else if (type == "mainVideo") {
      let videoPlayer = document.getElementById(type);
      setStartVideo(randomNum());
      let nextVideo = "/logo/" + `${startVideo}` + ".mp4";
      videoPlayer.src = nextVideo;
      videoPlayer.play();
    }
  };

  const handleModal1 = () => {
    setModal1Open(!modal1Open);
  };

  const handleModal2 = () => {
    setModal2Open(!modal2Open);
  };

  function renderSliderContent() {
    const slideImage = (e) => {
      let change = -1000;
      if (sliderIndex[0] === sliderIndex[1]) return;
      if (
        sliderIndex[1] === sliderIndex[0] + 1 ||
        sliderIndex[1] === sliderIndex[0] - 3
      )
        change *= -1;

      if ((e.target.style.marginLeft = "0")) {
        let I = setInterval(
          (e) => {
            change += 100 * (change < 0 ? 1 : -1);
            e.target.style.marginLeft = change + "px";
            if (change == 0) clearInterval(I);
          },
          10,
          e
        );
      }
    };
    switch (sliderIndex[1]) {
      case 0:
        return (
          <SliderContent>
            <div>
              <div className="img">
                {!firstVideo && (
                  <video
                    id="firstVideo"
                    autoPlay
                    muted
                    playsInline
                    width="516px"
                    height="521px"
                    onEnded={() => run("firstVideo")}
                  >
                    <source
                      id="firstSource"
                      src="/open/m1o.mp4"
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
                  playsInline
                  muted
                  width="516px"
                  height="521px"
                >
                  <source
                    id="firstSource"
                    src="/roll/m1r.mp4"
                    type="video/mp4"
                  />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </div>
            <p className="Roboto_30pt_Regular_Mobile">
              Fully Decentralized Incentive Hub for Recharge Ecosystem. Charging
              Station is built to offer full range of De-Fi services for
              Recharge Labs. Automated Incentive circulation is fueled by carbon
              redemption and it stimulates Recharge Virtuous Cycle as well as
              electric power-based services.
            </p>

            <div
              className="moreDetails Roboto_30pt_Regular_Detail"
              onClick={() => handleModal1()}
            >
              More Details <span>〉</span>
            </div>
          </SliderContent>
        );
      case 1:
        return (
          <SliderContent>
            <div className="img">
              {!firstVideo && (
                <video
                  id="firstVideo"
                  autoPlay
                  muted
                  playsInline
                  width="620px"
                  height="521px"
                  onEnded={() => run("firstVideo")}
                >
                  <source
                    id="firstSource"
                    src="/open/m2o.mp4"
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
                playsInline
                width="620px"
                height="521px"
              >
                <source id="firstSource" src="/roll/m2r.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
            <p className="Roboto_30pt_Regular_Mobile">
              Recharge Swap is a cross chain gateway for Frequent Use Point as
              well as major blockchain protocols. We aim to provide a simple and
              easy swap experience for Recharge token. Recharge swap is
              compatible with ERC20, HRC20, and BEP20.
            </p>

            <div
              className="moreDetails Roboto_30pt_Regular_Detail"
              onClick={() => handleModal2()}
            >
              More Details <span>〉</span>
            </div>
          </SliderContent>
        );
      // case 2:
      //   return (
      //     <SliderContent>
      //       <img
      //         src="/img-adstation.png"
      //         style={{
      //           "margin-top": "200px",
      //           "margin-bottom": "200px",
      //         }}
      //         onLoad={(e) => slideImage(e)}
      //       />
      //       <p>
      //         Decentralized Marketing Solution with automated reward system.
      //         Advertisers can run promotions without a broker. Users receive
      //         rewards by interacting with AD prepared by the advertisers. AD
      //         Station is fueled by Frequent Use Point (FUP) as well as Recharge
      //         Token. Distributed FUP and Recharge Tokens can be claimed on
      //         Charging Station.
      //       </p>
      //     </SliderContent>
      //   );
      // case 3:
      //   return (
      //     <SliderContent>
      //       <img
      //         src="/img-pandatrust.png"
      //         style={{
      //           "margin-top": "108px",
      //           "margin-bottom": "108px",
      //         }}
      //         onLoad={(e) => slideImage(e)}
      //       />
      //       <p>
      //         Effective and efficient control of logistics powered by IoT and
      //         blockchain technology. Records of products sold on Panda Korea’s
      //         e-commerce platform are managed by Panda Trust, IoT grafted
      //         Blockchain Logistics Controller. Recharge Token is a fuel on Panda
      //         Trust throughout the logistics process.
      //       </p>
      //     </SliderContent>
      //   );
    }
  }

  return (
    <Container>
      <Helmet>
        <link rel="preload" href="/img-rechargingswap.png" as="image" />
        <link rel="preload" href="/img-adstation.png" as="image" />
        <link rel="preload" href="/img-pandatrust.png" as="image" />
      </Helmet>
      <Content>
        <div className="first">
          <div className="right" style={{ height: "700px" }}>
            <video
              id="mainVideo"
              autoPlay
              muted
              playsInline
              width="620px"
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
          <div className="left">
            <div className="theme Roboto_80pt_Black_Mobile">The Recharge</div>
            <div className="text Roboto_30pt_Regular_Mobile">
              <div
                className="Roboto_30pt_Regular_Mobile"
                style={{ marginBottom: "40px" }}
              >
                Decentralized Incentive Hub for Electric Power Based Ecosystem.
                The Recharge provides All-In-one incentive solution to recharge
                holders on various major protocols.
              </div>
              <div className="Roboto_30pt_Regular_Mobile">
                We aim to provide a long-term sustainable eco-system that helps
                accelerate a electricity system to reduce carbon emissions.
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content>
        <div className="second">
          <div className="theme Roboto_50pt_Black_Mobile">How it works</div>
          <DefaultSlider setSliderIndex={setSliderIndex}>
            <div className="topic Roboto_40pt_Black">Charging Station</div>
            <div className="topic Roboto_40pt_Black">Recharging Swap</div>
            {/* <div className="Roboto_40pt_Black">AD Station</div>
            <div className="Roboto_40pt_Black">Panda Trust</div> */}
          </DefaultSlider>
          {renderSliderContent()}
        </div>
      </Content>
      <Content
        style={{
          margin: "0 auto",
          background: "url(/bg_main_mid.svg) no-repeat",
          "background-size": "contain",
          "background-position": "50% 50%",
        }}
      >
        <div className="third">
          <div className="theme Roboto_50pt_Black">Visioning</div>
          <div className="desc">
            <div className="desc_left">
              <video
                id="fifVi"
                autoPlay
                loop
                playsInline
                muted
                width="39px"
                height="1088px"
              >
                <source id="fifVi" src="/roll/m5r.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
              {/* <img
                src="/homeV_mobile.png"
                style={{ width: "39px", height: "1050px" }}
              /> */}
            </div>
            <div className="desc_right">
              <div className="info" style={{ marginBottom: "80px" }}>
                <div className="year Roboto_30pt_Black_Mobile">2021</div>
                <div className="quater" style={{ marginBottom: "20px" }}>
                  <div className="Roboto_25pt_Regular_Mobile">Q2</div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - Recharge issued on Huobi Eco Chain
                  </div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - Recharge issued on Ethereum Network and Binance Smart Chain
                  </div>
                </div>
                <div className="quater" style={{ marginBottom: "20px" }}>
                  <div className="Roboto_25pt_Regular_Mobile">Q3</div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - Charging Station (De-Fi) launched
                  </div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - Initial Liquidity Offering on DEX
                  </div>
                </div>
                <div className="quater" style={{ marginBottom: "20px" }}>
                  <div className="Roboto_25pt_Regular_Mobile">Q4</div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - Integration of Point to Token system
                  </div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - Recharge Swap (Cross-Chain Bridge) Launched 2022
                  </div>
                </div>
              </div>
              <div className="info">
                <div
                  className="year Roboto_30pt_Black_Mobile"
                  style={{ marginTop: "40px" }}
                >
                  2022
                </div>
                <div className="quater" style={{ marginBottom: "20px" }}>
                  <div className="Roboto_25pt_Regular_Mobile">Q1</div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - EV Charging Complex 1st unveiling
                  </div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - Adoption of EV Charging Complex into Recharge Ecosystem
                  </div>
                </div>
                <div className="quater" style={{ marginBottom: "20px" }}>
                  <div className="Roboto_25pt_Regular_Mobile">Q2</div>
                  <div className="Roboto_25pt_Regular_Mobile">
                    - EV Charging Complex Opening<br />
                    - 3<span style={{ fontSize: "12px" }}>rd</span> Recharge Ecosystem Partner Service Unveiling
                  </div>
                </div>
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
                <img
                  src="/homePV1.png"
                  style={{ width: "242px", height: "60px" }}
                />
              </div>
              <div
                className="partner"
                onClick={() =>
                  (window.location = "https://www.hecochain.com/en-us/")
                }
              >
                <img
                  src="/homePV2.png"
                  style={{ width: "242px", height: "29.1px" }}
                />
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() => (window.location = "https://www.certik.org/")}
              >
                <img
                  src="/homePV3.png"
                  style={{ width: "242px", height: "57.7px" }}
                />
              </div>
              <div
                className="partner"
                onClick={() =>
                  (window.location = "https://www.kakaomobility.com/")
                }
              >
                <img
                  src="/homePV4.png"
                  style={{ width: "242px", height: "38.9px" }}
                />
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() =>
                  (window.location = "https://www.company-pandakorea.com/")
                }
              >
                <img
                  src="/homePV5.png"
                  style={{ width: "242px", height: "86.8px" }}
                />
              </div>
              <div
                className="partner"
                onClick={() => (window.location = "https://piggycell.com/")}
              >
                <img
                  src="/homePV6.png"
                  style={{ width: "242px", height: "114.9px" }}
                />
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() =>
                  (window.location = "http://www.keyeast.co.kr/index/")
                }
              >
                <img
                  src="/homePV7.png"
                  style={{ width: "242px", height: "29.8px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Background1 />
      <Modal1 modal1Open={modal1Open} handleModal1={handleModal1} />
      <Modal2 modal2Open={modal2Open} handleModal2={handleModal2} />
    </Container>
  );
}

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img {
    display: flex;
    margin: 0px auto;
    margin-top: 126px;
    margin-bottom: 80px;
  }

  img {
    height: 521px;
  }

  p {
    margin: 40px auto;
  }

  .moreDetails {
    width: 230px;
    margin: 0 auto;
    color: var(--yellow);
    border-bottom: 1px solid var(--yellow);
    span {
      margin-left: 10px;
    }
  }
`;

const Container = styled.div`
  margin: auto auto;
  width: 720px;
  overflow-x: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  border-radius: 10px;

  .first {
    display: flex;
    flex-direction: column;
    margin: 300px 50px;
    // z-index: 2;

    .left {
      top: 900px;
      text-align: center;
      .theme {
        margin-bottom: 100px;
        text-shadow: 0 0 40px rgba(255, 255, 255, 0.65);
      }
      .text {
      }
    }

    .right {
      margin: auto;
      img {
        width: 402px;
        height: 410px;
      }
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    margin: 300px auto;
    margin: 0 50px;

    .theme {
      margin: 100px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.65);
    }

    .topic {
      margin: 0 auto;
      width: 380px;
      padding-bottom: 16px;
      border-bottom: solid 2px var(--yellow);
    }
  }

  .third {
    display: flex;
    flex-direction: column;
    margin: 180px auto;
    // z-index: 2;

    .theme {
      margin: 120px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.65);
    }

    .desc {
      display: flex;
      margin: auto 50px;
      .desc_left {
        margin: auto;
        width: 39px;
        height: 1088px;
      }
      .desc_right {
        margin-left: 40px;
        .year {
          margin-bottom: 40px;
        }
        .quater {
          // margin: 40px 0;
        }
      }
    }
  }

  .fourth {
    display: flex;
    margin: 0 auto;
    margin-bottom: 180px;
    flex-direction: column;

    .theme {
      margin: 120px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.65);
    }

    .partners {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      .tier {
        display: flex;

        .partner {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 310px;
          height: 190px;
          padding: 0 34px;
          box-sizing: border-box;
          border-color: transparent;
          background-color: rgba(255, 255, 255, 0);
          cursor: pointer;
        }
        .partner:active {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`;
const Nav = styled.div`
  display: flex;
  margin: 1vh auto;
  color: #7e7e7e;

  .nav {
    display: flex;
    margin: auto auto;
    width: 50vw;
    justify-content: space-around;

    .item {
      padding: 10px;
      cursor: pointer;
    }
    .item:hover {
      color: #ffffff;
    }
    .active {
      border-bottom: 2px solid #ffb900;
      color: #ffffff;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }
  }
`;
const Background1 = styled.div`
  width: 720px;
  position: absolute;
  right: 5vw;
  top: 15vh;
  background: url(/bg_main_top.svg) no-repeat;
  background-size: contain;
  background-position: right 0px;
`;

export default Home;
