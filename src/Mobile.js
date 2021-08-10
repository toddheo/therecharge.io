/* Components */
import Gnb from "./Component/Mobile/Gnb";
import Home from "./Component/Mobile/Home";
import About from "./Component/Mobile/About";
import Recharge from "./Component/Mobile/Recharge";
import Defi from "./Component/Mobile/Defi";
import Docs from "./Component/Mobile/Docs";
/* Libraries */
import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Web3 from "web3";
import styled from "styled-components";
import { Main } from "@aragon/ui";
import { useRecoilState } from "recoil";
import {
  modalPoolOpenState,
  modalSwapOpenState,
  modalPool2OpenState,
} from "./store/modal";

const Mobile = React.memo(
  ({ web3Modal, toast }) => {
    const [account, setAccount] = useState(undefined);
    const [chainId, setChainId] = useState(-1);
    const [web3, setWeb3] = useState(
      new Web3(
        "https://eth-ropsten.alchemyapi.io/v2/HTyoniu4l4byjCl-JpWjerrearvI__4x"
      )
    );

    const [page, setPage] = useState("/");
    const [countDown, setCountDown] = useState(null);
    const [modalPoolOpen, setModalPoolOpen] =
      useRecoilState(modalPoolOpenState);
    const [modalSwapOpen, setModalSwapOpen] =
      useRecoilState(modalSwapOpenState);
    const [modal2Open, setModal2Open] = useRecoilState(modalPool2OpenState);
    const [params, setParams] = useState({
      type: "Flexible",
      isLP: false,
      address: "0x",
    });

    // Chosen wallet provider given by the dialog window
    let provider;

    async function fetchAccountData() {
      // Get a Web3 instance for the wallet
      const web3 = new Web3(provider);
      console.log("Web3 instance is", web3);
      // Get list of accounts of the connected wallet
      const accounts = await web3.eth.getAccounts();
      // Get connected chain id from Ethereum node
      setAccount(accounts[0]);
      setChainId(await web3.eth.getChainId());
      setWeb3(web3);
    }

    async function refreshAccountData() {
      console.log("refreshAccountData");
      await fetchAccountData(provider);
    }

    async function onDisconnect(event) {
      toast("Disconnecting Wallet");
      if (
        !event &&
        web3 &&
        web3.currentProvider &&
        web3.currentProvider.close
      ) {
        await web3.currentProvider.close();
      }
      await web3Modal.clearCachedProvider();
      setAccount(null);
      // setCountDown(null);
    }
    function connectEventHandler(provider) {
      if (!provider.on) {
        return;
      }
      provider.on("open", async (info) => {
        toast("Wallet Connected!");
        fetchAccountData(provider);
      });
      provider.on("close", () => onDisconnect(true));
      provider.on("accountsChanged", async (accounts) => {
        fetchAccountData(provider);
        toast("Account Changed");
      });
      provider.on("chainChanged", async (chainId) => {
        const networkId = await web3.eth.net.getId();
        fetchAccountData(provider);
        toast("Chain Id Changed");
      });

      provider.on("networkChanged", async (networkId) => {
        // const chainId = await web3.eth.chainId();
        fetchAccountData(provider);
        toast("Network Changed");
      });
      provider.on("disconnect", async (error) => {
        toast("Wallet lose connection.");
      });
    }
    async function ConnectWallet() {
      console.log("Opening a dialog", web3Modal);
      toast("Please Connect Wallet");
      try {
        provider = await web3Modal.connect();
        toast("Wallet Connected!");
        connectEventHandler(provider);
      } catch (e) {
        e ? toast("Wallet Connect Failed. Please try again") : toast("Wallet Connect Failed. Please Log-in metamask")
        console.log("Could not get a wallet connection", e);
        return;
      }

      await refreshAccountData();
      await setCountDown(thirtyMin);
    }

    const useTimeout = (callback, delay) => {
      const savedCallback = useRef();

      // Remember the latest callback.
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);

      // Set up the interval.
      useEffect(() => {
        function timeout() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setTimeout(timeout, delay);
          return () => clearTimeout(id);
        }
      }, [delay]);
    };

    const thirtyMin = 30 * 60 * 1000;
    useTimeout(() => onDisconnect(), countDown);

    const getTitle = () => {
      const path = window.location.pathname.split("/")[1];
      const path2 = window.location.pathname.split("/")[2];
      // return path;

      switch (path) {
        case "about":
          return "About";
        case "recharge":
          return "Recharge Token";
        case "defi":
          if (modal2Open) {
            if (path2 === "flexible") {
              // console.log(modal2Open);
              return "Flexible Staking";
            }
            if (path2 === "locked") {
              return "Locked Staking";
            }
            if (path2 === "flexibleLP") {
              return "LP Flexible Staking";
            }
            if (path2 === "lockedLP") {
              return "LP Locked Staking";
            }
          } else if (modalPoolOpen) {
            // console.log(modalPoolOpen);
            return "Charging Station";
          } else if (modalSwapOpen) {
            // console.log(modalPoolOpen);
            return "Recharge swap";
          }
          return "De-Fi";
        case "docs":
          return "Documents";
        default:
          return "";
      }
    };

    useEffect(() => {
      setPage(window.location.pathname);
    }, []);

    useEffect(async () => {
      if (!web3) return;
      setAccount((await web3.eth.getAccounts())[0]);
      setChainId(await web3.eth.getChainId());
    }, [web3]);

    return (
      <div className={"desktop " + getTitle()}>
        <Gnb
          connectWallet={ConnectWallet}
          onDisconnect={onDisconnect}
          account={account}
          getTitle={getTitle}
          modalPoolOpen={modalPoolOpen}
          modal2Open={modal2Open}
          modalSwapOpen={modalSwapOpen}
          setModalPoolOpen={setModalPoolOpen}
          setModal2Open={setModal2Open}
          setModalSwapOpen={setModalSwapOpen}
          params={params}
          setParams={setParams}
        />

        <Switch>
          <Route path="/docs/:viewNum" component={Docs}></Route>
          <Route
            path="/defi"
            component={() => (
              <Defi
                connectWallet={ConnectWallet}
                onDisconnect={onDisconnect}
                account={account}
                chainId={chainId}
                web3={web3}
                toast={toast}
                modalPoolOpen={modalPoolOpen}
                modal2Open={modal2Open}
                modalSwapOpen={modalSwapOpen}
                setModalPoolOpen={setModalPoolOpen}
                setModal2Open={setModal2Open}
                setModalSwapOpen={setModalSwapOpen}
                params={params}
                setParams={setParams}
              />
            )}
          ></Route>
          <Route path="/recharge" component={Recharge}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        <style jsx global>{`
            body {
              width: 100%;
              margin: 0px;
              padding: 0px;
              font-family: "Roboto", sans-serif;
              background-color: #03051d;
            }
            div {
              outline: none;
            }
            .desktop {
              display: flex;
              width: 100%;
              // background: url(/bg_main_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .about {
              // background: url(/bg_about_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .recharge {
              // background: url(/bg_recharge_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .station {
              // background: url(/bg_station_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .docs {
              // background: none;
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            body::-webkit-scrollbar {
              width: 5px;
            }
            body::-webkit-scrollbar-thumb {
              background-color: #2f3542;
              border-radius: 3px;
            }
            body::-webkit-scrollbar-track {
              background-color: #02051c;
              border-radius: 3px;
            }
            .ToastHub___StyledAnimatedDiv-sc-1y0i8xl-1 {
              margin-top: 10px;
            } 
            .ToastHub___StyledDiv-sc-1y0i8xl-0 {
              padding: 5px 20px;
            }
          `}</style>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return true;
  }
);

export default Mobile;
