import styled from "styled-components";

function Recharge() {
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
                Frequent Use Point
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Frequent Use Point (FUP) is designed to reward regular users on
                the Recharge Ecosystem. Any payment made in the Recharge
                connected services will provide Frequent User Point on a pro
                rata basis. FUP is switchable with Recharge Token on a station
                in Recharge Ecosystem.
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
                Automated Carbon Redemption
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Every transaction of Recharge token regardless of mainnet will
                trigger Automated Carbon Redemption (ACR) to incentive center.
                Accumulated Carbon Redemption will be distributed to boost
                Recharge Virtuous Cycle and to purchase Carbon Credit.
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
                Recharge Governance
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Recharge Governance is designed for Recharge Ecosystem
                Contributors to shape the future of the protocols. Recharge
                holders can influence decision concerning the Recharge Ecosystem
                such as proposals and decision makings on shaping the ecosystem.
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
                Cross Chain Compatibility
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Recharge is deployed on various major protocols to help boost
                its ecosystem Recharge Swap(Cross Chain Bridge) in the first
                phase, supports ERC-20, HRC-20 and BEP-20.
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Content id="rechargeSection2">
        <div className="second">
          <div className="theme Roboto_50pt_Black">Utility</div>
          <Line />
          <div className="desc">
            <div className="subTheme Roboto_30pt_Black_L">
              Recharge Utilities at a glance
            </div>
            <div className="tier">
              <div className="box">
                <div className="title Roboto_30pt_Black_L">Ecosystem</div>
                <div className="line"></div>
                <div className="text Roboto_20pt_Regular_L">Governance</div>
                <div className="text Roboto_20pt_Regular_L">Token Swap</div>
                <div className="text Roboto_20pt_Regular_L">Staking</div>
                <div className="text Roboto_20pt_Regular_L">Yield Farming</div>
                <div className="text Roboto_20pt_Regular_L">LP Farming</div>
                <div className="text Roboto_20pt_Regular_L">Airdrops</div>
                <div className="text Roboto_20pt_Regular_L">Promotions</div>
              </div>
              <div className="box">
                <div className="title Roboto_30pt_Black_L">
                  Services Payment
                </div>
                <div className="line"></div>
                <div className="text Roboto_20pt_Regular_L">Power Bank</div>
                <div className="text Roboto_20pt_Regular_L">Super Charging</div>
                <div className="text Roboto_20pt_Regular_L">
                  Parking Sharing
                </div>
                <div className="text Roboto_20pt_Regular_L">
                  EV Bike Sharing, EV Scooter
                </div>
                {/* <div className="text Roboto_20pt_Regular_L"></div> */}
              </div>
              <div className="box">
                <div className="title Roboto_30pt_Black_L">Refresh Payment</div>
                <div className="line"></div>
                <div className="text Roboto_20pt_Regular_L">Car Wash</div>
                <div className="text Roboto_20pt_Regular_L">Car Rent</div>
                <div className="text Roboto_20pt_Regular_L">Car Care</div>
                <div className="text Roboto_20pt_Regular_L">
                  Car Accessories
                </div>
              </div>
            </div>
            <div className="tier">
              <div className="box">
                <div className="title Roboto_30pt_Black_L">Reward</div>
                <div className="line"></div>
                <div className="text Roboto_20pt_Regular_L">Service Point</div>
                <div className="text Roboto_20pt_Regular_L">Review Point</div>
              </div>
              <div className="box">
                <div className="title Roboto_30pt_Black_L">Lifestyle</div>
                <div className="line"></div>
                <div className="text Roboto_20pt_Regular_L">{"F&B"}</div>
                <div className="text Roboto_20pt_Regular_L">Books</div>
                <div className="text Roboto_20pt_Regular_L">
                  Leisure activity
                </div>
              </div>
              <div className="box">
                <div className="title Roboto_30pt_Black_L">
                  Premier Membership
                </div>
                <div className="line"></div>
                <div className="text Roboto_20pt_Regular_L">Premier Access</div>
              </div>
            </div>
          </div>
          <div className="notice Roboto_20pt_Regular_L">
            Each utility’s activation is subject to change
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
                  <div>Name</div>
                  <div>Ticker</div>
                  <div>Total Supply</div>
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
                  <div>Ecosystem</div>
                  <div>Development</div>
                  <div>
                    Exchanges
                    <span style={{ fontWeight: "normal" }}>
                      {" "}
                      (Decentralized)
                    </span>
                  </div>
                  <div>
                    Exchanges
                    <span style={{ fontWeight: "normal" }}> (Centralized)</span>
                  </div>
                  <div>Governance Reserve</div>
                  <div>Marketing</div>
                  <div>
                    Private Sales
                    <span style={{ fontWeight: "normal" }}> (1 year lock)</span>
                  </div>
                  <div>Team</div>
                  <div>Advisors</div>
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
                  Recharge Token address
                </div>
                <div className="content Roboto_20pt_Regular_L ">
                  <div>ERC-20 (Ethereum Mainnet) : </div>
                  <div>0xe74bE071f3b62f6A4aC23cA68E5E2A39797A3c30</div>
                  <div>HRC-20 (Huobi Eco Chain) : </div>
                  <div>0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b</div>
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
                Recharge Governance
              </div>
              <div className="text Roboto_20pt_Regular_L">
                Recharge Governance is designed for Recharge Ecosystem
                Contributors to shape the future of the protocols. Recharge
                holders can influence decision concerning the Recharge Ecosystem
                such as proposals and decision makings on shaping the ecosystem.{" "}
              </div>
              <div
                className="button Roboto_20pt_Regular_L"
                onClick={() =>
                  window.open("https://snapshot.org/#/therecharge.eth/all")
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
      border-radius: 10px;
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

export default Recharge;
