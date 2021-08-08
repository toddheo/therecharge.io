/* Components */
import Gnb from "./Component/Desktop/Gnb";
import Home from "./Component/Desktop/Home";
import About from "./Component/Desktop/About";
import Recharge from "./Component/Desktop/Recharge";
import Defi from "./Component/Desktop/Defi";
import Docs from "./Component/Desktop/Docs";
/* Libraries */
import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Web3 from "web3";
// import styled from "styled-components";
import { withTranslation } from "react-i18next";
import i18next from "./locale/i18n";
import { ScrollingProvider } from 'react-scroll-section';

const Desktop = React.memo(
  ({ web3Modal, toast, t }) => {
    const [account, setAccount] = useState(undefined);
    const [chainId, setChainId] = useState(-1);
    const [web3, setWeb3] = useState(
      new Web3(
        "https://eth-ropsten.alchemyapi.io/v2/HTyoniu4l4byjCl-JpWjerrearvI__4x"
      )
    );
    const [countDown, setCountDown] = useState(null);
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
      toast(t("Disconnect/wallet"));
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
        toast(t("Connect/wallet"));
        fetchAccountData(provider);
      });
      provider.on("close", () => onDisconnect(true));
      provider.on("accountsChanged", async (accounts) => {
        fetchAccountData(provider);
        toast(t("Change/account"));
      });
      provider.on("chainChanged", async (chainId) => {
        const networkId = await web3.eth.net.getId();
        fetchAccountData(provider);
        toast(t("Change/chainId"));
      });

      provider.on("networkChanged", async (networkId) => {
        fetchAccountData(provider);
        toast(t("Change/network"));
      });
      provider.on("disconnect", async (error) => {
        toast(t("Disconnect/wallet"));
      });
    }

    async function ConnectWallet() {
      console.log("Opening a dialog", web3Modal);
      toast(t("Ask/Connect"));
      try {
        provider = await web3Modal.connect();
        toast(t("Connect/wallet"));
        connectEventHandler(provider);
      } catch (e) {
        e ? toast(t("ConnectFail/wallet")) : toast(t("ConnectFail/metamask"));
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

    return (
      <div className="desktop">
        <Gnb
          onDisconnect={onDisconnect}
          connectWallet={ConnectWallet}
          account={account}
        />
        <Switch>
          <Route path="/docs/:viewNum" component={Docs}></Route>
          <Route
            path="/defi"
            component={() => (
              <Defi
                onDisconnect={onDisconnect}
                connectWallet={ConnectWallet}
                account={account}
                chainId={chainId}
                web3={web3}
                toast={toast}
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
            .desktop {
              display: flex;
              // width: 100%;
              background-color: #02051c;
            }
            .home {
              width: 100%;
              min-width: 1088px;
              // overflow: hidden;
              // background: url(/bg_main_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .about {
              width: 100%;
              min-width: 1088px;
              // background: url(/bg_about_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .recharge {
              width: 100%;
              min-width: 1088px;
              // background: url(/bg_recharge_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .defi {
              width: 100%;
              min-width: 1088px;
              // background: url(/bg_station_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            .docs {
              width: 100%;
              min-width: 1088px;
              // background: url(/gb_docs_bottom.svg);
              background-color: #02051c;
              // background-size: cover;
              // background-position: bottom 0px center;
            }
            body::-webkit-scrollbar {
              width: 2px;
            }
            body::-webkit-scrollbar-thumb {
              background-color: #2f3542;
              border-radius: 1px;
            }
            body::-webkit-scrollbar-track {
              background-color: #02051c;
              border-radius: 1px;
            }
            .ToastHub___StyledAnimatedDiv-sc-1y0i8xl-1 {
              margin-top: 10px;
            }
            .ToastHub___StyledDiv2-sc-1y0i8xl-2 {
              font-size: 15px;
              height: 110%;
              padding: 5px 20px;
            }
          `}</style>
      </div>
    );
  }
  ,
  (prevProps, nextProps) => {
    return true;
  }
);

export default withTranslation()(Desktop);
