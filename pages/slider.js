import React from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(
    () => import("react-owl-carousel"),
    { ssr: false }
)

const projects = require("../public/asset/data/projects.json");

export default function Slider() {

    const Responsive = {
        0: {
            items: 1.25,
            margin: 5
        },
        580: {
            items: 1.5,
            margin: 10
        },
        768: {
            items: 2.25,
            margin: 10
        },
        900: {
            items: 2.5,
            margin: 10
        },
        1200: {
            items: 3.25,
            margin: 20
        },
        1400: {
            items: 3.25,
            margin: 20
        },
    }

    return <div id="slider">
        <OwlCarousel
            loop
            center={true}
            autoplay={true}
            // nav={false}
            // dots={false}
            responsive={Responsive}
            autoplayTimeout={5000}
            autoplaySpeed={2000}
            autoplayHoverPause={2000}
        >
            {projects.map((p, k) => {
                return (
                    <div className="item" key={k}>
                        <img src={p.image}/>
                        <div className="item-description text-xs md:text-sm">
                            <b>{p.title}</b>
                            <p>{p.description}</p>
                            <a href={p.type === "Private" ? "#" : p.link} target="_blank" className={"button inline-flex items-center px-3 py-1 md:px-4 md:py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white "+p.type}>{(p.type === "Public" ? "Visit" : "Private")+" Website"}</a>
                        </div>
                    </div>    
                )
            })}
        </OwlCarousel>
    </div>;
}