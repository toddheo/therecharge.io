import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useTable, useSortBy, useRowSelect } from "react-table";
import { ToastHub, Toast } from "@aragon/ui";
import axios from "axios";
import { fromWei, toWei, toBN } from "web3-utils";
import { RotateCircleLoading } from "react-loadingg";
import Table from "../../../lib/Table";
// import CountUp from "react-countup";
import { useRecoilState } from "recoil";
import { poolInfoState, selState, periodState } from "../../../store/pool";
const ERC20_ABI = require("./abis/ERC20ABI.json");
const POOL_ABI = require("./abis/poolABI.json");

function makeNum(str, decimal = 4) {
  let newStr = str;
  if (typeof newStr === "number") newStr = str.toString();
  let arr = newStr.split(".");
  if (arr.length == 1 || arr[0].length > 8) return arr[0];
  else {
    return arr[0] + "." + arr[1].substr(0, decimal);
  }
}
const loadPoolPeriod = (startTime, duration) => {
  let ret = "21.01.01 00:00:00 ~ 21.01.30 00:00:00(GMT)";

  const endTime = Number(startTime) + Number(duration);

  const formatter = (timestamp) => {
    var d = new Date(Number(timestamp) * 1000);
    const z = (x) => {
      return x.toString().padStart(2, "0");
    };
    return `${new String(d.getFullYear()).substr(2, 3)}.${z(
      d.getMonth() + 1
    )}.${z(d.getDate())} ${z(d.getHours())}:${z(d.getMinutes())}:${z(
      d.getSeconds()
    )}`;
  };

  ret = `${formatter(startTime)} ~ ${formatter(endTime)}`;

  return ret;
};

