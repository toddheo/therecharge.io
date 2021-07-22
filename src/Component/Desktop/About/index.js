import { useState, useEffect } from "react";
import styled from "styled-components";

function About() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const run = (type) => {
    if (type === "firstVideo") {
      setFirstVideo(true);
    } else if (type === "secondVideo") {
      setSecondVideo(true);
    }
  };

  return (
    <Container>
      <Content id="aboutSection1">
        <div className="first">
          <div className="theme Roboto_50pt_Black">Ecosystem</div>
          <div className="content">
            {!firstVideo && (
              <video
                id="firstVideo"
                preload="auto"
                autoPlay
                muted
                width="1088px"
                onEnded={() => run("firstVideo")}
              >
                <source id="firstSource" src="/open/w3o.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            )}
            <video
              id="firstVideo"
              loop
              preload="auto"
              style={firstVideo ? undefined : disableVideoStyle}
              autoPlay
              muted
              width="1088px"
            >
              <source id="firstSource" src="/roll/w3r.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <div className="text Roboto_20pt_Regular">
            The recharge is a electric power baesd ecosystem using blockchain
            technology to provide the best resources to Piggycell, Charging
            Station.
          </div>
        </div>
      </Content>
      <Content id="aboutSection2">
        <div className="second">
          <div className="theme Roboto_50pt_Black">Recharge Virtuous Cycle</div>
          <div className="content">
            {!secondVideo && (
              <video
                id="secondVideo"
                preload="auto"
                autoPlay
                muted
                width="1085px"
                onEnded={() => run("secondVideo")}
              >
                <source
                  id="secondSource"
                  src="/open/w4o.mp4"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
            )}
            <video
              id="secondVideo"
              loop
              preload="auto"
              style={secondVideo ? undefined : disableVideoStyle}
              autoPlay
              muted
              width="1085px"
            >
              <source id="secondSource" src="/roll/w4r.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <div className="text Roboto_20pt_Regular">
            The Recharge is creating a new value by the carbon redemption point
            while performing a token transaction
          </div>
        </div>
      </Content>
      <Content id="aboutSection3">
        <div className="third">
          <div className="theme Roboto_50pt_Black">Team members</div>
          <div className="members">
            <div className="member">
              <div className="name Roboto_20pt_Black_L">Jay Lee | CEO</div>
              <div className="desc Roboto_19pt_Regular_L">
                <div>{"- Founder at Panda Korea & 100 Percent"}</div>
                <div>- Vice President at NS Studio (IT, Game)</div>
                <div>- Lead at Presidential Committee on Young Generation</div>
                <div>- Journalist at Dong-A Daily News, Channel A</div>
              </div>
            </div>
          </div>
          <div className="members">
            <div className="member">
              <div className="name Roboto_20pt_Black_L">
                Jake Kim | Chief Technical Officer
              </div>
              <div className="desc Roboto_20pt_Regular_L">
                <div>- CTO at 100 Percent</div>
                <div>- Software Developer at TMON</div>
                <div>- Application Developer at Kakao Corp</div>
                <div>- Lead at Kakao Enterprise AI Development Team</div>
              </div>
            </div>
            <div className="member">
              <div className="name Roboto_20pt_Black_L">
                Ethan Kang | Chief Marketing Officer
              </div>
              <div className="desc Roboto_20pt_Regular_L">
                <div>- CSO/CMO at 100 Percent</div>
                <div>- CSO at Thinkingwolf (Marketing)</div>
                <div>- CMO at Zipdoc (Interior O2O)</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content id="aboutSection4">
        <div className="fourth">
          <div className="theme Roboto_50pt_Black">Recharge is on</div>
          <div className="partners">
            <div className="tier">
              <div
                className="partner"
                onClick={() =>
                  (window.location = "https://info.uniswap.org/#/")
                }
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutUniswap.png"
                    style={{ height: "78px", width: "67.7px" }}
                  />
                </div>
                <div className="desc Roboto_20pt_Regular">
                  <div>A fully decentralized</div>
                  <div>finance protocol</div>
                </div>
              </div>
              <div
                className="partner"
                onClick={() => (window.location = "https://coinmarketcap.com/")}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutCMC.png"
                    style={{ height: "78px", width: "76.8px" }}
                  />
                </div>
                <div className="desc Roboto_20pt_Regular">
                  <div>Price-tracking website for crypto</div>
                  <div>assets of cryptocurrency</div>
                </div>
              </div>
              <div
                className="partner"
                onClick={() => (window.location = "https://xangle.io/")}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutXangle.png"
                    style={{ height: "78px", width: "74px" }}
                  />
                </div>
                <div className="desc Roboto_20pt_Regular">
                  <div>Provides disclosure practices of the</div>
                  <div>crypto industry</div>
                </div>
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() => (window.location = "https://cobak.co.kr/")}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutCobak.png"
                    style={{
                      height: "50px",
                      width: "118.4px",
                      marginTop: "21px",
                      marginBottom: "7px",
                    }}
                  />
                </div>
                <div className="desc Roboto_20pt_Regular">
                  <div>No.1 Crypto community in Korea</div>
                </div>
              </div>
              <div
                className="partner"
                onClick={() => (window.location = "https://snapshot.org/")}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutSnap.png"
                    style={{ height: "78px", width: "65.2px" }}
                  />
                </div>
                <div className="desc Roboto_16pt_Regular">
                  <div>Provides a off-chain, gasless, multi-</div>
                  <div>governance community polling dashboard</div>
                </div>
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
              <img alt="" src="/footer1.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location = "https://medium.com/therecharge")
              }
            >
              <img alt="" src="/footer2.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location = "https://twitter.com/TheRecharge1")
              }
            >
              <img alt="" src="/footer3.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location = "https://t.me/therecharge_officialkr")
              }
            >
              <img alt="" src="/footer4.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location =
                  "https://etherscan.io/token/0xe74bE071f3b62f6A4aC23cA68E5E2A39797A3c30")
              }
            >
              <img alt="" src="/footer5.png" />
            </div>
            <div
              className="logo"
              onClick={() =>
                (window.location =
                  "https://hecoinfo.com/token/0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b")
              }
            >
              <img alt="" src="/footer6.png" />
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
  width: 100%;
  margin-top: 100px;
  // padding: 0 416px;
  box-sizing: border-box;
