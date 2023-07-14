import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../../data/carouselData";
import { useEffect, useState } from "react";

// multiple image loader
const partnerLogos = require.context(
    "../../assets/partnerLogo",
    false,
    /\.(svg)$/
);
const partnerLogoFiles = partnerLogos.keys().map(partnerLogos);

export default function PartnersCarousel() {
    const [swiperData, setSwiperData] = useState([]);

    useEffect(() => {
        setSwiperData(carouselData);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        swipeToSlide: true,
        className: "slider variable-width",
        variableWidth: true,
        centerMode: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <>
            <section className="partners">
                <p className="partners_title" style={{ marginBottom: "100px" }}>
                    Partners and Resources
                </p>
                <div>
                    <Slider {...settings} style={{ height: "220px" }}>
                        {swiperData.map((company, i) => (
                            <div
                                style={{
                                    maxHeight: "50px",
                                    maxWidth: "100px",
                                }}
                                key={i}
                            >
                                <a
                                    href={company.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {partnerLogoFiles.map((file, j) => {
                                        const name = file
                                            .split("/")
                                            .pop()
                                            .split(".")[0];
                                        if (name === company.fileName) {
                                            return (
                                                <img
                                                    key={j}
                                                    src={partnerLogoFiles[j]}
                                                    alt={company.name}
                                                    style={{
                                                        maxHeight: "100px",
                                                        maxWidth: "300px",
                                                        paddingLeft: "50px",
                                                    }}
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}
