/* Libraries */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Web3 from "web3";
import { fromWei, toWei } from "web3-utils";
import { useRecoilState } from "recoil";
import { modalSwapOpenState } from "../../../store/modal.js";
import { withTranslation } from "react-i18next";
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
  redemption,
  t,
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
      swapAmount: makeNum((poolMethods.available / 100) * Number(x)),
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
                <div className="name Roboto_20pt_Medium_L">
                  {assetsInfo[asset].name.length > 8
                    ? assetsInfo[asset].name.substring(0, 8) + " ..."
                    : assetsInfo[asset].name}
                </div>
              </div>
              <div className="symbol Roboto_20pt_Medium_Gray">
                {assetsInfo[asset].symbol}
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
                    style={{ width: "25px", height: "25px" }}
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
                <div className="symbol Roboto_20pt_Medium_L">
                  {(token === "ERC RCG" ||
                    token === "HRC RCG" ||
                    token === "BEP RCG")
                    ? rcg
                    : token}
                </div>
              </div>
              <div className="amount Roboto_20pt_Light">
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
        <div className="theme Roboto_30pt_Black_L">
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
                <div className="Roboto_20pt_Bold">
                  {direction == "from"
                    ? selAsset.logo === "piggy"
                      ? "PiggyCell"
                      : recipe.from
                    : selAsset.logo === "piggy"
                      ? "Huobi ECO Chain"
                      : recipe.to}
                </div>
                <div className="Roboto_20pt_Bold">
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
                        //FIX ME
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
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div className="name">
                        <div className="Roboto_20pt_Bold">{chain}</div>
                        <div className="Roboto_20pt_Bold">Network</div>
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
        // .on("transactionHash", (hash) => {
        //   console.log(hash);
        // });
      };
      const swap = async (swapAmount) => {
        try {
          // console.log("Type of swapAmount :", typeof swapAmount);
          await swapM
            .transfer(bridgeAddress, toWei(swapAmount, "ether"))
            .send({ from: account });
          // .on("transactionHash", async (hash) => {
          //   let txReceipt = await web3.eth.getTransactionReceipt(hash);
          //   let status = await web3.eth.getTransactionReceipt(hash).status;
          //   console.log("transaction txReceipt from swap :", txReceipt);
          //   console.log("transaction status from swap :", status);
          //   if (status)
          //     loadMethods(
          //       selAsset.tokenAddress[selAsset.chainId[recipe.from]]
          //     );
          // });
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
          // onClick={() => {
          //   setModalSwapOpen(!modalSwapOpen);
          // }}
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
            {/* <img
              className="back"
              src={"/ic_back@3x.png"}
              style={{ width: "79px", height: "30px" }}
              onClick={() => {
                setModalSwapOpen(!modalSwapOpen);
              }}
            /> */}
            <div className="title">
              <div>
                <img
                  src={"/ic_swap.svg"}
                  style={{ width: "79.2px", height: "80px", marginTop: "80px" }}
                />
                <div className="theme Roboto_50pt_Black">Recharge swap</div>
                <div className="Roboto_20pt_Regular">
                  {t("De-Fi/Station/Recharge/content")}
                </div>
              </div>
              <img
                src={"/ic_close.svg"}
                className="close"
                onClick={() => {
                  setModalSwapOpen(!modalSwapOpen);
                }}
              />
            </div>
            <div
              className="walletConnect Roboto_20pt_Regular"
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
                <div className="title2 Roboto_30pt_Black">Asset</div>
                <div className="bar"></div>
                {loadAsset(assetList, assetsInfo)}
              </div>

              <div className="my">
                <div className="title2 Roboto_30pt_Black">My Asset</div>
                <div className="bar"></div>
                {loadMyAsset(myAssetList, assetsInfo, tokensBalance)}
              </div>
              <div className="app">
                <div className="contents">
                  <div className="selected">
                    <div className="logo">
                      <img
                        src={`/swap_${selAsset.logo}.svg`}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className="name Roboto_20pt_Medium_C">
                      {`${selAsset.name}`}
                    </div>
                  </div>
                  <div
                    className="swaping"
                    style={
                      dropdownOpen1 || dropdownOpen2
                        ? { marginBottom: "40px" }
                        : {}
                    }
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
                            ? console.log("")
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
                    <div className="left Roboto_30pt_Black_R">SWAP</div>
                    <div className="right Roboto_20pt_Regular">
                      Available:{" "}
                      {`${makeNum(
                        (
                          poolMethods.available - Number(recipe.swapAmount)
                        ).toString()
                      )} ${selAsset.symbol}`}
                    </div>
                  </div>
                  <div className="inputBox">
                    <input
                      type="number"
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
                  <div className="caution Roboto_16pt_Medium">
                    {`Conversion Fee: ${selAsset.conversionFee[selAsset.chainId[recipe.from]]
                      } ${selAsset.symbol}`}
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
                          // console.log("transaction hash:", tx);
                          // tx.on("transactionHash", (hash) => {
                          //   web3.eth.getTransactionReceipt(hash);
                          //   console.log(web3.eth.getTransactionReceipt(hash));
                          // });
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
                            (redemption ? redemption / 100 : 1)
                          ).toString()
                        )}{" "}
                        {selAsset.symbol}
                      </div>
                      <div className="detail">
                        {makeNum(
                          (
                            recipe.swapAmount -
                            (recipe.swapAmount / 100) * (redemption ? redemption / 100 : 1) -
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
    opacity: 0.5;
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
    width: 1364px;
    height: 1537px;
    border-radius: 33px;
    box-shadow: 0 3px 20px 0 rgba(255, 255, 255, 0.45);
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
      flex-direction: row;
      width: 1100px;
      margin: 0 auto;
      margin-bottom: 40px;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        width: 850px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        div {
          margin-top: 40px;
        }
      }
      .theme {
        margin-top: 8px;
        color: #ffffff;
      }
      .close {
      position: absolute;
      top:186px;
      left:1196px;
      }
    }
    .walletConnect {
      display: flex;
      margin-left: 720px;
      margin-bottom: 20px;
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
    .data {
      display: grid;
      grid-template-columns: 296px 772px;
      grid-template-rows: 469px 469px;
      grid-template-areas:
        "asset app app"
        "my app app";
      gap: 20px;
    }

    .asset {
      grid-area: asset;
      display: flex;
      flex-direction: column;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: var(--black-30);

      .bar {
        width: 216px;
        height: 1px;
        margin: 16px 0;
        object-fit: contain;
        background-color: #ffffff;
      }

      .content{
        display: flex;
        justify-content: space-between;
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
      grid-area: my;
      display: flex;
      flex-direction: column;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: var(--black-30);

      .bar {
        width: 216px;
        height: 1px;
        margin: 16px 0;
        object-fit: contain;
        background-color: #ffffff;
      }

      .balance{
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        
        .rapper {
          position: relative;
        }
        .logo{
          display: flex;
          .symbol{
            margin-left: 8px;
          }
        }
        .chain {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      .title2 {
        margin-top: 0;
        // margin-bottom: 16px;
        color: #ffffff;
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
          width: 100%;
          justify-content: space-between;
          margin-bottom: 40px;

          .from {
            display: flex;
            flex-direction: column;
            // .to 스타일과 동일 적용
          }

          .arrow {
            margin: auto 20px;
            margin-top: 100px;
            cursor: pointer;
            img:hover {
              border-radius: 10px;
              box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
            }
          }

          .to {
            display: flex;
            flex-direction: column;
          }

          .theme {
            margin-left: 40px;
            margin-bottom: 16px;
          }

          .box {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 296px;
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
                margin-left: 20px;

                .logo {
                  margin-right: 16px;
                }

                .name {
                  margin: auto 0;
                  width: 120px;
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
                margin: auto 20px;
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
              width: 296px;
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
                  margin-left: 20px;
                }

                .name {
                  margin-left: 8px;
                }

                &:hover {
                  border-radius: 0 0 20px 20px;
                  background-color: var(--black-10);
                }
              }
            }
          }
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
            width: 100%;
            height: 79px;
            padding: 20px 40px;
            box-sizing: border-box;
            background-color: var(--black-10);
            border: 1px hidden;
            border-radius: 20px;
            text-align: right;
          }
          /* Chrome, Safari, Edge, Opera */
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          input[type=number] {
            -moz-appearance: textfield;
          }
        }
        .caution {
          margin: 16px 0;
          margin-right: 40px;
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
      opacity: 0.5;
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
