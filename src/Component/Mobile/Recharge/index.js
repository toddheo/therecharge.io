import styled from "styled-components";

import RechargeSlider from "../../Components/Common/Slider/RechargeSlider";

import { withTranslation } from "react-i18next";

function Recharge({ t }) {
  return (
    <Container>
      <Content id="rechargeSection1">
        <div className="first">
          <div className="theme text Roboto_50pt_Black_Mobile">Features</div>
          <div className="line">
            <Line />
          </div>
          <RechargeSlider>
            <SliderContent>
              <img
                src="/RTfeature1.png"
                style={{ width: "240px", height: "199.2px" }}
              />
              <h1 className="text Roboto_40pt_Black">
                {t("RechargeToken/Features/1/title")}
              </h1>
              <p className="text Roboto_30pt_Regular_Mobile">
                {t("RechargeToken/Features/1/content")}
              </p>
            </SliderContent>
            <SliderContent>
              <img src="/RTfeature2.png" />
              <h1 className="text Roboto_40pt_Black">
                {t("RechargeToken/Features/2/title")}
              </h1>
              <p className="text Roboto_30pt_Regular_Mobile">
                {t("RechargeToken/Features/2/content")}
              </p>
            </SliderContent>
            <SliderContent>
              <img src="/RTfeature3.png" />
              <h1 className="text Roboto_40pt_Black">
                {t("RechargeToken/Features/3/title")}
              </h1>
              <p className="text Roboto_30pt_Regular_Mobile">
                {t("RechargeToken/Features/3/content")}
              </p>
            </SliderContent>
            <SliderContent>
              <img src="/RTfeature4.png" />
              <h1 className="text Roboto_40pt_Black">
                {t("RechargeToken/Features/4/title")}
              </h1>
              <p className="text Roboto_30pt_Regular_Mobile">
                {t("RechargeToken/Features/4/content")}
              </p>
            </SliderContent>
          </RechargeSlider>
        </div>
      </Content>

      <Content
        id="rechargeSection3"
        style={window.innerHeight > 1500 ? { minHeight: "900px" } : {}}
      >
        <div className="third">
          <div className="theme text Roboto_50pt_Black_Mobile">
            Distribution
          </div>
          <Line />
          <img src="/img-station-distribution.png" />
          <div className="top-container">
            <div className="left-box">
              <p className="text Roboto_40pt_Black_L">
                {t("RechargeToken/Distribution/name")}
              </p>
              <p className="text Roboto_40pt_Black_L">
                {t("RechargeToken/Distribution/ticker")}
              </p>
              <p className="text Roboto_40pt_Black_L">
                {t("RechargeToken/Distribution/total-supply")}
              </p>
            </div>
            <div className="right-box text Roboto_30pt_Light">
              <p>Recharge</p>
              <p>RCG</p>
              <p>1,000,000,000 RCG</p>
            </div>
          </div>
          <WhiteLine />
          <div className="body-container">
            <div className="left-box text Roboto_30pt_Black_L">
              <p>{t("RechargeToken/Distribution/ecosystem")}</p>
              <p>{t("RechargeToken/Distribution/development")}</p>
              <p>{t("RechargeToken/Distribution/exchanges/decentralized")}</p>
              <p>{t("RechargeToken/Distribution/exchanges/centralized")}</p>
              <p>{t("RechargeToken/Distribution/marketing")}</p>
              <p>{t("RechargeToken/Distribution/governance-reserve")}</p>
              <p>{t("RechargeToken/Distribution/private-sales")}</p>
              <p>{t("RechargeToken/Distribution/team")}</p>
              <p>{t("RechargeToken/Distribution/advisors")}</p>
            </div>
            <div className="right-box text Roboto_30pt_Light">
              <p>40%</p>
              <p>10%</p>
              <p>10%</p>
              <p>15%</p>
              <p>10%</p>
              <p>50%</p>
              <p>50%</p>
              <p>3%</p>
              <p>2%</p>
            </div>
          </div>
          <WhiteLine />
          <div className="bottom-container">
            <h1 className="text Roboto_40pt_Black_L">
              {t("RechargeToken/Distribution/recharge-token-address")}
            </h1>
            <p className="text Roboto_25pt_Light">
              {t("RechargeToken/Distribution/erc20")} :
              <br />
              0xe74bE071f3b62f6A4aC23cA68E5E2A39797A3c30
            </p>
            <p className="text Roboto_25pt_Light">
              {t("RechargeToken/Distribution/hrc20")} :
              <br />
              0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b
            </p>
            <p className="text Roboto_25pt_Light">
              {t("RechargeToken/Distribution/bep20")} :
              <br />
              0x2D94172436D869c1e3c094BeaD272508faB0d9E3
            </p>
          </div>
        </div>
      </Content>
      <Content id="rechargeSection4">
        <div className="fourth">
          <div className="theme text Roboto_50pt_Black_Mobile">Governance</div>
          <Line />
          <img src="ic-snap.png" />
          <h1 className="text Roboto_40pt_Black">
            {t("RechargeToken/Governance/title")}
          </h1>
          <p className="text Roboto_30pt_Regular_Mobile">
            {t("RechargeToken/Governance/content")}
          </p>
          <div
            className="button text Roboto_30pt_Regular_Mobile"
            onClick={() => {
              window.open("https://snapshot.org/#/therecharge.eth");
            }}
          >
            Go to Snapshot
            <div className="arrow">〉</div>
          </div>
        </div>
      </Content>
      <Content id="rechargeSection5">
        <div className="fifth">
          <div className="theme text Roboto_50pt_Black_Mobile">Exchanges</div>
          <Line />
          <div className="desc">
            <div className="image">
              <img src="/img_uniswap.svg" />
            </div>
            <div className="image">
              <img src="/img_mdex.svg" />
            </div>
            <div className="image">
              <img src="/img_pancakeswap.svg" />
            </div>
          </div>
          <div className="title text Roboto_50pt_Black">Coming up Soon</div>
        </div>
      </Content>
      <Background />
    </Container>
  );
}
const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 240px;
  }
  p,
  h1 {
    line-height: 1.5;
    margin: 0;
  }

  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }
