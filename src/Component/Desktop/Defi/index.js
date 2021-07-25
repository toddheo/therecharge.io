/* Libraries */
import { fromWei } from "web3-utils";
import React, { useState, useEffect, useRef } from "react";
import { useSortBy, useTable } from "react-table";
import styled from "styled-components";
import axios from "axios";
import { RotateCircleLoading } from "react-loadingg";
import { withTranslation } from "react-i18next";
/* Components */
import ModalPool from "./modal_pool";
import ModalSwap from "./modal_swap";
/* State */
import { useRecoilState } from "recoil";
import {
  modalPoolOpenState,
  modalSwapOpenState,
  modalPool2OpenState,
} from "../../../store/modal";

const convertNum = (num, { unitSeparator } = { unitSeparator: false }) => {
  let newNum;
  if (typeof num === "string") newNum = Number(num);
  if (unitSeparator) return newNum.toLocaleString();
  return newNum.toLocaleString("fullwide", { useGrouping: false });
};
function makeNum(str, decimal = 4) {
  let arr = str.split(".");
  if (arr.length == 1 || arr[0].length > 8) return arr[0];
  else {
    return arr[0] + "." + arr[1].substr(0, decimal);
  }
}
const weiToEther = (wei) => {
  return fromWei(wei, "ether");
};

