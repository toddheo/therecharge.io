/* Libraries */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pool from "./Pool";
import { useRecoilState } from "recoil";
import { modalPoolOpenState, modalPool2OpenState } from "../../../store/modal";
import { withTranslation } from "react-i18next";

function ModalPool({
  web3,
  connectWallet,
  onDisconnect,
  account,
  modalPoolOpen,
  setModalPoolOpen,
  modalPool2Open,
  setModalPool2Open,
  params,
  setParams,
  t,
  chainId,
  toast
}) {
  // const [modalPoolOpen, setModalPoolOpen] = useRecoilState(modalPoolOpenState);
  // const [modalPool2Open, setModalPool2Open] =
  //   useRecoilState(modalPool2OpenState);
  // const handleModal2 = () => {
  //   setModal2Open(!modal2Open);
  // };

  return (
    <Container>
      <div className={modalPoolOpen === true ? "modalOn" : "modalOff"}>
        <Link to="/defi">
          <div
            className="background"
            onClick={() => {
              setModalPoolOpen(!modalPoolOpen);
              setModalPool2Open(!modalPool2Open);
              setParams({
                type: "",
                isLP: false,
              });
            }}
          ></div>
        </Link>
        <div
          className="modalScroll"
          style={{
            display: "flex",
            marginTop: "100px",
            height: "80%",
            width: "100%",
            overflow: "scroll",
            padding: "40px",
          }}
        >
          <div
            className="modal"
            style={modalPool2Open ? { height: "1412px" } : {}}
          >
            <div
              className="modal1"
              style={
                modalPool2Open ? { display: "none" } : { display: "block" }
              }
            >
              <div className="stations">
                <div className="theme Roboto_50pt_Black">Charging Station</div>
                <div className="desc Roboto_25pt_Regular">
                  {t("De-Fi/Station/Charger/content")}
                </div>
                <div className="boxes">
                  <div className="tier">
                    <Link
                      to="/defi/flexible"
                      onClick={() => {
                        setModalPool2Open(!modalPool2Open);
                        setParams({
                          type: "Flexible",
                          isLP: false,
                          address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
                        });
                      }}
                    >
                      <div className="station">
                        <img
                          src="/ic_flexiblestaking.svg"
                          style={{ width: "99.4px", height: "80px" }}
                        />
                        <div className="theme2 Roboto_40pt_Black">
                          Flexible Staking
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/defi/locked"
                      onClick={() => {
                        setModalPool2Open(!modalPool2Open);
                        setParams({
                          type: "Locked",
                          isLP: false,
                          address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
                        });
                      }}
                    >
                      <div className="station">
                        <img
                          src="/ic_lockedstaking.svg"
                          style={{ width: "79.2px", height: "80px" }}
                        />
                        <div className="theme2 Roboto_40pt_Black">
                          Locked Staking
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="tier">
                    <Link
                      to="/defi/flexibleLP"
                      // onClick={() => {
                      //   setModalPool2Open(!modalPool2Open);
                      //   setParams({
                      //     type: "Flexible",
                      //     isLP: true,
                      //     address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
                      //   });
                      // }}
                      className="disable"
                    >
                      <div className="station">
                        <img
                          src="/ic_flexiblestaking_lp.svg"
                          style={{ width: "139px", height: "80px" }}
                        />
                        <div className="theme2 Roboto_40pt_Black">
                          LP Flexible Staking
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/defi/lockedLP"
                      // onClick={() => {
                      //   setModalPool2Open(!modalPool2Open);
                      //   setParams({
                      //     type: "Locked",
                      //     isLP: true,
                      //     address: "0x5419eB32938e33b5E333F185e32bdAd11d73a679",
                      //   });
                      // }}
                      className="disable"
                    >
                      <div className="station">
                        <img
                          src="/ic_lockedstaking_lp.svg"
                          style={{ width: "121px", height: "80px" }}
                        />
                        <div className="theme2 Roboto_40pt_Black">
                          LP Locked Staking
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal2"
              style={modalPool2Open ? { display: "flex" } : { display: "none" }}
            >
              <Pool
                web3={web3}
                connectWallet={connectWallet}
                onDisconnect={onDisconnect}
                handleModal2={() => {
                  setModalPool2Open(!modalPool2Open);
                }}
                account={account}
                setParams={setParams}
                params={params}
                chainId={chainId}
                toast={toast}
              />
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

  .modalScroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .modal {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 720px;
    height: fit-content;
    border-radius: 33px;
    // box-shadow: 0 3px 20px 0 rgba(255, 255, 255, 0.45);
    background-color: #02051c;
    align-items: center;
    z-index: 1.5;

    .close {
      position: absolute;
      top: 0px;
      right: 0px;
      cursor: pointer;
    }

    .modal1 {
      position: relative;
      width: 100%;

      .stations {
        display: flex;
        flex-direction: column;
        margin: auto;
      }
      .theme {
        margin-top: 120px;
        text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
        text-align: center;
        color: #ffffff;
      }
      .desc {
        margin: 120px auto;
        width: 620px;
        text-align: center;
        color: #ffffff;
      }
      .boxes {
        display: flex;
        flex-direction: column;
        margin: 0 auto 80px auto;
        .tier {
          display: flex;
          flex-direction: column;

          a {
            text-decoration: none;
          }
        }
        .disable {
          cursor: not-allowed;
          opacity: 0.5;
        }

        .station {
          display: flex;
          flex-direction: column;
          margin: 10px;
          padding: 40px 0;
          box-sizing: border-box;
          justify-content: center;
          align-items: center;
          width: 620px;
          height: 229px;
          border-radius: 30px;
          background-color: var(--black-30);
          .theme2 {
            margin-top: 16px;
            text-align: center;
            color: #ffffff;
          }
        }
        .station:active {
          background-color: var(--black-20);
        }
      }
    }
    .modal2 {
      width: 100%;
    }
  }
`;

// export default React.memo(Modal, (props, nextProps) => {
//   if (props.web3 !== nextProps.web3) {
//     // don't re-render/update
//     return true
//   }
//   return true;
// })

export default withTranslation()(ModalPool);
