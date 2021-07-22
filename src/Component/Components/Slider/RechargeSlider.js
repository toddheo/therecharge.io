import React from "react";
import Carousel from 'nuka-carousel';
import styled from "styled-components";

function DefaultSlider(props) {
    return (
        <SliderDisplay>
            <Carousel
                defaultControlsConfig={{
                    nextButtonText: " ",
                    prevButtonText: " ",
                }}

                wrapAround
                speed="200"

                autoplay="true"
                autoplayInterval="10000"

            // beforeSlide={(i) => props.setSliderIndex((i+1)%4)}
            >
                {props.children}
            </Carousel>
        </SliderDisplay>
    )
}

const SliderDisplay = styled.div`
    margin-top: 75px;
    .paging-item {
        button {
            fill: #3e3e3e !important;
            opacity: 1 !important;
    
            svg {
                width: 10px;
                height: 10px;
                circle {
                    cx: 5px;
                    cy: 5px;
                    r: 5px;
                }
            }
    
            
        }
        &.active button {
            fill: #fff !important;
        }
    }
    .slider {
        z-index: 3;
    }
    .title-box {
        height: 80px;
    }
    .slider-frame {
        box-sizing: border-box !important;
        margin: 0 25px 0 20px !important;
    }
    .slider-control-bottomcenter {
        bottom: initial !important;
        margin-top: 40px;
    }
    .slider-control-centerleft,
    .slider-control-centerright {
        height: 30px;
        width: auto;
        background-repeat:no-repeat;
        top: 20% !important;
        >button {
            background: none !important;
        }
    }
    .slider-control-centerleft {
        background-image: url("/ic-arrow-left.svg");
    }
    .slider-control-centerright {
        background-image: url("/ic-arrow-right.svg");
    }
`

export default DefaultSlider;