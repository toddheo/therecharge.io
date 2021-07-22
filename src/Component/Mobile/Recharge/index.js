import styled from "styled-components";

import RechargeSlider from "../../Components/Slider/RechargeSlider";

function Recharge() {
  return (
    <Container>
      <Content id="rechargeSection1">
        <div className="first">
          <div className="theme Roboto_50pt_Black_Mobile">Features</div>
          <div className="line">
            <Line />
          </div>
          <RechargeSlider>
            <SliderContent>
              <img
                src="/RTfeature1.png"
                style={{ width: "240px", height: "199.2px" }}
              />
              <h1 className="Roboto_40pt_Black">Frequent Use Point</h1>
              <p className="Roboto_30pt_Regular_Mobile">
                Frequent Use Point (FUP) is designed to reward regular users on
                the Recharge Ecosystem. Any payment made in the Recharge
                connected services will provide Frequent User Point on a pro
                rata basis. FUP is switchable with Recharge Token on a station
                in Recharge Ecosystem.
              </p>
            </SliderContent>
            <SliderContent>
              <img src="/RTfeature2.png" />
              <h1 className="Roboto_40pt_Black">Automated Carbon Redemption</h1>
              <p className="Roboto_30pt_Regular_Mobile">
                Every transaction of Recharge token regardless of mainnet will
                trigger Automated Carbon Redemption (ACR) to incentive center.
                Accumulated Carbon Redemption will be distributed to boost
                Recharge Virtuous Cycle and to purchase Carbon Credit.
              </p>
            </SliderContent>
            <SliderContent>
              <img src="/RTfeature3.png" />
              <h1 className="Roboto_40pt_Black">Recharge Governance</h1>
              <p className="Roboto_30pt_Regular_Mobile">
                Recharge Governance is designed for Recharge Ecosystem
                Contributors to shape the future of the protocols. Recharge
                holders can influence decision concerning the Recharge Ecosystem
                such as proposals and decision makings on shaping the ecosystem.
              </p>
            </SliderContent>
            <SliderContent>
              <img src="/RTfeature4.png" />
              <h1 className="Roboto_40pt_Black">Cross Chain Compatibility</h1>
              <p className="Roboto_30pt_Regular_Mobile">
                Recharge is deployed on various major protocols to help boost
                its ecosystem Recharge Swap(Cross Chain Bridge) in the first
                phase, supports ERC-20, HRC-20 and BEP-20.
              </p>
            </SliderContent>
          </RechargeSlider>
        </div>
      </Content>

      <Content id="rechargeSection2">
        <div className="second">
          <div className="theme Roboto_50pt_Black_Mobile">Utility</div>
          <div className="line">
            <Line />
          </div>
          <div className="subTheme Roboto_40pt_Black">
            Recharge Utilities at a glance
          </div>
          <div className="desc">
            <div className="tier">
              <div className="box" style={{ height: "520px" }}>
                <div className="title Roboto_30pt_Black">Ecosystem</div>
                <div className="line"></div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Governance
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Token Swap
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">Staking</div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Yield Farming
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  LP Farming
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">Airdrops</div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Promotions
                </div>
              </div>

              <div className="box" style={{ height: "520px" }}>
                <div className="title Roboto_30pt_Black">Services Payment</div>
                <div className="line"></div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Power Bank
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Super Charging
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Parking Sharing
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  EV Bike Sharing, EV Scooter
                </div>
                {/* <div className="text Roboto_25pt_Regular_Mobile3">
                  
                </div> */}
              </div>
            </div>
            <div className="tier">
              <div className="box" style={{ height: "350px" }}>
                <div className="title Roboto_30pt_Black">Refresh Payment</div>
                <div className="line"></div>
                <div className="text Roboto_25pt_Regular_Mobile3">Car Wash</div>
                <div className="text Roboto_25pt_Regular_Mobile3">Car Rent</div>
                <div className="text Roboto_25pt_Regular_Mobile3">Car Care</div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Car Accessories
                </div>
              </div>
              <div className="box" style={{ height: "350px" }}>
                <div className="title Roboto_30pt_Black">Reward</div>
                <div className="line"></div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Service Point
                </div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Review Point
                </div>
              </div>
            </div>
            <div className="tier">
              <div className="box" style={{ height: "320px" }}>
                <div className="title Roboto_30pt_Black">Lifestyle</div>
                <div className="line"></div>
                <div className="text Roboto_25pt_Regular_Mobile3">{"F&B"}</div>
                <div className="text Roboto_25pt_Regular_Mobile3">Books</div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Leisure activity
                </div>
              </div>
              <div className="box" style={{ height: "320px" }}>
                <div className="title Roboto_30pt_Black">
                  Premier Membership
                </div>
                <div className="line"></div>
                <div className="text Roboto_25pt_Regular_Mobile3">
                  Premier Access
                </div>
              </div>
            </div>
          </div>
          {/* <div className="notice Roboto_25pt_Regular_Mobile3">
            Each utility’s activation is subject to change
          </div> */}
        </div>
      </Content>

      <Content
        id="rechargeSection3"
        style={window.innerHeight > 1500 ? { minHeight: "900px" } : {}}
      >
        <div className="third">
          <div className="theme Roboto_50pt_Black_Mobile">Distribution</div>
          <Line />
          <img src="/img-station-distribution.png" />
          <div className="top-container">
            <div className="left-box">
              <p className="Roboto_40pt_Black_L">Name</p>
              <p className="Roboto_40pt_Black_L">Ticker</p>
              <p className="Roboto_40pt_Black_L">Total Supply</p>
            </div>
            <div className="right-box Roboto_30pt_Light">
              <p>Recharge</p>
              <p>RCG</p>
              <p>1,000,000,000 RCG</p>
            </div>
          </div>
          <WhiteLine />
          <div className="body-container">
            <div className="left-box Roboto_30pt_Black_L">
              <p>Ecosystem</p>
              <p>Development</p>
              <p>
                Exchanges <p className="Roboto_30pt_Regular">(Centralized)</p>
              </p>
              <p>
                Exchanges <p className="Roboto_30pt_Regular">(Decentralized)</p>
              </p>
              <p>Marketing</p>
              <p>Governance Reserve</p>
              <p>
                Private Sales{" "}
                <p className="Roboto_30pt_Regular">(1 year lock)</p>
              </p>
              <p>Team</p>
              <p>Advisors</p>
            </div>
            <div className="right-box Roboto_30pt_Light">
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
            <h1 className="Roboto_40pt_Black_L">Recharge Token address</h1>
            <p className="Roboto_25pt_Light">
              ERC-20 (Ethereum Mainnet) :
              <br />
              0xe74bE071f3b62f6A4aC23cA68E5E2A39797A3c30
            </p>
            <p className="Roboto_25pt_Light">
              HRC-20 (Huobi Eco Chain) :
              <br />
              0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b
            </p>
          </div>
        </div>
      </Content>
      <Content id="rechargeSection4">
        <div className="fourth">
          <div className="theme Roboto_50pt_Black_Mobile">Governance</div>
          <Line />
          <img src="ic-snap.png" />
          <h1 className="Roboto_40pt_Black">Recharge Governance</h1>
          <p className="Roboto_30pt_Regular_Mobile">
            Recharge Governance is designed for Recharge Ecosystem Contributors
            to shape the future of the protocols. Recharge holders can influence
            decision concerning the Recharge Ecosystem such as proposals and
            decision makings on shaping the ecosystem.
          </p>
          <div
            className="button Roboto_30pt_Regular_Mobile"
            onClick={() => {
              window.open("https://snapshot.org/#/therecharge.eth/all");
            }}
          >
            Go to Snapshot
          </div>
        </div>
      </Content>
      <Content id="rechargeSection5">
        <div className="fifth">
          <div className="theme Roboto_50pt_Black_Mobile">Exchanges</div>
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

      margin: 0 auto;
      width: 300px;
      height: 60px;
      background-image: url("/btn-governance.png");
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

export default Recharge;
