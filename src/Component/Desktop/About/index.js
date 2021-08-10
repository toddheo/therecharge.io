import { useState, useEffect } from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Section } from 'react-scroll-section';
import Footer from "../../Components/Desktop/Footer";

function About({ t }) {
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
          <div className="theme text Roboto_50pt_Black">Ecosystem</div>
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
          <div className="text text Roboto_20pt_Regular">
            {t("About/Ecosystem")}
          </div>
        </div>
      </Content>
      <Content id="aboutSection2">
        <div className="second">
          <div className="theme Roboto_50pt_Black">
            Recharge Virtuous Cycle
          </div>
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
          <div className="text text Roboto_20pt_Regular">
            {t("About/Recharge-Virtuous-Cycle")}
          </div>
        </div>
      </Content>
      <Content id="aboutSection3">
        <div className="third">
          <div className="theme text Roboto_50pt_Black">Team members</div>
          <div className="members">
            <div className="member">
              <div className="name text Roboto_20pt_Black_L">
                {t("About/Member/jayLee/title")}
              </div>
              <div className="desc text Roboto_19pt_Regular_L">
                {t("About/Member/jayLee/content")}
              </div>
            </div>
          </div>
          <div className="members">
            <div className="member">
              <div className="name text Roboto_20pt_Black_L">
                {t("About/Member/jakeKim/title")}
              </div>
              <div className="desc text Roboto_20pt_Regular_L">
                {t("About/Member/jakeKim/content")}
              </div>
            </div>
            <div className="member">
              <div className="name text Roboto_20pt_Black_L">
                {t("About/Member/ethanKang/title")}
              </div>
              <div className="desc text Roboto_20pt_Regular_L">
                {t("About/Member/ethanKang/content")}
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content id="aboutSection4">
        <div className="fourth">
          <div className="theme text Roboto_50pt_Black">Recharge is on</div>
          <div className="partners">
            <div className="tier">
              <div
                className="partner"
                onClick={() => { window.open("https://info.uniswap.org/#/", "_blank") }}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutUniswap.png"
                    style={{ height: "78px", width: "67.7px" }}
                  />
                </div>
                <div className="desc text Roboto_20pt_Regular">
                  {t("About/Recharge-is-on/1")}
                </div>
              </div>
              <div
                className="partner"
                onClick={() => { window.open("https://coinmarketcap.com/", "_blank") }}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutCMC.png"
                    style={{ height: "78px", width: "76.8px" }}
                  />
                </div>
                <div className="desc text Roboto_20pt_Regular">
                  {t("About/Recharge-is-on/2")}
                </div>
              </div>
              <div
                className="partner"
                onClick={() => { window.open("https://xangle.io/", "_blank") }}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutXangle.png"
                    style={{ height: "78px", width: "74px" }}
                  />
                </div>
                <div className="desc text Roboto_20pt_Regular">
                  {t("About/Recharge-is-on/3")}
                </div>
              </div>
            </div>
            <div className="tier">
              <div
                className="partner"
                onClick={() => { window.open("https://cobak.co.kr/", "_blank") }}
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
                <div className="desc text Roboto_20pt_Regular">
                  {t("About/Recharge-is-on/4")}
                </div>
              </div>
              <div
                className="partner"
                onClick={() => { window.open("https://snapshot.org/", "_blank") }}
              >
                <div className="logo">
                  <img
                    alt=""
                    src="/aboutSnap.png"
                    style={{ height: "78px", width: "65.2px" }}
                  />
                </div>
                <div className={"desc text " + (t("About/Recharge-is-on/5")[0] == "P" ? "Roboto_16pt_Regular" : "Roboto_20pt_Regular")}>
                  {t("About/Recharge-is-on/5")}
                </div>
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
  width: 100%;
  // padding: 0 416px;
  box-sizing: border-box;
`;
const Content = styled.div`
  display: flex;

  .text {
    white-space: pre-line;
  }
    .desc{
    white-space: pre-line;
  }
  .first {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 100px;

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

export default withTranslation()(About);