`;
const Content = styled.div`
  display: flex;
  
  .first {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .theme {
      margin: 0 auto;
      margin-top: 180px;
      margin-bottom: 120px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }
    .content {
      margin: auto auto;
      height: 1143px;
      img {
        width: 1088px;
      }
    }
    .text {
      margin: 60px auto;
      width: 1088px;
      text-align: center;
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .theme {
      margin: 0 auto;
      margin-top: 240px;
      margin-bottom: 120px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }
    .content {
      margin: auto auto;
      height: 511.1px;
      img {
        width: 1085px;
      }
    }
    .text {
      margin: 60px auto;
      width: 942px;
      text-align: center;
    }
  }

  .third {
    display: flex;
    margin: 0 auto;
    margin-bottom: 60px;
    flex-direction: column;

    .theme {
      margin: 0 auto;
      margin-top: 240px;
      margin-bottom: 120px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .members {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;

        .member {
          display: flex;
          flex-direction: column;
          width: 536px;
          height: 238px;
          margin-right: 16px;
          padding: 40px;
          box-sizing: border-box;
          border-radius: 20px;
          background-color: var(--black-30);

          .name {
            margin: 0;
            margin-bottom: 16px;
          }
        }
      }
    }
  }

  .fourth {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .theme {
      margin: 0 auto;
      margin-top: 240px;
      margin-bottom: 120px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .partners {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-bottom: 210px;

      .tier {
        display: flex;
        margin: auto auto;

        .partner {
          display: flex;
          flex-direction: column;
          width: 362px;
          height: 190px;
          cursor: pointer;

          .logo {
            margin: 20px auto;
          }

          .desc {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            div {
              margin: auto auto;
            }
          }
        }
        .partner:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
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

export default About;
