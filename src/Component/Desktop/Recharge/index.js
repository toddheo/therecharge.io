import styled from "styled-components";
import { withTranslation } from "react-i18next";
import Footer from "../../Components/Desktop/Footer";

function Recharge({ t }) {
  return (
    <Container>
      <Content id="rechargeSection1">
        <div className="first">
          <div className="theme Roboto_50pt_Black">Features</div>
          <Line />
          <div className="desc">
            <div className="left">
              <img
                src="/RTfeature1.png"
                style={{ width: "120px", height: "99.6px" }}
              />
            </div>
            <div className="right">
              <div className="topic Roboto_30pt_Black_L">
                {t("RechargeToken/Features/1/title")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                {t("RechargeToken/Features/1/content")}
              </div>
            </div>
          </div>
          <div className="desc">
            <div className="left">
              <img
                src="/RTfeature2.png"
                style={{ width: "120px", height: "110.1px" }}
              />
            </div>
            <div className="right">
              <div className="topic Roboto_30pt_Black_L">
                {t("RechargeToken/Features/2/title")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                {t("RechargeToken/Features/2/content")}
              </div>
            </div>
          </div>
          <div className="desc">
            <div className="left">
              <img
                src="/RTfeature3.png"
                style={{ width: "120px", height: "120.2px" }}
              />
            </div>
            <div className="right">
              <div className="topic Roboto_30pt_Black_L">
                {t("RechargeToken/Features/3/title")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                {t("RechargeToken/Features/3/content")}
              </div>
            </div>
          </div>
          <div className="desc">
            <div className="left">
              <img
                src="/RTfeature4.png"
                style={{ width: "120px", height: "103.5px" }}
              />
            </div>
            <div className="right">
              <div className="topic Roboto_30pt_Black_L">
                {t("RechargeToken/Features/4/title")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                {t("RechargeToken/Features/4/content")}
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Content id="rechargeSection3">
        <div className="third">
          <div className="theme Roboto_50pt_Black">Distribution</div>
          <Line />
          <div className="desc">
            <div className="left">
              <div className="header">
                <div className="object Roboto_30pt_Black_L">
                  <div>{t("RechargeToken/Distribution/name")}</div>
                  <div>{t("RechargeToken/Distribution/ticker")}</div>
                  <div>{t("RechargeToken/Distribution/total-supply")}</div>
                </div>
                <div className="content Roboto_20pt_Regular_L ">
                  <div>Recharge</div>
                  <div>RCG</div>
                  <div>1,000,000,000 RCG</div>
                </div>
              </div>
              <WLine />
              <div className="middle">
                <div className="object Roboto_20pt_Black_L">
                  <div>{t("RechargeToken/Distribution/ecosystem")}</div>
                  <div>{t("RechargeToken/Distribution/development")}</div>
                  <div>
                    {t("RechargeToken/Distribution/exchanges/decentralized")}
                  </div>
                  <div>
                    {t("RechargeToken/Distribution/exchanges/centralized")}
                  </div>
                  <div>
                    {t("RechargeToken/Distribution/governance-reserve")}
                  </div>
                  <div>{t("RechargeToken/Distribution/marketing")}</div>
                  <div>{t("RechargeToken/Distribution/private-sales")}</div>
                  <div>{t("RechargeToken/Distribution/team")}</div>
                  <div>{t("RechargeToken/Distribution/advisors")}</div>
                </div>
                <div className="content Roboto_20pt_Regular_L">
                  <div>40%</div>
                  <div>10%</div>
                  <div>10%</div>
                  <div>15%</div>
                  <div>10%</div>
                  <div>5%</div>
                  <div>5%</div>
                  <div>3%</div>
                  <div>2%</div>
                </div>
              </div>
              <WLine />
              <div className="bottom">
                <div className="object Roboto_30pt_Black_L">
                  {t("RechargeToken/Distribution/recharge-token-address")}
                </div>
                <div className="content Roboto_20pt_Regular_L ">
                  <div>{t("RechargeToken/Distribution/erc20")} : </div>
                  <div>0xe74bE071f3b62f6A4aC23cA68E5E2A39797A3c30</div>
                  <div>{t("RechargeToken/Distribution/hrc20")} : </div>
                  <div>0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b</div>
                  <div>{t("RechargeToken/Distribution/bep20")} : </div>
                  <div>0x2D94172436D869c1e3c094BeaD272508faB0d9E3</div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="/RTdis.png" />
            </div>
          </div>
        </div>
      </Content>

      <Content id="rechargeSection4">
        <div className="fourth">
          <div className="theme Roboto_50pt_Black">Governance</div>
          <Line />
          <div className="desc">
            <div className="left">
              <img
                src="/RTgov.png"
                style={{ width: "120px", height: "143.5px" }}
              />
            </div>
            <div className="right">
              <div className="topic Roboto_30pt_Black_L">
                {t("RechargeToken/Governance/title")}
              </div>
              <div className="text Roboto_20pt_Regular_L">
                {t("RechargeToken/Governance/content")}
              </div>
              <div
                className="button Roboto_20pt_Regular_L"
                onClick={() =>
                  window.open("https://snapshot.org/#/therecharge.eth")
                }
              >
                <div style={{ margin: "auto", marginLeft: "0" }}>
                  Go to Snapshot
                </div>
                <div className="arrow">〉</div>
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Content id="rechargeSection5">
        <div className="fifth">
          <div className="theme Roboto_50pt_Black">Exchanges</div>
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
          <div className="title Roboto_50pt_Black">Coming up Soon</div>
        </div>
      </Content>
      <Footer />
      <Background />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1088px;
  margin-top: 100px;
  // padding: 0 416px;
  box-sizing: border-box;
`;
const Content = styled.div`
  display: flex;
  width: 1088px;
  margin: 0 auto;

  .first {
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
      margin: 0 auto;
      margin-top: 80px;
      margin-left: 40px;
      .left {
        margin-right: 80px;
      }
      .right {
        .topic {
          margin-bottom: 20px;
        }
        .text {
          width: 848px;
        }
      }
    }
  }
  .second {
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
      width: 1048px;
      margin-left: 40px;
      margin-top: 80px;
      .subTheme {
        margin-bottom: 40px;
      }
      .tier {
        display: flex;
        justify-content: space-between;
        color: var(--white);
        .box {
          .title {
            margin-top: 40px;
          }
          .line {
            width: 176px;
            height: 2px;
            background-color: var(--white);
            margin-top: 8px;
            margin-bottom: 40px;
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
    margin: 0 auto;
    margin-top: 180px;
    margin-bottom: 120px;
    .theme {
      margin-bottom: 40px;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
    }
    .desc {
      display: flex;
      margin-left: 40px;
      margin-top: 80px;
      justify-content: space-between;
      .left {
        .header {
          display: flex;
          width: 455px;
          padding-right: 40px;
          box-sizing: border-box;
          .object {
            display: flex;
            flex-direction: column;
            margin-right: 80px;
            div {
              margin-bottom: 16px;
            }
          }
          .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            div {
              margin-bottom: 16px;
            }
          }
        }
        .middle {
          display: flex;
          width: 455px;
          padding-right: 40px;
          box-sizing: border-box;
          justify-content: space-between;
          .object {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            div {
              margin-bottom: 16px;
            }
          }
          .content {
            display: flex;
            flex-direction: column;
            div {
              margin-bottom: 16px;
            }
          }
        }
        .bottom {
          .object {
            margin-bottom: 16px;
          }
        }
      }
      .right {
        display: flex;
        margin: auto 0;
        margin-right: 0;
        img {
          width: 502.7px;
          height: 361.4px;
        }
      }
    }
  }
  .fourth {
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
      margin: 0 auto;
      margin-left: 40px;
      margin-top: 80px;
      .left {
        margin-right: 80px;
      }
      .right {
        .topic {
          margin-bottom: 20px;
        }
        .text {
          width: 848px;
          margin-bottom: 20px;
        }
      }
    }
    .button {
      display: flex;
      justify-content: space-between;
      width: 250px;
      height: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      border: 1px solid var(--bright-sky-blue);
      border-radius: 20px;
      cursor: pointer;
      .arrow {
        margin: auto 0;
        font-size: 12px;
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
      margin: 0 auto;
      margin-top: 80px;
      margin-bottom: 60px;
      align-items: flex-end;
      .image {
        width: 120px;
        margin: 0 90px;
      }
    }
    .title {
      margin: 60px auto;
    }
  }
`;

const Line = styled.div`
  width: 1088px;
  height: 2px;
  box-shadow: 0 0 20px 0 #ffffff;
  background-color: #00c3ee;
`;

const WLine = styled.div`
  margin-bottom: 40px;
  width: 455px;
  height: 2px;
  background-color: white;
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
