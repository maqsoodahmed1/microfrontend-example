import React from "react";
import Slider, { Settings } from "react-slick";
import { cn } from "../../../../helpers/general.helpers";
import { ArrowDownThin } from "../../../../assets/icons";

interface MultiCardCarouselProps {
    children: React.ReactNode;
    settings?: Settings;
    className?: string
}

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                left: "-25px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <ArrowDownThin className={cn("rotate-90 text-gray-600 hover:text-gray-800 cursor-pointer",
                {
                    "opacity-50 cursor-not-allowed": className.includes("slick-disabled"),
                }
            )} />
        </div>
    );
};

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                right: "-25px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <ArrowDownThin className={cn("-rotate-90 text-gray-600 hover:text-gray-800 cursor-pointer", {
                "opacity-50 cursor-not-allowed": className.includes("slick-disabled"),
            })} />
        </div>
    );
};

const 
defaultSettings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const MultiCardCarousel: React.FC<MultiCardCarouselProps> = ({
    children,
    settings,
    className,
}) => {
    const carouselSettings = { ...defaultSettings, ...settings };

    return (
        <div className={cn("w-full", className)}>
            <Slider {...carouselSettings}>
                {React.Children.map(children, (child) => (
                    <div className="px-1.5 box-border">{child}</div>
                ))}
            </Slider>
        </div>
    );
};

export default MultiCardCarousel;