function Defi({
  connectWallet,
  onDisconnect,
  account,
  chainId,
  web3,
  toast,
  params,
  setParams,
  t,
}) {
  const [onLoading, setOnLoading] = useState(true);
  const [modalPoolOpen, setModalPoolOpen] = useRecoilState(modalPoolOpenState);
  const [modalSwapOpen, setModalSwapOpen] = useRecoilState(modalSwapOpenState);
  const [modalPool2Open, setModalPool2Open] =
    useRecoilState(modalPool2OpenState);
  // const [modalPoolOpen, setModalPoolOpen] = useState(false);
  // const [modalSwapOpen, setModalSwapOpen] = useState(false);
  const [sel, setSelCharger] = useState(0);
  const [chargerList, setChargerList] = useState([
    {
      type: "Flexible",
      isLP: false,
      address: "0xac66a0E8bf3de069Ffc043491CB8ca7b278529A0",
    },
    {
      type: "Locked",
      isLP: false,
      address: "0xf1e99a4a9569A2Afd40e12b7686e31608Ebd2663",
    },
  ]);
  const [chargerInfoList, setChargerInfoList] = useState([
    {
      name: "Fake Charger No.0",
      apy: "100",
      tvl: "100,000,000",
      limit: "0",
      balance: "1,000,000",
      share: "100",
      reward: "100,000",
      period: "21.01.01 00:00:00 ~ 21.01.30 00:00:00(GMT)",
      available: "7,000,000.00",
      allowance: "0",
      rewardSymbol: "RCGr",
      stakeSymbol: "RCGs",
      redemption: "2",
      status: "1",
    },
  ]);

  const [myPools, setMyPools] = useState(null);
  const [analytics, setAnalytics] = useState({
    ERC: {},
    HRC: {},
    general: {},
  });

  const data = React.useMemo(
    () => (myPools === null ? [] : myPools),
    [myPools]
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Type",
        accessor: "type", // accessor is the "key" in the data
        disableSortBy: true,
      },
      {
        Header: "Name",
        accessor: "name",
        disableSortBy: true,
      },
      {
        Header: "My Balance",
        accessor: "balance",
        id: "balance",
        disableSortBy: true,
      },
      {
        Header: "Reward",
        accessor: "reward",
        disableSortBy: true,
      },
    ],
    []
  );
  const initialState = {
    sortBy: [
      {
        id: "balance",
        desc: true,
      },
    ],
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, initialState }, useSortBy);

  const handleModalPool = () => {
    setModalPoolOpen(!modalPoolOpen);
  };
  const handleModalSwap = () => {
    setModalSwapOpen(!modalSwapOpen);
  };

  const loadMyPools = async () => {
    try {
      let { data } = await axios.get(
        `https://bridge.therecharge.io/charger/list/account/${account}`
      );
      /*
       * address: "0xc0F7C09dD6AcDcac9515Bc1c018c14E93C1757FF"
       * balance: "19600000000000000000"
       * name: "Test Flexible Charger"
       * reward: "2451553674681048"
       * symbol: ["RCG", "RCG"]
       * type: "flexible"
       */
      let ret = data.map((charger, index) => {
        return {
          balance: makeNum(weiToEther(charger.balance)),
          reward: makeNum(weiToEther(charger.reward), 6),
          type:
            charger.type === "flexible" ? "Flexible Staking" : "Locked Staking",
          name: charger.name,
        };
      });
      setMyPools(ret);
    } catch (err) {
      console.log(err);
    }
  };

  const loadAnalytics = async () => {
    try {
      let { data } = await axios.get(`https://bridge.therecharge.io/analytics`);
      setAnalytics(data);
      /**
       * ERC: {},
       * HRC: {},
       * general: {},
       */
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoading = () => {
    setOnLoading(false);
  };

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    if (account) loadMyPools();
    loadAnalytics();
  }, 5000);

  useEffect(() => {
    loadMyPools();
  }, [account]);

  // useEffect(() => {
  //   handleLoading();
  // }, [myPools]);

  return (
    <Container
      style={
        modalPoolOpen || modalSwapOpen
          ? {
              position: "fixed",
              top: "-20px",
              width: "100%",
              backgroundColor: "#02051c",
            }
          : {}
      }
    >
      <Content>
        <div className="first" id="station" style={{ paddingTop: "100px" }}>
          <div className="theme Roboto_50pt_Black">Station</div>
          <div className="contents">
            <div className="content">
              <div className="box" onClick={() => handleModalPool()}>
                <img src="/ic_chargingstation.svg" />
                <div className="name Roboto_40pt_Black">Charging Station</div>
              </div>
              <div className="text Roboto_20pt_Regular">
                {t("De-Fi/Station/charging-station")}
              </div>
            </div>
            <div className="content">
              <div className="box" onClick={() => handleModalSwap()}>
                <img src="/ic_rechargingswap.svg" />
                <div className="name Roboto_40pt_Black">Recharging Swap</div>
              </div>
              <div className="text Roboto_20pt_Regular">
                {t("De-Fi/Station/recharge-swap")}
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content>
        <div className="second" id="mypools" style={{ paddingTop: "100px" }}>
          <div className="theme Roboto_50pt_Black">My pools</div>
          {!account ? (
            <div className="contents">
              <div className="content Roboto_30pt_Medium">
                {t("De-Fi/Station/MyPool/ask-connect")}
              </div>
              <div
                className="walletConnect Roboto_20pt_Regular"
                onClick={async () => {
                  await connectWallet();
                }}
              >
                <p>{account ? "" : "Wallet Connect"}</p>
              </div>
            </div>
          ) : myPools === null ? (
            <Loading style={{ display: onLoading ? "" : "none" }}>
              <div className="box">
                <RotateCircleLoading
                  color="#9314b2"
                  style={{ margin: "auto", marginTop: "67.6px" }}
                />
                <div className="text Roboto_30pt_Black">Loading…</div>
              </div>
            </Loading>
          ) : myPools.length === 0 ? (
            <div className="contents">
              <div className="content Roboto_30pt_Medium">
                {t("De-Fi/MyPool/no-pool")}
              </div>
            </div>
          ) : (
            <div className="contents">
              <table
                {...getTableProps()}
                style={{ width: "1088px", borderCollapse: "collapse" }}
                className="Roboto_20pt_Black"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {column.render("Header")}
                          {column.Header !== "" ? (
                            <div
                              style={{
                                width: "100%",
                                height: "2px",
                                margin: "20px 0",
                                objectFit: "contain",
                                boxShadow: "0 0 20px 0 #ffffff",
                                backgroundColor: "var(--purple)",
                              }}
                            ></div>
                          ) : (
                            <></>
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} className="tableRow">
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              onClick={() => {
                                setParams({
                                  type: `${
                                    myPools[row.index].type.split(" ")[0]
                                  }`,
                                  isLP: false,
                                });

                                setModalPool2Open(!modalPool2Open);
                                handleModalPool();
                              }}
                              style={{
                                padding: "10px",
                                textAlign: "center",
                                cursor: "pointer",
                              }}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Content>
      <Content>
        <div className="third" id="analytics" style={{ paddingTop: "100px" }}>
          <div className="theme Roboto_50pt_Black">Analytics</div>
          <div className="subTheme Roboto_30pt_Medium">
            Overview of Recharge Ecosystem
          </div>
          <div className="contents">
            <div className="container">
              <div className="large box">
                <div className="title Roboto_30pt_Medium">
                  {analytics.ERC.total
                    ? convertNum(weiToEther(convertNum(analytics.ERC.total)), {
                        unitSeparator: true,
                      })
                    : 0}{" "}
                  RCG
                </div>
                <div className="text Roboto_16pt_Regular_Gray">
                  Total Circulating Supply in ERC20
                </div>
              </div>
              <div className="large box">
                <div className="title Roboto_30pt_Medium">
                  {analytics.HRC.total
                    ? convertNum(weiToEther(convertNum(analytics.HRC.total)), {
                        unitSeparator: true,
                      })
                    : 0}{" "}
                  RCG
                </div>
                <div className="text Roboto_16pt_Regular_Gray">
                  Total Circulating Supply in HRC20
                </div>
              </div>
            </div>
            <div className="container">
              <div className="medium box">
                <div className="title">
                  {analytics.ERC.redemption ? analytics.ERC.redemption : 0} RCG
                </div>
                <div className="text Roboto_16pt_Regular_Gray">
                  Accumulated Carbon Redemption ERC20
                </div>
              </div>
              <div className="medium box">
                <div className="title">
                  {analytics.HRC.redemption ? analytics.HRC.redemption : 0} RCG
                </div>
                <div className="text Roboto_16pt_Regular_Gray">
                  Accumulated Carbon Redemption HRC20
                </div>
              </div>
              <div className="medium box">
                <div className="title">
                  $ {analytics.ERC.price ? analytics.ERC.price : 0}
                </div>
                <div className="text Roboto_16pt_Regular_Gray">
                  Current RCG Price ($) ERC20 Uniswap
                </div>
              </div>
              <div className="medium box">
                <div className="title">
                  $ {analytics.HRC.price ? analytics.HRC.price : 0}
                </div>
                <div className="text Roboto_16pt_Regular_Gray">
                  Current RCG Price ($) HRC20-Mdex
                </div>
              </div>
            </div>
            <div className="container">
              <div className="subCont">
                <div className="small box">
                  <div className="title">
                    {analytics.general.ServicesPlugged
                      ? analytics.general.ServicesPlugged
                      : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Number of Services Plugged
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.general.ChargersActivated
                      ? analytics.general.ChargersActivated
                      : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Number of Chargers Activated
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.general.ProposalsPosted
                      ? analytics.general.ProposalsPosted
                      : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Number of Proposals posted
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.general.ProposalsApproved
                      ? analytics.general.ProposalsApproved
                      : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Number of Proposals Approved
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.ERC.swapped ? analytics.ERC.swapped : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    RCG (ERC20) Swapped in
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.ERC.conversion ? analytics.ERC.conversion : 0}{" "}
                    RCG
                  </div>
                  <div className="text Roboto_14pt_Regular_Gray">
                    Accumulated Conversion Fee(ERC20)
                  </div>
                </div>
              </div>
              <div className="subCont">
                <div className="small box">
                  <div className="title">
                    {analytics.general.BridgesActivated
                      ? analytics.general.BridgesActivated
                      : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Number of Bridges Activated
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.general.RedemptionRate
                      ? analytics.general.RedemptionRate / 100
                      : 0}{" "}
                    %
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Current Redemption Rate
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.general.ProposalsRejected
                      ? analytics.general.ProposalsRejected
                      : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Number of Proposals Rejected
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.general.ProposalsPending
                      ? analytics.general.ProposalsPending
                      : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    Number of Proposals Pending
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.HRC.swapped ? analytics.HRC.swapped : 0}
                  </div>
                  <div className="text Roboto_16pt_Regular_Gray">
                    RCG (HRC20) Swapped in
                  </div>
                </div>
                <div className="small box">
                  <div className="title">
                    {analytics.HRC.conversion ? analytics.HRC.conversion : 0}{" "}
                    RCG
                  </div>
                  <div className="text Roboto_14pt_Regular_Gray">
                    Accumulated Conversion Fee(HRC20)
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="subTheme Roboto_30pt_Medium">
              Daily Carbon Redemption
            </div>
            <div className="graph">
              <img src="/sampleimg_graph.svg" />
            </div> */}
        </div>
      </Content>
      <ModalPool
        web3={web3}
        modalPoolOpen={modalPoolOpen}
        handleModalPool={handleModalPool}
        connectWallet={connectWallet}
        onDisconnect={onDisconnect}
        params={params}
        setParams={setParams}
        account={account}
        setSelCharger={setSelCharger}
        sel={sel}
      />
      <ModalSwap
        web3={web3}
        modalSwapOpen={modalSwapOpen}
        handleModalSwap={handleModalSwap}
        connectWallet={connectWallet}
        onDisconnect={onDisconnect}
        account={account}
        chainId={chainId}
        toast={toast}
        chargerList={chargerList}
        chargerInfoList={chargerInfoList}
      />
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
  margin: auto auto;
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  min-width: 1088px;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  margin: auto auto;
  margin-bottom: 20px;
  width: 1088px;

  height: fit-content; // 조정 필요

  color: var(--white);

  .first {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 1088px;

    .theme {
      margin: auto auto;
      margin-bottom: 80px;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }
    .contents {
      display: flex;
      margin: auto;
      width: 100%;

      .content {
        display: flex;
        flex-direction: column;
        margin: auto 10px;
        width: 534px;
        cursor: pointer;

        .box {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          align-items: center;
          padding: 40px 0;
          box-sizing: border-box;
          width: 534px;
          height: 229px;
          background-color: var(--black-30);
          box-shadow: 0 0 15px 0 var(--purple);
          border-radius: 8px;
          img {
            width: 68.4px;
            height: 80px;
          }
          .name {
            margin-top: 16px;
          }
        }
        .box:hover {
          background-color: var(--black-20);
        }
        .text {
          padding: 20px 20px 0 20px;
          text-align: center;
        }
      }
      .disable {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
  .second {
    display: flex;
    flex-direction: column;
    margin: auto;

    .theme {
      margin: auto auto;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }

    .contents {
      table {
        margin-top: 80px;
        background-color: none;
      }

      .tableRow:hover {
        width: 1052px;
        background-color: var(--black-20);
      }
      .content {
        margin: auto;
        margin-top: 40px;
        margin-bottom: 120px;
      }
      .walletConnect {
        display: flex;
        cursor: pointer;
        width: 366px;
        height: 40px;
        border: solid 2px var(--yellow);
        border-radius: 210px;
        p {
          margin: auto;
        }
      }
      .walletConnect:hover {
        background-color: var(--yellow);
      }
    }
  }
  .third {
    display: flex;
    flex-direction: column;
    margin: auto;

    .theme {
      margin: auto;
      margin-bottom: 40px;
      text-shadow: 0 0 1px white, 0 0 15px white;
    }
    .subTheme {
      margin: auto;
      margin-bottom: 80px;
    }
    .contents {
      display: grid;
      width: 100%;
      gap: 16px 0;
      margin-bottom: 120px;

      .container:nth-child(1) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 20px;

        .large {
          width: 534px;
          height: 148px;
          padding: 40px 0;
          box-sizing: border-box;

          .title {
            margin-bottom: 8px;
          }
        }
      }
      .container:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px 20px;

        .medium {
          width: 534px;
          height: 95px;

          .title {
            margin-bottom: 8px;
          }
        }
      }
      .container:nth-child(3) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px 20px;

        .subCont:nth-child(1) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 8px;
        }
        .subCont:nth-child(2) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 8px;
        }
        .small {
          width: 263px;
          height: 95px;

          .title {
            margin-bottom: 8px;
          }
        }
      }
      .box {
        background-color: var(--black-30);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .box:hover {
        background-color: var(--black-20);
      }
    }
  }
`;

const Line = styled.div`
  height: 2px;
  background-color: var(--purple);
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

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 7;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: rgba(0, 0, 0, 0.5);

  .box {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 255px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 20px;

    .text {
      margin: auto;
      margin-bottom: 67.6px;
    }
  }
`;

export default withTranslation()(Defi);
