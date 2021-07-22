import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./modal";

function About() {
  const [modalOpen, setModalOpen] = useState(false);
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
      setFirstVideo(true);
      // let videoPlayer = document.getElementById(type);
      // let nextVideoName = "/roll/w3r.mp4";
      // videoPlayer.src = nextVideoName;
      // videoPlayer.loop = true;
      // videoPlayer.play();
    } else if (type == "secondVideo") {
      setSecondVideo(true);
      // let videoPlayer = document.getElementById(type);
      // let nextVideo = "/roll/w4r.mp4"
      // videoPlayer.src = nextVideo;
      // videoPlayer.loop = true;
      // videoPlayer.play();
    }
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container
      style={
        modalOpen
          ? {
              position: "fixed",
              // width: "100%",
              // backgroundColor: "#02051c",
            }
          : {}
      }
    >
      <Content id="aboutSection1">
        <div className="first">
          <div className="theme Roboto_50pt_Black_Mobile">Ecosystem</div>
          <div className="content">
            {!firstVideo && (
              <video
                id="firstVideo"
                preload="auto"
                autoPlay
                muted
                playsInline
                width="620px"
                height="862px"
                onEnded={() => run("firstVideo")}
              >
                <source id="firstSource" src="/open/m3o.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            )}
            <video
              id="firstVideo"
              loop
              preload="auto"
              style={firstVideo ? undefined : disableVideoStyle}
              autoPlay
              playsInline
              muted
              width="620px"
              height="862px"
            >
              <source id="firstSource" src="/roll/m3r.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            {/* <img
              src="/aboutECO_mobile.png"
              style={{ marginBottom: "40px", width: "620px", height: "862px" }}
            /> */}
          </div>
          <div
            className="text Roboto_30pt_Regular_Mobile"
            style={{ margin: "40px 50px" }}
          >
            The recharge is a electric power baesd ecosystem using blockchain
            technology to provide the best resources to Panda Trust, Piggycell,
            AD-EYE, Charging Station.
          </div>
          <div
            className="moreDetails Roboto_30pt_Regular_Detail"
            onClick={() => handleModal()}
          >
            More details<span>〉</span>
          </div>
        </div>
      </Content>
      <Content id="aboutSection2">
        <div className="second">
          <div className="theme Roboto_50pt_Black_Mobile">
            Recharge Virtuous Cycle
          </div>
          <div className="content">
            {!secondVideo && (
              <video
                id="secondVideo"
                preload="auto"
                autoPlay
                muted
                playsInline
                width="584px"
                height="460px"
                onEnded={() => run("secondVideo")}
              >
                <source
                  id="secondSource"
                  src="/open/m4o.mp4"
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
              playsInline
              width="584px"
              height="460px"
            >
              <source id="secondSource" src="/roll/m4r.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            {/* <img
              src="/aboutRVC_mobile.png"
              style={{ margin: "80px auto", width: "584px", height: "460px" }}
            /> */}
          </div>
          <div
            className="text Roboto_30pt_Regular_Mobile"
            style={{ margin: "0 50px", marginBottom: "180px" }}
          >
            The Recharge is creating a new value by the carbon redemption point
            while performing a token transaction
          </div>
        </div>
      </Content>
      <Content id="aboutSection3">
        <div className="third">
          <div className="theme Roboto_50pt_Black_Mobile">Team members</div>
          <div className="members">
            <div className="member">
              <div className="name Roboto_30pt_Black_L">Jay Lee | CEO</div>
              <div className="desc">
                <div className="Roboto_25pt_Regular_Mobile2">
                  - Founder at Panda Korea & 100 Percent
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - Vice President at NS Studio (IT, Game)
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - Lead at Presidential Committee on Young Generation
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - Journalist at Dong-A Daily News, Channel A
                </div>
              </div>
            </div>
            <div className="member">
              <div className="name Roboto_30pt_Black_L">
                Jake Kim | Chief Technical Officer
              </div>
              <div className="desc">
                <div className="Roboto_25pt_Regular_Mobile2">
                  - CTO at 100 Percent
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - Software Developer at TMON
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - Application Developer at Kakao Corp
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - Lead at Kakao Enterprise AI Dev Team
                </div>
              </div>
            </div>
            <div className="member">
              <div className="name Roboto_30pt_Black_L">
                Ethan Kang | Chief Marketing Officer
              </div>
              <div className="desc">
                <div className="Roboto_25pt_Regular_Mobile2">
                  - CSO/CMO at 100 Percent
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - CSO at Thinkingwolf (Marketing)
                </div>
                <div className="Roboto_25pt_Regular_Mobile2">
                  - CMO at Zipdoc (Interior O2O)
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content id="aboutSection4">
        <div className="fourth">
          <div className="theme Roboto_50pt_Black_Mobile">Recharge is on</div>
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
                    src="/aboutUniswap.png"
                    style={{ height: "70px", width: "60.8px" }}
                  />
                </div>
                <div className="desc">
                  <div className="Roboto_20pt_Regular_Mobile">
                    A fully decentralized
                  </div>
                  <div className="Roboto_20pt_Regular_Mobile">
                    finance protocol
                  </div>
                </div>
              </div>
              <div
                className="partner"
                onClick={() => (window.location = "https://coinmarketcap.com/")}
              >
                <div className="logo">
                  <img
                    src="/aboutCMC.png"
                    style={{ height: "70px", width: "68.9px" }}
                  />
                </div>
                <div className="desc Roboto_20pt_Regular">
                  <div className="text  Roboto_20pt_Regular_Mobile">
                    Price-tracking website for crypto
                  </div>
                  <div className="Roboto_20pt_Regular_Mobile">
                    assets of cryptocurrency
                  </div>
                </div>
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() => (window.location = "https://xangle.io/")}
              >
                <div className="logo">
                  <img
                    src="/aboutXangle.png"
                    style={{ height: "70px", width: "66.4px" }}
                  />
                </div>
                <div className="desc Roboto_20pt_Regular">
                  <div className="Roboto_20pt_Regular_Mobile">
                    Provides disclosure practices
                  </div>
                  <div className="Roboto_20pt_Regular_Mobile">
                    of the crypto industry
                  </div>
                </div>
              </div>
              <div
                className="partner"
                onClick={() => (window.location = "https://cobak.co.kr/")}
              >
                <div className="logo">
                  <img
                    src="/aboutCobak.png"
                    style={{
                      height: "42.2px",
                      width: "100px",
                      marginTop: "21px",
                      marginBottom: "7px",
                    }}
                  />
                </div>
                <div className="desc Roboto_20pt_Regular">
                  <div className="Roboto_20pt_Regular_Mobile">No.1 Crypto</div>
                  <div className="Roboto_20pt_Regular_Mobile">
                    community in Korea
                  </div>
                </div>
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() => (window.location = "https://snapshot.org/")}
              >
                <div className="logo">
                  <img
                    src="/aboutSnap.png"
                    style={{ height: "70px", width: "58.5px" }}
                  />
                </div>
                <div className="desc Roboto_16pt_Regular">
                  <div className="Roboto_20pt_Regular_Mobile">
                    Provides a off-chain, gasless,
                  </div>
                  <div className="Roboto_20pt_Regular_Mobile">
                    multi-governance community
                  </div>
                  <div className="Roboto_20pt_Regular_Mobile">
                    mpolling dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Modal modalOpen={modalOpen} handleModal={handleModal} />
    </Container>
  );
}
const Container = styled.div`
  margin: auto auto;
  width: 720px;
  overflow-x: hidden;
  // background-color: #02051c;
  // background-image: (/bg_about.svg);
`;
const Content = styled.div`
  display: flex;

  .first {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 60px;

    .theme {
      margin: 120px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .content {
      display: flex;
      margin: auto auto;
      img {
        margin: auto auto;
      }
    }
    .text {
      margin: 40px auto;
    }
    .moreDetails {
      width: 230px;
      margin: 0 auto;
      margin-bottom: 60px;
      border-bottom: 1px solid var(--yellow);
      span {
        margin-left: 10px;
      }
    }
  }

  .second {
    display: flex;
    margin: auto auto;
    flex-direction: column;

    .theme {
      margin: 120px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .content {
      display: flex;
      margin: 0 auto;
      margin-bottom: 80px;
      img {
        margin: auto auto;
      }
    }

    .text {
      margin-bottom: 180px;
    }
  }

  .third {
    display: flex;
    margin: 0 auto;
    flex-direction: column;

    .theme {
      margin: 120px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .members {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-bottom: 160px;

        .member {
          display: flex;
          flex-direction: column;
          width: 620px;
          height: fit-content;
          margin-bottom: 20px;
          padding: 40px 0;
          padding-left: 80px;
          box-sizing: border-box;
          border-radius: 20px;
          background-color: var(--black-30);

          .name {
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
      margin: 120px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .partners {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-bottom: 180px;

      .tier {
        display: flex;

        .partner {
          display: flex;
          flex-direction: column;
          width: 310px;
          height: 182px;

          .logo {
            margin: 20px auto;
          }

          .desc {
            display: flex;
            flex-direction: column;

            div {
              margin: auto auto;
            }
          }
        }
        .partner:active {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`;

export default About;
