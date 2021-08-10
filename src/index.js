/* Libraries */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserView, MobileView } from "react-device-detect";
import { Main, ToastHub, Toast, textStyle } from "@aragon/ui";
import { RecoilRoot, useSetRecoilState } from "recoil";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
/* Components */
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import "./index.css";
/* Setting WalletConnect */
const providerOptions = {
  metamask: {
    id: "injected",
    name: "MetaMask",
    type: "injected",
    check: "isMetaMask",
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        128: "https://http-mainnet.hecochain.com",
        256: "https://http-testnet.hecochain.com",
      },
      infuraId: "3fc11d1feb8944229a1cfba7bd62c8bc", // Required
      network: "mainnet",
      qrcodeModalOptions: {
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      },
    },
  },
};
let web3Modal = new Web3Modal({
  // network: "mainnet",
  // network: "ropsten",
  cacheProvider: true,
  providerOptions,
});

ReactDOM.render(
  <React.StrictMode>
    <Main layout={false} scrollView={true} theme={false}>
      <ToastHub>
        <Toast>
          {(toast) => {
            return (
              <div>
                <RecoilRoot>
                  {/* <UpdateToastState toast={toast} /> */}
                  <BrowserView>
                    <BrowserRouter>
                      {window.innerWidth > 1024 ? (
                        <Desktop web3Modal={web3Modal} toast={toast} />
                      ) : (
                        <Mobile web3Modal={web3Modal} toast={toast} />
                      )}
                    </BrowserRouter>
                  </BrowserView>
                  <MobileView>
                    <BrowserRouter>
                      <Mobile web3Modal={web3Modal} toast={toast} />
                    </BrowserRouter>
                  </MobileView>
                </RecoilRoot>
              </div>
            );
          }}
        </Toast>
      </ToastHub>
    </Main>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
