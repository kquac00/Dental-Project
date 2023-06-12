import React, { useState, useEffect, useRef } from "react";
import { CarouselData } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import smilePicture from '../assets/images/Smile.jpg';
import '../carousel.css';

function Carousel() {
    const [currImg, setCurrImg] = useState(0);
    const [pause, setPause] = useState(false);
    const scrollRef = useRef();

    useEffect(() => {
        let timer;
        if (!pause) {
            timer = setInterval(() => {
                setCurrImg((prevImg) =>
                    prevImg === CarouselData.length - 1 ? 0 : prevImg + 1
                );
            }, 3000);
        }
        return () => clearInterval(timer);
    }, [pause]);

    useEffect(() => {
        // Add event listener for scroll events
        const handleScroll = () => {
            setPause(true);
            setTimeout(() => setPause(false), 10000); // Pause for 10 seconds
        };
        const scrollDiv = scrollRef.current;
        scrollDiv.addEventListener("scroll", handleScroll);

        // Remove the event listener when the component unmounts
        return () => scrollDiv.removeEventListener("scroll", handleScroll);
    }, []); // Add it once when the component mounts

    return (
        // <div className="carousel">
        <div
            className="carousel"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
        >
            <div
                className="carouselInner"
                ref={scrollRef} // Use the ref here
            >
                <div
                    className="left"
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}
                >
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
                </div>
                <div className="center" style={{ backgroundImage: `url(${smilePicture})` }}>
                    <h1>{CarouselData[currImg].name}</h1>
                    <p>{CarouselData[currImg].published}</p>
                    <p>{CarouselData[currImg].content}</p>
                </div>
                <div
                    className="right"
                    onClick={() => {
                        currImg < CarouselData.length - 1 && setCurrImg(currImg + 1);
                    }}
                >
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
