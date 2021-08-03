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

                slideIndex={props.sliderIndex}
                beforeSlide={(now, next) => props.setSliderIndex([now, next])}
                // afterSlide={slideIndex => props.setSliderIndex(slideIndex)}
                autoplay="true"
                autoplayInterval="10000"

            >
                {props.children}
            </Carousel>
        </SliderDisplay>
    )
}

const SliderDisplay = styled.div`
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
    .title-box {
        display: flex;
        margin: 0;
        align-items: center;
        justify-content: center;
        /* margin: 5vh auto; */
        border-bottom: 2px solid #ffb900;
        font-size: 30px;
        font-weight: bold;
        text-shadow: 0 0 1px white, 0 0 15px white;
        color: #fff;
    }
    .slider {
        // z-index: 1;
    }
    .title-box {
        height: 80px;
    }
    .slider-frame {
        box-sizing: border-box !important;
        margin: 0 50px 0 50px !important;
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