function Pool({
  web3,
  connectWallet,
  onDisconnect,
  handleModal2,
  params,
  setParams,
  account,
}) {
  const [onLoading, setOnLoading] = useState(false);
  const [plAmount, setPlAmount] = useState("");
  const [sel, setSelCharger] = useState(0);
  const [chList, setChList] = useState([
    {
      address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
      name: "Now Loading",
      apy: "000",
    },
    {
      address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
      name: "",
      apy: "",
    },
  ]);
  const [selChList, setSelChList] = useState([
    {
      address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
      name: "Now Loading",
      apy: "000",
    },
    {
      address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
      name: "",
      apy: "",
    },
  ]);
  const [poolInfo, setPoolInfo] = useRecoilState(poolInfoState);
  const [period, setPeriod] = useRecoilState(periodState);
  const [userInfo, setUserInfo] = useState({
    address: "0x4025238b28b796902F1C39081b17123817679742",
    balance: "0",
    reward: "0",
    allowance: "0",
    share: 0,
  });
  const [poolMethods, setPoolMethods] = useState({
    available: 0,
    approve: () => {
      return;
    },
    stake: () => {
      return;
    },
    earn: () => {
      return;
    },
    exit: () => {
      return;
    },
  });

  const weiToEther = (wei) => {
    return fromWei(wei, "ether");
  };

  const loadChargerList = async () => {
    try {
      let { data } = await axios.get(
        `https://bridge.therecharge.io/charger/list/type/${params.type.toLowerCase()}`
      );
      let temp = data.map((d) => {
        return {
          ...d,
          name: `${d.name.substring(0, 15)} ...`,
          apy: d.apy > 1000 ? "999+" : `${d.apy.toFixed(4)}`,
        };
      });
      let temp2 = data.map((d) => {
        return {
          ...d,
          name: d.name,
          // d.apy > 1000 ? "999+" : `${d.apy.toFixed(4)}`,
        };
      });
      setChList(temp);
      setSelChList(temp2);
    } catch (err) {
      console.log(err);
    }
  };

  const loadPoolInfo = async () => {
    let ret = {};
    try {
      let { data } = await axios.get(
        `https://bridge.therecharge.io/charger/info/${chList[sel].address}`
      );
      let tempTime = loadPoolPeriod(data.period[0], data.period[1]);
      setPoolInfo(data);
      setPeriod(tempTime);
      ret = data;
    } catch (err) {
      console.log(err);
    }
    return ret;
  };

  const loadUserInfo = async () => {
    let ret = {
      address: "0x4025238b28b796902F1C39081b17123817679742",
      balance: "0",
      reward: "0",
      allowance: "0",
      share: 0,
    };
    if (account) {
      try {
        let { data } = await axios.get(
          `https://bridge.therecharge.io/charger/info/${chList[sel].address}/${account}`
        );
        setUserInfo(data.account);
        ret = data.account;
      } catch (err) {
        console.log(err);
      }
    }
    return ret;
  };

  const loadMethods = async (
    stakeTokenAddress,
    rewardTokenAddress,
    chargerAddress
  ) => {
    let ret = {};
    const stakeI = new web3.eth.Contract(ERC20_ABI, stakeTokenAddress);
    const stakeM = stakeI.methods;
    const rewardI = new web3.eth.Contract(ERC20_ABI, rewardTokenAddress);
    const rewardM = rewardI.methods;
    const poolI = new web3.eth.Contract(POOL_ABI, chargerAddress);
    const poolM = poolI.methods;

    // const [balance] = await stakeM.balanceOf(account).call();
    let balance = await stakeM.balanceOf(account).call();
    const approve = (tokenM, to, amount, account) => {
      if (typeof amount != "string") amount = String(amount);
      tokenM.approve(to, toWei(amount, "ether")).send({ from: account });
    };
    const stake = (poolM, amount, account) => {
      if (typeof amount != "string") amount = String(amount);
      poolM.stake(toWei(amount, "ether")).send({ from: account });
    };
    const earn = (poolM, account) => {
      poolM.getReward().send({ from: account });
    };
    const exit = (poolM, account) => {
      poolM.exit().send({ from: account });
    };
    // fromWei(balance, "ether")
    ret = {
      available: fromWei(balance, "ether"),
      approve: async () =>
        await approve(stakeM, chargerAddress, "999999999", account),
      stake: async (amount) =>
        userInfo.allowance > 0
          ? await stake(poolM, amount, account)
          : await approve(stakeM, chargerAddress, "999999999", account),
      earn: async () => await earn(poolM, account),
      exit: async () => await exit(poolM, account),
    };

    setPoolMethods(ret);
    return ret;
  };

  const SetPercent = (x) => {
    setPlAmount((poolMethods.available / 100) * x);
  };

  const color = (number, i) => {
    if (typeof number === "undefined") return "var(--gray-20)";
    //i가 홀수인 경우
    if (i % 2 === 1) {
      if (number === "-") return "var(--gray-20)";
      if (number === "999+") return "var(--green)";
      number = Number(number.replace(",", ""));
      let color = "var(--gray-20)";
      if (number > 50) color = "var(--green)";
      else if (number > 20) color = "var(--yellow)";
      else if (number >= 0) color = "var(--red)";

      return color;
    }
    //i가 짝수인 경우
    else {
      if (number === "-") return "var(--gray-20)";
      return "var(--white)";
    }
  };
  const data = React.useMemo(() => chList, [chList]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Charger",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "APY",
        accessor: "apy",
        id: "apy",
      },
    ],
    []
  );
  const initialState = {
    sortBy: [
      {
        id: "apy",
        desc: true,
      },
    ],
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data /*initialState*/ }, useSortBy);

  useEffect(() => {
    loadChargerList();
    loadPoolInfo();
  }, [params]);

  useEffect(() => {
    if (!account) return;
    loadUserInfo();
    loadMethods(poolInfo.token[0], poolInfo.token[1], chList[sel].address);
  }, [account]);

  useEffect(async () => {
    setOnLoading(true);
    if (account) {
      await Promise.all([
        loadPoolInfo(),
        loadUserInfo(),
        loadMethods(poolInfo.token[0], poolInfo.token[1], chList[sel].address),
      ]);
    } else {
      await Promise.all([loadPoolInfo()]);
    }
    setOnLoading(false);
  }, [sel]);

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

  const updateChargerInfoList = () => {
    loadChargerList();
    loadPoolInfo();
    if (account) {
      loadUserInfo();
      loadMethods(poolInfo.token[0], poolInfo.token[1], chList[sel].address);
    }
  };

  useInterval(() => updateChargerInfoList(), 5000);

  return (
    <Container>
      <img
        className="back"
        src="/ic_back@3x.png"
        style={{ width: "79px", height: "30px" }}
        onClick={() => {
          handleModal2();
          // setParams({
          //   type: "",
          //   isLP: false,
          // });
          // setSelCharger(0);
        }}
      />
      <div className="title">
        <img
          src={
            "/ic_" +
            (params.type == "Flexible" ? "flexible" : "locked") +
            "staking" +
            (params.isLP ? "_lp" : "") +
            ".svg"
          }
          style={{ width: "79.2px", height: "80px", marginTop: "80px" }}
        />
        <div className="theme Roboto_50pt_Black">
          {(params.isLP ? "LP " : "") +
            (params.type == "Flexible" ? "Flexible" : "Locked") +
            " Staking"}
        </div>
      </div>
      <div className="tools">
        <div className="selected Roboto_20pt_Regular">
          {selChList[sel].name}
        </div>
        <div className="wallet">
          <ToastHub>
            <Toast>
              {(toast) => (
                <div
                  className="walletConnect Roboto_20pt_Regular"
                  onClick={
                    account
                      ? async () => {
                          await onDisconnect();
                          // await toast("코인 지갑의 연결이 해제되었어요.");
                        }
                      : async () => {
                          await connectWallet();
                          // await toast("코인 지갑이 연결되었어요.");
                        }
                  }
                >
                  <p>
                    {account
                      ? account.substring(0, 8) +
                        "..." +
                        account.substring(36, 42)
                      : "Wallet Connect"}
                  </p>
                </div>
              )}
            </Toast>
          </ToastHub>
        </div>
      </div>
      <div className="data">
        <div className="list">
          <div className="title2 Roboto_30pt_Black">Charger List</div>
          <div className="table">
            <table
              {...getTableProps()}
              style={{ width: "216px", borderCollapse: "collapse" }}
              className="Roboto_20pt_Medium_Gray"
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
                          paddingBottom: "16px",
                          borderBottom: "solid 1px #ffffff",
                          textAlign: "left",
                          color: "var(--gray-20)",
                          cursor: "pointer",
                        }}
                      >
                        {column.render("Header")}
                        <span style={{ color: "white", fontSize: "16px" }}>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " ▼"
                              : " ▲"
                            : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, sel) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      onClick={() => {
                        setSelCharger(row.index);
                      }}
                      className="tableRow"
                    >
                      {row.cells.map((cell, i) => {
                        const nextCell = row.cells[i + 1];
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              paddingTop: "16px",
                              marginBottom: "20px",
                              textAlign: "left",
                              cursor: "pointer",
                              color:
                                i % 2
                                  ? color(cell.value, i) // "100%", 0
                                  : color(nextCell.value, i), // "100%", 1
                            }}
                          >
                            {i % 2 ? makeNum(cell.value) : cell.value}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <Table data={chList} /> */}
          </div>
        </div>
        <div className="total">
          <div className="logo">
            <img
              src={
                poolInfo.period[0] + poolInfo.period[1] >=
                new Date().getTime() / 1000
                  ? !poolInfo.limit || poolInfo.limit > poolInfo.tvl
                    ? "/ic_logo_defi_active.svg"
                    : "/ic_logo_defi_close.svg"
                  : "/ic_logo_defi_inactive.svg"
              }
              style={{ width: "40px", height: "40.7px" }}
            />
            <div
              className="sign Roboto_20pt_Black_L"
              style={
                poolInfo.period[0] + poolInfo.period[1] >=
                new Date().getTime() / 1000
                  ? !poolInfo.limit || poolInfo.limit > poolInfo.tvl
                    ? { color: "#0eef6d" }
                    : { color: "#d62828" }
                  : { color: "#7e7e7e" }
              }
            >
              {poolInfo.period[0] + poolInfo.period[1] >=
              new Date().getTime() / 1000
                ? !poolInfo.limit || poolInfo.limit > poolInfo.tvl
                  ? "Active"
                  : "Close"
                : "Inactive"}
            </div>
          </div>
          <div className="info">
            <div className="detail">
              <div className="left Roboto_20pt_Light">APY</div>
              <div className="right Roboto_20pt_Black_L">
                {makeNum(poolInfo.apy)} %
              </div>
            </div>
            <div className="detail">
              <div className="left Roboto_20pt_Light">TVL</div>
              <div className="right Roboto_20pt_Black_L">
                {makeNum(poolInfo.tvl) + " " + poolInfo.symbol[0]}
              </div>
            </div>
            <div className="detail">
              <div className="left Roboto_20pt_Light">LIMIT</div>
              <div className="right Roboto_20pt_Black_L">
                {poolInfo.limit ? poolInfo.limit.substr(0, 8) : "UNLIMITED"}
              </div>
            </div>
          </div>
        </div>
        <div className="my">
          <div className="info">
            <div className="left Roboto_20pt_Light">
              <div className="detail">MY BAL</div>
              <div className="detail">Share</div>
              <div className="detail">Reward</div>
            </div>
            <div className="right Roboto_20pt_Black_L">
              <div className="detail">{`${Number(
                weiToEther(userInfo.balance)
              ).toFixed(4)} ${poolInfo.symbol[0]}`}</div>
              <div className="detail">
                {userInfo.share.toFixed(4).toString().substr(0, 8)}%
              </div>
              <div className="detail">
                {`${makeNum(weiToEther(userInfo.reward), 6)} ${
                  poolInfo.symbol[1]
                }`}
              </div>
            </div>
          </div>
        </div>
        <div className="app">
          <div className="contents">
            <div className="period">
              <div className="left Roboto_30pt_Black_R">PERIOD</div>
              <div className="right Roboto_20pt_Black">{period}</div>
            </div>
            <div className="staking">
              <div className="left Roboto_30pt_Black_R">STAKING</div>
              <div className="right Roboto_20pt_Regular">
                Available:{" "}
                {`${makeNum((poolMethods.available - plAmount).toString())} ${
                  poolInfo.symbol[0]
                }`}
              </div>
            </div>
            <div className="inputBox">
              <input
                type="text"
                className="amountStake Roboto_30pt_Black_R"
                value={plAmount}
                onChange={(e) => {
                  if (poolMethods.available - e.target.value >= 0)
                    return setPlAmount(e.target.value);
                  setPlAmount(poolMethods.available);
                }}
                placeholder="Enter the amount of stake"
              />
            </div>
            <div className="caution Roboto_16pt_Medium">
              Caution!: Recharge transaction, regardless of mainnet type, will
              incur {poolInfo.redemtion / 100}% of carbon redemption.
            </div>
            <PercentBtns className="Roboto_20pt_Regular">
              <div
                onClick={() => {
                  SetPercent(25);
                }}
              >
                <span>25%</span>
              </div>
              <div
                onClick={() => {
                  SetPercent(50);
                }}
              >
                <span>50%</span>
              </div>
              <div
                onClick={() => {
                  SetPercent(75);
                }}
              >
                <span>75%</span>
              </div>
              <div
                onClick={() => {
                  SetPercent(100);
                }}
              >
                <span>MAX</span>
              </div>
            </PercentBtns>
            {params.type == "Flexible" ? (
              <div className="buttons">
                <ToastHub>
                  <Toast>
                    {(toast) => (
                      <FlxBtns
                        onClick={async () => {
                          //if out of period => inactive
                          if (
                            poolInfo.period[0] > new Date().getTime() / 1000 ||
                            poolInfo.period[0] + poolInfo.period[1] <
                              new Date().getTime() / 1000
                          ) {
                            toast("This pool is inactive");
                          }
                          //if in period => active || close
                          else {
                            // if active
                            if (
                              !poolInfo.limit ||
                              poolInfo.limit > poolInfo.tvl
                            ) {
                              if (userInfo.allowance == "0") {
                                await poolMethods.approve();
                              } else {
                                if (plAmount) {
                                  await poolMethods.stake(plAmount);
                                  await toast(
                                    userInfo.allowance > 0
                                      ? 'Please approve "PLUG-IN" in your private wallet'
                                      : 'Please approve "Transfer Limit" in your private wallet'
                                  );
                                } else
                                  toast("Please enter the amount of Staking");
                              }
                            }
                            //if close
                            else {
                              toast("This pool is closed");
                            }
                          }
                        }}
                        className={
                          account
                            ? "Roboto_30pt_Black"
                            : "disable Roboto_30pt_Black"
                        }
                        style={
                          poolInfo.period[0] > new Date().getTime() / 1000 ||
                          poolInfo.period[0] + poolInfo.period[1] <
                            new Date().getTime() / 1000
                            ? {
                                backgroundColor: "var(--gray-30)",
                                color: "var(--gray-20)",
                                cursor: "not-allowed",
                              }
                            : !poolInfo.limit || poolInfo.limit > poolInfo.tvl
                            ? {
                                backgroundColor: "var(--purple)",
                                cursor: "pointer",
                              }
                            : {
                                backgroundColor: "var(--gray-30)",
                                color: "var(--gray-20)",
                                cursor: "not-allowed",
                              }
                        }
                      >
                        <div>
                          <span>
                            {userInfo.allowance > 0 ? "PLUG-IN" : "APPROVE"}
                          </span>
                        </div>
                      </FlxBtns>
                    )}
                  </Toast>
                </ToastHub>
                <ToastHub>
                  <Toast>
                    {(toast) => (
                      <RewardBtn
                        onClick={async () => {
                          //if out of period => inactive
                          if (
                            poolInfo.period[0] > new Date().getTime() / 1000 ||
                            poolInfo.period[0] + poolInfo.period[1] <
                              new Date().getTime() / 1000
                          ) {
                            toast("This pool is inactive");
                          }
                          //if in period => active || close
                          else {
                            await poolMethods.earn();
                            await toast(
                              'Please approve "GET FILLED" in your private wallet'
                            );
                          }
                        }}
                        className={
                          account
                            ? "Roboto_30pt_Black"
                            : "disable Roboto_30pt_Black"
                        }
                        style={
                          poolInfo.period[0] > new Date().getTime() / 1000 ||
                          poolInfo.period[0] + poolInfo.period[1] <
                            new Date().getTime() / 1000
                            ? {
                                backgroundColor: "var(--gray-30)",
                                color: "var(--gray-20)",
                                cursor: "not-allowed",
                              }
                            : {
                                backgroundColor: "var(--yellow)",
                                cursor: "pointer",
                              }
                        }
                      >
                        <span
                        // onClick={GetReward}
                        // className={plLocked > 0 && account ? "" : "disable"}
                        >
                          GET FILLED
                        </span>
                      </RewardBtn>
                    )}
                  </Toast>
                </ToastHub>
                <ToastHub>
                  <Toast>
                    {(toast) => (
                      <ExitBtn
                        onClick={async () => {
                          //if user Balance > 0
                          if (userInfo.balance > 0) {
                            await poolMethods.exit();
                            await toast(
                              'Please approve "UNPLUG" in your private wallet'
                            );
                          }
                          //if user Balance <= 0
                          else {
                            toast("There is no withdrawable amount");
                          }
                        }}
                        className={
                          account
                            ? "Roboto_30pt_Black"
                            : "disable Roboto_30pt_Black"
                        }
                        style={
                          userInfo.balance > 0
                            ? {
                                backgroundColor: "var(--gray-20)",
                                cursor: "pointer",
                              }
                            : {
                                backgroundColor: "var(--gray-30)",
                                color: "var(--gray-20)",
                                cursor: "not-allowed",
                              }
                        }
                      >
                        <span>UNPLUG</span>
                      </ExitBtn>
                    )}
                  </Toast>
                </ToastHub>
              </div>
            ) : (
              <div className="buttons">
                <ToastHub>
                  <Toast>
                    {(toast) => (
                      <TwoBtns
                        onClick={async () => {
                          //if out of period => inactive
                          if (
                            poolInfo.period[0] > new Date().getTime() / 1000 ||
                            poolInfo.period[0] + poolInfo.period[1] <
                              new Date().getTime() / 1000
                          ) {
                            toast("This pool is inactive");
                          }
                          //if in period => active || close
                          else {
                            // if active
                            if (
                              !poolInfo.limit ||
                              poolInfo.limit > poolInfo.tvl
                            ) {
                              if (userInfo.allowance == "0") {
                                await poolMethods.approve();
                              } else {
                                if (plAmount) {
                                  await poolMethods.stake(plAmount);
                                  await toast(
                                    userInfo.allowance != "0"
                                      ? 'Please approve "PLUG-IN" in your private wallet'
                                      : 'Please approve "Transfer Limit" in your private wallet'
                                  );
                                } else
                                  toast("Please enter the amount of Staking");
                              }
                            }
                            //if close
                            else {
                              toast("This pool is closed");
                            }
                          }
                        }}
                        className={
                          account
                            ? "Roboto_30pt_Black"
                            : "disable Roboto_30pt_Black"
                        }
                        style={
                          (poolInfo.period[0] > new Date().getTime() / 1000) |
                          (poolInfo.period[0] + poolInfo.period[1] <
                            new Date().getTime() / 1000)
                            ? {
                                backgroundColor: "var(--gray-30)",
                                color: "var(--gray-20)",
                                cursor: "not-allowed",
                              }
                            : !poolInfo.limit || poolInfo.limit > poolInfo.tvl
                            ? {
                                backgroundColor: "var(--purple)",
                                cursor: "pointer",
                              }
                            : {
                                backgroundColor: "var(--gray-30)",
                                color: "var(--gray-20)",
                                cursor: "not-allowed",
                              }
                        }
                      >
                        <div>
                          <span>
                            {userInfo.allowance !== "0" ? "PLUG-IN" : "APPROVE"}
                          </span>
                        </div>
                      </TwoBtns>
                    )}
                  </Toast>
                </ToastHub>
                <ToastHub>
                  <Toast>
                    {(toast) => (
                      <StakeBtn
                        onClick={async () => {
                          //if out of period
                          if (
                            poolInfo.period[0] + poolInfo.period[1] <
                            new Date().getTime() / 1000
                          ) {
                            if (userInfo.balance > 0) {
                              await poolMethods.exit();
                              await toast(
                                'Please approve "UNPLUG" in your private wallet'
                              );
                            } else {
                              toast("There is no withdrawable amount");
                            }
                          }
                          //if in period
                          else {
                            toast(
                              "Withdrawal is possible after the end of the period"
                            );
                          }
                        }}
                        className={
                          account
                            ? "Roboto_30pt_Black"
                            : "disable Roboto_30pt_Black"
                        }
                        style={
                          poolInfo.period[0] + poolInfo.period[1] <
                            new Date().getTime() / 1000 && userInfo.balance > 0
                            ? {
                                backgroundColor: "var(--gray-20)",
                                cursor: "pointer",
                              }
                            : {
                                backgroundColor: "var(--gray-30)",
                                color: "var(--gray-20)",
                                cursor: "not-allowed",
                              }
                        }
                      >
                        <span>UNPLUG</span>
                      </StakeBtn>
                    )}
                  </Toast>
                </ToastHub>
              </div>
            )}
            <div className="info">
              <div className="left Roboto_20pt_Light">
                <div className="detail">Current Redemption Rate</div>
                <div className="detail">{poolInfo.symbol[0]} to Stake</div>
                <div className="detail">{poolInfo.symbol[0]} to Redeem</div>
                <div className="detail">Net {poolInfo.symbol[0]} to Stake</div>
              </div>
              <div className="right Roboto_20pt_Black">
                <div className="detail">
                  {Number(poolInfo.redemtion / 100)
                    .toFixed(2)
                    .toString()}
                  %
                </div>
                <div className="detail">
                  {plAmount} {poolInfo.symbol[0]}
                </div>
                <div className="detail">
                  {makeNum(
                    ((plAmount / 100) * (poolInfo.redemtion / 100)).toString()
                  )}{" "}
                  {poolInfo.symbol[0]}
                </div>
                <div className="detail">
                  {makeNum(
                    (
                      plAmount -
                      ((plAmount / 100) * poolInfo.redemtion) / 100
                    ).toString()
                  )}{" "}
                  {poolInfo.symbol[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loading style={{ display: onLoading ? "" : "none" }}>
        <div className="box">
          <RotateCircleLoading
            color="#9314b2"
            style={{ margin: "auto", marginTop: "67.6px" }}
          />
          <div className="text Roboto_30pt_Black">Loading…</div>
        </div>
      </Loading>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  position: relative;
  z-index: 1;

  .back {
    position: absolute;
    top: 186px;
    left: 0px;
    cursor: pointer;
  }
  .title {
    display: flex;
    flex-direction: column;
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
  }
  .theme {
    margin-top: 8px;
    color: #ffffff;
  }

  .tools {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .selected {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 296px;
      height: 40px;
    }

    .wallet {
      margin-right: 15px;
      .walletConnect {
        display: flex;

        cursor: pointer;
        width: 366px;
        height: 40px;
        border: solid 2px var(--yellow);
        border-radius: 210px;
        color: #ffffff;
        p {
          margin: auto;
        }
      }
      .walletConnect:hover {
        background-color: var(--yellow);
      }
    }
  }

  .data {
    display: grid;
    grid-template-columns: 296px 386px 366px;
    grid-template-rows: 198px 740px;
    grid-template-areas:
      "list total my"
      "list app app";
    gap: 20px;

    .list {
      grid-area: list;
      display: flex;
      flex-direction: column;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: var(--black-30);

      .title2 {
        margin-top: 0;
        margin-bottom: 16px;
        color: #ffffff;
      }
      .table {
        margin: auto;
        margin-top: 0;
        text-align: left;

        .tableRow:hover {
          background-color: var(--black-20);
        }
      }
    }
    .total {
      grid-area: total;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: var(--black-30);
      display: flex;

      .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 0;
        width: fit-content;
        .sign {
          margin-top: 16px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;

        .detail {
          display: flex;
          margin-left: 30px;
          margin-bottom: 20px;

          .left {
            width: 50px;
            color: #ffffff;
          }
          .right {
            margin-left: 16px;
            color: #ffffff;
          }
        }
      }
    }
    .my {
      grid-area: my;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: var(--black-30);

      .info {
        display: flex;

        .detail {
          display: flex;
          margin-bottom: 20px;
        }
        .right {
          margin-left: 16px;
          color: #ffffff;
        }
      }
    }
    .app {
      grid-area: app;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: var(--black-30);

      .contents {
        display: flex;
        flex-direction: column;

        .period {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 40px;
          margin-bottom: 40px;
        }
        .staking {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin: 0 40px;
          margin-bottom: 8px;
        }
        .inputBox {
          .amountStake {
            width: 692px;
            height: 79px;
            padding: 20px 40px;
            box-sizing: border-box;
            background-color: var(--black-10);
            border: 1px hidden;
            border-radius: 20px;
            text-align: right;
          }
        }
        .caution {
          margin: 16px 0;
          text-align: right;
          color: #d62828;
        }
        .buttons {
          display: flex;
          margin-top: 40px;
          margin-bottom: 20px;
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-right: 40px;

          .detail {
            height: 26px;
            margin-bottom: 8px;
            line-height: 1;
          }
          .left {
            text-align: left;
          }
          .right {
            margin-left: 20px;
            text-align: right;
          }
        }
      }
    }
    .disable {
      cursor: not-allowed;
      // opacity: 0.5;
    }
  }
`;

const PercentBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  div {
    display: flex;
    margin: 0 auto;
    margin-left 8px;
    margin-right: 0px;
    width: 70px;
    height: 35px;
    border-radius: 10px;
    border: solid 1px #ffffff;
    text-align: center;
    color: #ffffff;

    span {
      margin: auto;
    }
  }

  div:hover {
    background-color: #ffffff;
    color: var(--black-30);
  }
`;

const TwoBtns = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 20px;
  width: 336px;
  height: 139px;
  border-radius: 20px;
  background-color: var(--purple);

  div {
    margin: auto;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
`;

const FlxBtns = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 20px;
  width: 217px;
  height: 139px;
  border-radius: 20px;
  background-color: var(--purple);

  div {
    margin: auto;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
`;

const StakeBtn = styled.div`
  display: flex;
  cursor: pointer;
  width: 336px;
  height: 139px;
  border-radius: 20px;
  background-color: var(--gray-20);

  span {
    margin: auto;
    // color: #ffffff;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
`;

const RewardBtn = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 20px;
  width: 217px;
  height: 139px;
  border-radius: 20px;
  background-color: var(--yellow);

  span {
    margin: auto;
    // color: #ffffff;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
`;

const ExitBtn = styled.div`
  display: flex;
  cursor: pointer;
  width: 217px;
  height: 139px;
  border-radius: 20px;
  background-color: var(--gray-20);

  span {
    margin: auto;
    // color: #ffffff;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
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

export default Pool;
// export default React.memo(Pool, PoolPropsAreChanged);
