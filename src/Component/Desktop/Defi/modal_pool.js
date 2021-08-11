/* Libraries */
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pool from "./Pool";
import { useRecoilState } from "recoil";
import { modalPoolOpenState, modalPool2OpenState } from "../../../store/modal";
import { selState } from "../../../store/pool";
import { withTranslation } from "react-i18next";

function ModalPool({
  web3,
  // modalPoolOpen,
  // handleModalPool,
  connectWallet,
  onDisconnect,
  account,
  params,
  setParams,
  t,
  chainId,
  toast,
}) {
  const [modalPoolOpen, setModalPoolOpen] = useRecoilState(modalPoolOpenState);
  const [modalPool2Open, setModalPool2Open] = useRecoilState(
    modalPool2OpenState
  );
  const [sel, setSelCharger] = useRecoilState(selState);
  // const [modal2Open, setModal2Open] = useState(false);
  // const [params, setParams] = useState({
  //   type: "Flexible",
  //   isLP: false,
  // });

  // const handleModal2 = () => {
  //   setModal2Open(!modal2Open);
  // };

  return (
    <Container>
      <div className={modalPoolOpen ? "modalOn" : "modalOff"}>
        <div
          className="background"
          // onClick={() => {
          //   setModalPoolOpen(false);
          //   setModalPool2Open(false);
          // setParams({
          //   type: "",
          //   isLP: false,
          // });
          // setSelCharger(0);
          // }}
        ></div>
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
              <img
                className="close"
                src="/ic_close.svg"
                onClick={() => {
                  setModalPoolOpen(false);
                }}
              />
              <div className="stations">
                <div className="theme Roboto_50pt_Black">Charging Station</div>
                <div className="desc Roboto_20pt_Regular">
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
                      // className="disable"
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
                      // className="disable"
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
              {modalPool2Open ? (
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
                  sel={sel}
                  setSelCharger={setSelCharger}
                  chainId={chainId}
                  toast={toast}
                />
              ) : (
                <></>
              )}
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
    // background-color: white;
  }

  .modalScroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .modal {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 1364px;
    height: fit-content;
    border-radius: 33px;
    box-shadow: 0 3px 20px 0 rgba(255, 255, 255, 0.45);
    background-color: #02051c;
    align-items: center;
    z-index: 2;

    .modal1 {
      position: relative;
      width: 100%;

      .close {
        position: absolute;
        top: 141px;
        right: 138px;
        cursor: pointer;
      }
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
        margin: 0 auto;
        margin-top: 40px;
        width: 850px;
        text-align: center;
        color: #ffffff;
      }
      .boxes {
        display: flex;
        flex-direction: column;
        margin: 80px auto 120px auto;
        .tier {
          display: flex;

          a {
            text-decoration: none;
          }
          .disable {
            cursor: not-allowed;
            opacity: 0.5;
          }
        }

        .station {
          display: flex;
          flex-direction: column;
          margin: 10px;
          padding: 40px 0;
          box-sizing: border-box;
          justify-content: center;
          align-items: center;
          width: 534px;
          height: 229px;
          border-radius: 30px;
          background-color: var(--black-30);
          .theme2 {
            margin-top: 16px;
            text-align: center;
            color: #ffffff;
          }
        }
        .station:hover {
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