`;
const Container = styled.div`
  margin: auto auto;
  width: 720px;
  overflow-x: hidden;
`;
const Content = styled.div`
  display: flex;

  .text {
    white-space: pre-line;
  }
  .first {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 720px;
    margin-top: 100px;
    margin-bottom: 50px;

    .theme {
      display: flex;
      margin: 0 auto;
      margin-top: 180px;
      margin-bottom: 16px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .line {
      margin: 0 auto;
      margin-bottom: 120px;
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 720px;
    .theme {
      margin-top: 300px;
      margin-bottom: 16px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    .line {
      margin: 0 auto;
      margin-bottom: 120px;
    }

    .subTheme {
      margin-bottom: 40px;
    }
    .desc {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-top: 40px;

      margin: 0 50px;
      .tier {
        display: flex;
        align-items: flex-start;
        color: var(--white);
        .box {
          margin: auto;
          margin-left: 0;
          width: 287px;

          .title {
            margin-top: 40px;
          }
          .line {
            width: 176px;
            height: 2px;
            background-color: var(--white);
            margin-top: 8px;
            margin-bottom: 20px;
          }
          .text {
            margin-bottom: 20px;
          }
        }
      }
    }
    .notice {
      margin-left: 40px;
      color: var(--bright-sky-blue);
    }
  }

  .third {
    display: flex;
    flex-direction: column;
    margin: auto 50px;
    margin-top: 85px;
    width: 100%;
    color: var(--white);

    .theme {
      margin: 20px auto;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    img {
      margin: auto;
      margin-top: 120px;
      margin-bottom: 80px;
      width: 552.5px;
    }

    .top-container {
      display: flex;
      justify-content: space-between;
      // width: 720px;
      margin-bottom: 25px;
      p {
        display: flex;
        align-items: center;
        height: 50px;
        margin: 0;
        margin-bottom: 25px;
      }
      .left-box {
      }
      .right-box {
      }
    }
    .body-container {
      display: flex;
      justify-content: space-between;
      // width: 100%;
      margin: 50px 0;
      p {
        display: flex;
        align-items: center;
        height: 43px;
        margin: 0;
        margin-bottom: 10px;
      }
      .left-box {
      }
      .right-box {
        padding-right: 50px;
        p {
          justify-content: flex-end;
        }
      }
    }
    .bottom-container {
      margin-top: 60px;
      * {
        margin: 0;
      }
      h1 {
        margin-bottom: 20px;
      }
      p {
        white-space: pre-wrap;
        word-break: break-all;
      }
    }
  }

  .fourth {
    display: flex;
    margin: 0 50px;
    margin-top: 100px;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .theme {
      margin: 20px auto;

      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }

    img {
      width: 130px;
      margin-top: 120px;
      margin-bottom: 80px;
    }
    h1 {
      margin: 0 auto;
    }
    p {
      text-align: center;
      margin: 80px 0;
      color: var(--white);
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      box-sizing: border-box;
      padding-left: 25px;
      // border-radius: 30px;

      margin: 0 auto;
      width: 300px;
      height: 60px;
      padding: 0 20px;
      box-sizing: border-box;
      border: 1px solid var(--bright-sky-blue);
      border-radius: 30px;
      .arrow {
        margin: auto 0;
        font-size: 25px;
        font-weight: bold;
        margin-left: 20px;
        margin-right: -5px;
        color: var(--bright-sky-blue);
      }
    }
    .button:hover {
      background-color: var(--bright-sky-blue);
      .arrow {
        color: var(--white);
      }
    }
  }

  .fifth {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 180px;
    margin-bottom: 120px;
    .theme {
      margin-bottom: 40px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }
    .desc {
      display: flex;
      margin: 120px 0;
      align-items: flex-end;
      justify-content: space-around;
      .image {
        width: 120px;
      }
    }
    .title {
      margin: 60px auto;
    }
  }
`;

const Line = styled.div`
  width: 620px;
  height: 2px;
  box-shadow: 0 0 20px 0 #ffffff;
  background-color: var(--bright-sky-blue);
`;

const WhiteLine = styled.div`
  width: 620px;
  height: 2px;
  background-color: #fff;
`;

const Background = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  right: 10vw;
  top: 400px;
  background: url(/bg_recharge_top.svg) no-repeat;
  background-size: contain;
  background-position: right 0px;
`;

export default withTranslation()(Recharge);
