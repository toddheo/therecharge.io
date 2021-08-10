/* Libraries */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import Web3 from "web3";
import { fromWei, toWei } from "web3-utils";
import { useRecoilState } from "recoil";
import { modalSwapOpenState } from "../../../store/modal.js";
const ERC20_ABI = require("./abis/ERC20ABI.json");

function makeNum(str, decimal = 4) {
  let newStr = str;
  if (typeof newStr === "number") newStr = str.toString();
  let arr = newStr.split(".");
  if (arr.length == 1 || arr[0].length > 8) return arr[0];
  else {
    return arr[0] + "." + arr[1].substr(0, decimal);
  }
}
const weiToEther = (wei) => {
  return fromWei(wei, "ether");
};

function ModalSwap({
  web3,
  connectWallet,
  onDisconnect,
  account,
  chainId,
  toast,
  t,
  redemption
}) {
  const [modalSwapOpen, setModalSwapOpen] = useRecoilState(modalSwapOpenState);
  const [recipe, setRecipe] = useState({
    from: "Ethereum",
    to: "Huobi ECO Chain",
    swapAmount: "",
    // use for network logo image of loadSwitchBox according to 'from' or 'to'
    networkList: {
      // "Binance Smart Chain": "bnb",
      Ethereum: "eth",
      "Huobi ECO Chain": "hrc",
      PiggyCell: "piggy",
    },
  });
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [rollState1, setRollState1] = useState(false);
  const [rollState2, setRollState2] = useState(false);
  const [selAsset, setSelAsset] = useState({
    logo: "rcg",
    name: "Recharge",
    symbol: "RCG",
    chainId: {
      Ethereum: 1,
      "Huobi ECO Chain": 128,
    },
    tokenAddress: {
      1: "0xe74be071f3b62f6a4ac23ca68e5e2a39797a3c30",
      128: "0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b",
    },
    conversionFee: {
      1: 0.5,
      128: 5,
    },
  });
  const assetsInfo = {
    RCG: {
      logo: "rcg",
      name: "Recharge",
      symbol: "RCG",
      chainId: {
        Ethereum: 1,
        "Huobi ECO Chain": 128,
      },
      tokenAddress: {
        1: "0xe74be071f3b62f6a4ac23ca68e5e2a39797a3c30",
        128: "0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b",
      },
      conversionFee: {
        1: 0.5,
        128: 5,
      },
    },
    ETH: {
      logo: "eth",
      name: "Ethereum",
      symbol: "ETH",
    },
    HT: {
      logo: "ht",
      name: "Huobi ECO Chain",
      symbol: "HT",
    },
    BNB: {
      logo: "bnb",
      name: "Binance Smart Chain Network",
      symbol: "BNB",
    },
    FUP: {
      logo: "piggy",
      name: "Frequent Use Point",
      symbol: "FUP",
      chainId: {
        Ethereum: 1,
        "Huobi ECO Chain": 128,
      },
      tokenAddress: {
        1: "0x",
        128: "0x",
      },
      conversionFee: {
        1: 0.5,
        128: 5,
      },
    },
  };

  const assetList = ["RCG", "FUP"];
  const myAssetList = ["ERC RCG", "HRC RCG", "BEP RCG", "ETH", "HT", "BNB", "FUP"];
  const networkList = ["Ethereum", "Huobi ECO Chain"];
  const [tokensBalance, setTokensBalance] = useState({
    "ERC RCG": 0,
    "HRC RCG": 0,
    "BEP RCG": 0,
    ETH: 0,
    HT: 0,
    BNB: 0,
    FUP: 0,
  });
  const [poolMethods, setPoolMethods] = useState({
    redemption: 2,
    available: 0,
    allowance: 0,
    approve: () => {
      return;
    },
    swap: () => {
      return;
    },
  });

  const handleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };
  const handleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const SetPercent = (x) => {
    setRecipe({
      ...recipe,
      swapAmount: makeNum((poolMethods.available / 100) * x),
    });
  };

  function loadAsset(assetList, assetsInfo) {
    return (
      <>
        {assetList.map((asset) => {
          return (
            <div
              className="content"
              onClick={() => {
                setSelAsset(assetsInfo[asset]);
              }}
            >
              <div className="logo">
                <img
                  src={"/swap_" + `${assetsInfo[asset].logo}` + ".svg"}
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="name Roboto_30pt_Medium">
                  {assetsInfo[asset].name}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function loadMyAsset(tokensList, tokensInfo, tokensBalance) {
    return (
      <>
        {tokensList.map((token) => {
          let rcg;
          if (token === "ERC RCG" || token === "HRC RCG" || token === "BEP RCG") rcg = "RCG";
          return (
            <div className="balance">
              <div className="logo">
                <span className="rapper">
                  <img
                    src={"/swap_" + (rcg ? tokensInfo[rcg].logo : tokensInfo[token].logo) + ".svg"}
                    style={{ width: "50px", height: "50px" }}
                  />
                  {(rcg
                    ? <img
                      className="chain"
                      src={"/swap_" +
                        (token === "ERC RCG"
                          ? "eth"
                          : token === "HRC RCG"
                            ? "hrc"
                            : token === "BEP RCG"
                              ? "bnb" : "")
                        + ".svg"}
                      style={{ width: "15px", height: "15px" }}
                    />
                    : "")}
                </span>
                <div className="symbol Roboto_30pt_Medium">
                  {(token === "ERC RCG" ||
                    token === "HRC RCG" ||
                    token === "BEP RCG")
                    ? rcg
                    : token}
                </div>
              </div>
              <div className="amount Roboto_30pt_Light">
                {tokensBalance[token]}
              </div>
            </div>
          );
        })}
      </>
    );
  }
  function loadSwitchBox(recipe, direction, netList) {
    return (
      <div className={direction}>
        <div className="theme Roboto_40pt_Black_L">
          {direction.toUpperCase()}
        </div>
        <div
          className="box"
          style={
            selAsset.logo === "piggy"
              ? {}
              : (direction == "from" ? dropdownOpen1 : dropdownOpen2)
                ? {
                  borderRadius: "20px 20px 0 0",
                  boxShadow: "0 0 15px 0 var(--purple)",
                }
                : {}
          }
        >
          <div
            className="default"
            style={
              selAsset.logo === "piggy"
                ? {}
                : (direction == "from" ? dropdownOpen1 : dropdownOpen2)
                  ? {}
                  : {}
            }
            onMouseOver={() => {
              direction == "from" ? setRollState1(true) : setRollState2(true);
            }}
            onMouseOut={() => {
              direction == "from" ? setRollState1(false) : setRollState2(false);
            }}
            onClick={() =>
              direction == "from" ? handleDropdown1() : handleDropdown2()
            }
          >
            <div className="network">
              <div className="logo">
                <img
                  src={
                    "/swap_" +
                    `${recipe.networkList[
                    direction == "from"
                      ? selAsset.logo === "piggy"
                        ? "PiggyCell"
                        : recipe.from
                      : selAsset.logo === "piggy"
                        ? "Huobi ECO Chain"
                        : recipe.to
                    ]
                    }` +
                    ".svg"
                  }
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div className="name">
                <div className="Roboto_30pt_Bold">
                  {direction == "from"
                    ? selAsset.logo === "piggy"
                      ? "PiggyCell"
                      : recipe.from
                    : selAsset.logo === "piggy"
                      ? "Huobi ECO Chain"
                      : recipe.to}
                </div>
                <div className="Roboto_30pt_Bold">
                  {direction == "from" && selAsset.logo === "piggy"
                    ? "Point"
                    : "Network"}
                </div>
              </div>
            </div>
            <div className="bar"></div>
            <div className="dropdown">
              <img
                src={
                  (direction == "from" ? dropdownOpen1 : dropdownOpen2)
                    ? "/ic_swap_rollup.svg"
                    : (direction == "from" ? rollState1 : rollState2)
                      ? "/ic_swap_rolldown_mouseover.svg"
                      : "/swap_dropdown.svg"
                }
                style={{ width: "16px", height: "9px" }}
              />
            </div>
            <div
              className={
                selAsset.logo === "piggy"
                  ? ""
                  : (direction == "from" ? dropdownOpen1 : dropdownOpen2)
                    ? "test"
                    : "inactive"
              }
            ></div>
            <div
              className={
                (direction == "from" ? dropdownOpen1 : dropdownOpen2)
                  ? "dropdownContents"
                  : "inactive"
              }
            >
              {selAsset.logo === "piggy"
                ? ""
                : netList.map((chain, index) => {
                  return (
                    <div
                      className="dropdownContent"
                      onClick={() => {
                        direction === "from"
                          ? netList[index] === recipe.to
                            ? setRecipe({
                              ...recipe,
                              from: recipe.to,
                              to: recipe.from,
                              swapAmount: "",
                            })
                            : setRecipe({
                              ...recipe,
                            })
                          : netList[index] == recipe.from
                            ? setRecipe({
                              ...recipe,
                              from: recipe.to,
                              to: recipe.from,
                              swapAmount: "",
                            })
                            : setRecipe({
                              ...recipe,
                            });
                        direction == "from"
                          ? handleDropdown1()
                          : handleDropdown2();
                      }}
                    >
                      <div className="logo">
                        <img
                          src={
                            "/swap_" + `${recipe.networkList[chain]}` + ".svg"
                          }
                          style={{ width: "80px", height: "80px" }}
                        />
                      </div>
                      <div className="name">
                        <div className="Roboto_30pt_Bold">{chain}</div>
                        <div className="Roboto_30pt_Bold">Network</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  const loadMethods = async (
    swapTokenAddress,
    bridgeAddress = "0x3c2465d88C6546eac6F9aa6f79081Ad874CA2E8b"
  ) => {
    if (!account) return;
    try {
      let ret = {};
      const swapI = new web3.eth.Contract(ERC20_ABI, swapTokenAddress);
      const swapM = swapI.methods;

      let balance = await swapM.balanceOf(account).call();
      let allowed = await swapM.allowance(account, bridgeAddress).call();

      allowed = Number(allowed);

      const approve = (tokenM, to, amount, account) => {
        if (typeof amount != "string") amount = String(amount);
        tokenM.approve(to, toWei(amount, "ether")).send({ from: account });
      };
      const swap = async (swapAmount) => {
        try {
          await swapM
            .transfer(bridgeAddress, toWei(swapAmount, "ether"))
            .send({ from: account });
        } catch (err) {
          console.log(err);
        }
      };

      ret = {
        available: fromWei(balance, "ether"),
        allowance: allowed,
        approve: async () =>
          await approve(swapM, bridgeAddress, "999999999", account),
        swap: async (methods, swapAmount) => {
          // methods.allowance !== 0
          await swap(swapAmount);
          // : await approve(swapM, bridgeAddress, "999999999", account);
        },
      };

      setPoolMethods({
        ...poolMethods,
        ...ret,
      });
    } catch (err) {
      console.log(err);
      setPoolMethods({
        ...poolMethods,
        available: 0,
        allowance: 0,
      });
    }
  };
  const loadBalance = async () => {
    const ETH = new Web3(
      "https://mainnet.infura.io/v3/636c3521d0f648d5b1789cd9388a182f"
    );
    const HECO = new Web3("https://http-mainnet.hecochain.com");
    const BNB = new Web3("https://bsc-dataseed.binance.org/");

    let RCGeth, RCGht, balanceRCG, balanceHRCRCG, balanceBEPRCG, balanceETH, balanceHT, balanceBNB;

    RCGeth = new ETH.eth.Contract(
      ERC20_ABI,
      "0xe74be071f3b62f6a4ac23ca68e5e2a39797a3c30"
    );

    RCGht = new HECO.eth.Contract(
      ERC20_ABI,
      "0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b"
    );

    // RCGbep = new ???.eth.Contract(
    //   ERC20_ABI,
    //   "???"
    // );

    if (account) {

      balanceRCG = await RCGeth.methods.balanceOf(account).call();
      balanceHRCRCG = await RCGht.methods.balanceOf(account).call();
      balanceBEPRCG = 0;
      balanceETH = await ETH.eth.getBalance(account);
      balanceHT = await HECO.eth.getBalance(account);
      balanceBNB = await BNB.eth.getBalance(account);

      balanceRCG = makeNum(weiToEther(balanceRCG));
      balanceHRCRCG = makeNum(weiToEther(balanceHRCRCG));
      // balanceBEPRCG = makeNum(weiToEther(balanceBEPRCG));
      balanceETH = makeNum(weiToEther(balanceETH));
      balanceHT = makeNum(weiToEther(balanceHT));
      balanceBNB = makeNum(weiToEther(balanceBNB));

      setTokensBalance({
        ...tokensBalance,
        "ERC RCG": balanceRCG,
        "HRC RCG": balanceHRCRCG,
        "BEP RCG": balanceBEPRCG,
        ETH: balanceETH,
        HT: balanceHT,
        BNB: balanceBNB,
      });
    }
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

  useInterval(() => loadBalance(), 5000);

  useEffect(() => {
    loadMethods(selAsset.tokenAddress[selAsset.chainId[recipe.from]]);
  }, [recipe.from, chainId]);

  return (
    <Container>
      <div className={modalSwapOpen === true ? "modalOn" : "modalOff"}>
        <Link to="/defi">
          <div
            className="background"
            onClick={() => {
              setModalSwapOpen(!modalSwapOpen);
            }}
          ></div>
        </Link>
        <div
          className="modalScroll"
          style={{
            display: "flex",
            marginTop: "100px",
            height: "90%",
            width: "100%",
            overflow: "scroll",
            padding: "50px",
          }}
        >
          <div className="modal">
            <div className="title">
              <img
                src={"/ic_swap.svg"}
                style={{
                  width: "96.4px",
                  height: "80px",
                  marginTop: "145px",
                }}
              />
              <div className="theme Roboto_50pt_Black">Recharge swap</div>
              <div className="desc Roboto_25pt_Regular_Mobile3">
                {t("De-Fi/Station/Recharge/content")}
              </div>
            </div>
            <div
              className="walletConnect Roboto_35pt_Bold"
              onClick={account ? () => onDisconnect() : () => connectWallet()}
            >
              <p>
                {account
                  ? account.substring(0, 8) + "..." + account.substring(36, 42)
                  : "Wallet Connect"}
              </p>
            </div>
            <div className="data">
              <div className="asset">
                <div className="title2 Roboto_40pt_Black">Asset</div>
                <div className="bar"></div>
                {loadAsset(assetList, assetsInfo)}
              </div>

              <div className="my">
                <div className="title2 Roboto_40pt_Black">My Asset</div>
                <div className="bar"></div>
                {loadMyAsset(myAssetList, assetsInfo, tokensBalance)}
              </div>
              <div className="app">
                <div className="contents">
                  <div
                    className="swaping"
                    style={dropdownOpen1 || dropdownOpen2 ? {} : {}}
                  >
                    {loadSwitchBox(recipe, "from", networkList)}
                    <div className="arrow">
                      <img
                        src={
                          selAsset.logo === "piggy"
                            ? "/swap_arrow_deactive.svg"
                            : "/swap_arrow.svg"
                        }
                        style={
                          selAsset.logo === "piggy"
                            ? {
                              width: "60px",
                              height: "60px",
                              cursor: "not-allowed",
                            }
                            : { width: "60px", height: "60px" }
                        }
                        onClick={() => {
                          selAsset.logo === "piggy"
                            ? console.log("nothing happen")
                            : setRecipe({
                              ...recipe,
                              from: recipe.to,
                              to: recipe.from,
                              swapAmount: "",
                            });
                        }}
                      />
                    </div>
                    {loadSwitchBox(recipe, "to", networkList)}
                  </div>
                  <div className="staking">
                    <div className="left Roboto_40pt_Black">SWAP</div>
                    <div className="right Roboto_20pt_Regular">
                      Available:{" "}
                      {`${makeNum(
                        (poolMethods.available - recipe.swapAmount).toString()
                      )} ${selAsset.symbol}`}
                    </div>
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      className="amountStake Roboto_30pt_Black_R"
                      value={recipe.swapAmount}
                      onChange={(e) => {
                        if (Number(e.target.value) < 0) {
                          return setRecipe({
                            ...recipe,
                            swapAmount: "0",
                          });
                        }
                        if (
                          poolMethods.available - Number(e.target.value) >=
                          0
                        ) {
                          return setRecipe({
                            ...recipe,
                            swapAmount: makeNum(e.target.value),
                          });
                        }
                        setRecipe({
                          ...recipe,
                          swapAmount: makeNum(poolMethods.available),
                        });
                      }}
                      placeholder="Enter the amount of swap"
                    />
                  </div>

                  <PercentBtns className="Roboto_30pt_Regular">
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
                  <div className="caution Roboto_20pt_Medium_L">
                    {`Conversion Fee: ${selAsset.conversionFee[selAsset.chainId[recipe.from]]
                      } ${selAsset.symbol}`}
                  </div>
                  <div className="buttons">
                    <TwoBtns
                      className={
                        account
                          ? "Roboto_30pt_Black"
                          : "disable Roboto_30pt_Black"
                      }
                      onClick={async () => {
                        if (selAsset.chainId[recipe.from] !== chainId) {
                          toast("Please connect to the appropriate network");
                        } else {
                          await toast(
                            // poolMethods.allowance > 0
                            'Please approve "SWAP" in your private wallet'
                            // : "Approve 처리 중이에요. 잠시만 기다려주세요."
                          );
                          await poolMethods.swap(
                            poolMethods,
                            recipe.swapAmount
                          );
                        }
                      }}
                    >
                      <div>
                        {/* 여기에 web3 인스턴스 만든걸 전송하는 것으로 전달하기 */}
                        <span>
                          {/* {poolMethods.allowance != "0" ? "SWAP" : "APPROVE"} */}
                          SWAP
                        </span>
                      </div>
                    </TwoBtns>
                  </div>
                  <div className="info">
                    <div className="left Roboto_20pt_Light">
                      <div className="detail">Current Redemption Rate</div>
                      <div className="detail">Current Conversion Fee</div>
                      <div className="detail">{selAsset.symbol} to Swap</div>
                      <div className="detail">{selAsset.symbol} to Redeem</div>
                      <div className="detail">
                        Net {selAsset.symbol} to Swap
                      </div>
                    </div>
                    <div className="right Roboto_20pt_Black">
                      <div className="detail">
                        {redemption ? redemption / 100 : 0} %
                      </div>
                      <div className="detail">
                        {selAsset.conversionFee[selAsset.chainId[recipe.from]]}{" "}
                        {selAsset.symbol}
                      </div>
                      <div className="detail">
                        {makeNum(recipe.swapAmount ? recipe.swapAmount : 0)} {selAsset.symbol}
                      </div>
                      <div className="detail">
                        {makeNum(
                          (
                            (recipe.swapAmount / 100) *
                            (redemption ? redemption / 100 : 0)
                          ).toString()
                        )}{" "}
                        {selAsset.symbol}
                      </div>
                      <div className="detail">
                        {makeNum(
                          (
                            recipe.swapAmount -
                            (recipe.swapAmount / 100) * (redemption ? redemption / 100 : 0) -
                            selAsset.conversionFee[
                            selAsset.chainId[recipe.from]
                            ]
                          ).toString()
                        )}{" "}
                        {selAsset.symbol}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .modalOff {
    display: none;
  }

  .modalOn {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .background {
    position: absolute;
    background-color: var(--midnight);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .modalScroll {
  }

  .modalScroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .modal {
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;
    width: 620px;
    // height: 1537px;
    border-radius: 33px;
    // box-shadow: 0 3px 20px 0 rgba(255, 255, 255, 0.45);
    background-color: #02051c;
    align-items: center;
    z-index: 1.5;

    .back {
      position: absolute;
      top: 186px;
      left: 138px;
      cursor: pointer;
    }

    .title {
      display: flex;
      flex-direction: column;
      width: 620px;
      margin: 0 auto;
      justify-content: center;
      align-items: center;

      .theme {
        margin-top: 8px;
        color: #ffffff;
      }
      .desc {
        margin: 60px auto;
      }
    }
    .walletConnect {
      display: flex;
      margin: 0 auto;
      margin-bottom: 60px;
      cursor: pointer;
      width: 470px;
      height: 70px;
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
    .data {
      display: flex;
      flex-direction: column;

    }

    .asset {
      // grid-area: asset;
      display: flex;
      flex-direction: column;
      width: 620px;
      margin: auto;
      margin-bottom: 20px;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 30px;
      background-color: var(--black-30);

      .bar {
        width: 500px;
        height: 2px;
        margin: 20px 20px;
        object-fit: contain;
        background-color: #ffffff;
      }

      .content{
        display: flex;
        margin: auto 60px;
        margin-bottom: 20px;
        cursor: pointer;
        .logo{
          display: flex;
          
          .name{
            margin: auto 0;
            margin-left: 16px;
          }
        }

        .symbol{
          margin: auto 0;
        }
      }
      
    }
    
    .my {
      // grid-area: my;
      display: flex;
      flex-direction: column;
      width: 620px;
      margin: auto;
      margin-bottom: 20px;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 30px;
      background-color: var(--black-30);

      .bar {
        width: 500px;
        height: 2px;
        margin: 20px 20px;
        object-fit: contain;
        background-color: #ffffff;
      }

      .balance{
        display: flex;
        justify-content: space-between;
        margin: 0 60px;
        margin-bottom: 16px;
        
        .rapper {
          position: relative;
        }
        .logo{
          display: flex;
          .symbol{
            margin: auto 0;
            margin-left: 20px;
          }
        }
        .chain {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .amount{
          margin: auto 0;
        }
      }

      .title2 {
        margin-top: 0;
        // margin-bottom: 16px;
        color: #ffffff;
      }

     
      
    }
    
    .app {
      // grid-area: app;
      display: flex;
      flex-direction: column;
      width: 620px;
      margin: auto;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 30px;
      background-color: var(--black-30);

      .contents {
        display: flex;
        flex-direction: column;

        .selected {
          display: flex;
          flex-direction: column;
          margin: 0 auto;

          .logo {
            margin: 0 auto;
            margin-bottom: 8px;
          }

          .name {
            margin: 0 auto;
            margin-bottom: 20px;
          }
        }

        .swaping {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: space-between;

          .from {
            display: flex;
            flex-direction: column;
            margin 60px 0;
            // .to 스타일과 동일 적용
          }

          .arrow {
            margin: 0 auto;
            cursor: pointer;
            img:hover {
              border-radius: 10px;
              box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
            }
          }

          .to {
            display: flex;
            flex-direction: column;
            margin 60px 0;
          }

          .theme {
            margin: 0 auto;
            margin-bottom: 20px;
          }

          .box {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 580px; 
            heigth: 160px;
            border-radius: 20px;
            background-color: var(--black-10);

            &:hover {
              box-shadow: 0 0 15px 0 var(--purple);
            }

            .default {
              display: flex;
              height: 160px;
              cursor: pointer;

              .network {
                display: flex;
                margin: 40px auto;
                margin-left: 40px;

                .logo {
                  margin-right: 16px;
                }

                .name {
                  margin: auto 0;
                  width: 300px;
                }
              }

              .bar {
                margin: 20px 0;
                width: 1px;
                height: 120px;
                object-fit: contain;
                background-color: #ffffff;
              }

              .dropdown {
                margin: auto 40px;
                cursor: pointer;
              }
            }

            .inactive {
              display: none;
            }

            .test {
              height: 17px;
              width: 100%;
              background-color: var(--black-10);
              position: absolute;
              top: 144px;
              z-index: 1;
          }
            }

            .dropdownContents {
              display: flex;
              flex-direction: column;
              position: absolute;
              top: 160px; 
              width: 580px;
              box-sizing: border-box;
              border-radius: 0 0 20px 20px;
              background-color: var(--black-30);
              box-shadow: 0 0 15px 0 var(--purple);

              .dropdownContent {
                display: flex;
                padding: 16px 0;
                box-sizing: border-box;
                cursor: pointer;

                .logo {
                  margin-left: 40px;
                }

                .name {
                  margin: auto 0;
                  margin-left: 20px;
                }

                &:hover {
                  background-color: var(--black-10);
                }
              }
            }
          }
        }

        .staking {
          display: flex;
          flex-direction: column;
          // align-items: flex-end;
          // justify-content: space-between;
          margin: 40px 40px;
          margin-bottom: 8px;

          .left {
            margin: auto;
          }

          .right {
            margin: auto;
            margin-right: 0;
          }
        }
        .inputBox {
          .amountStake {
            width: 100%;
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
          margin: 0 auto;
          // margin-right: 40px;
          text-align: right;
          color: #d62828;
        }
        .buttons {
          display: flex;
          margin-top: 80px;
          margin-bottom: 40px;
        }
        .info {
          display: flex;
          width: 580px;
          align-items: center;
          margin-bottom: 80px;
          justify-content: space-between;

          .detail {
            height: 26px;
            margin-bottom: 16px;
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
      opacity: 0.5;
    }
  }
`;

const PercentBtns = styled.div`
  display: flex;
  margin: 16px 80px;

  cursor: pointer;

  div {
    display: flex;
    margin: 0 10px;
    width: 100px;
    height: 50px;
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
  width: 100%;
  height: 78px;
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
    color: #ffffff;
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
    color: #ffffff;
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
    color: #ffffff;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
`;

// export default React.memo(Modal, (props, nextProps) => {
//   if (props.web3 !== nextProps.web3) {
//     // don't re-render/update
//     return true
//   }
//   return true;
// })
export default withTranslation()(ModalSwap);
