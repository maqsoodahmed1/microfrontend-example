import React from "react";
import Slider, { Settings } from "react-slick";
import { cn } from "../../../../helpers/general.helpers";

interface MultiCardCarouselProps {
    children: React.ReactNode;
    settings?: Settings;
    className?: string
}

/**
 * Default settings for the MultiCardCarousel.
 */
const defaultSettings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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

/**
 * MultiCardCarousel component
 */
const MultiCardCarousel: React.FC<MultiCardCarouselProps> = ({
    children,
    settings,
    className,
}) => {
    const carouselSettings = { ...defaultSettings, ...settings };

    return (
        <div className={cn("w-full px-5", className)}>
            <Slider {...carouselSettings}>
                {React.Children.map(children, (child) => (
                    <div className="px-1.5 box-border">{child}</div>
                ))}
            </Slider>
        </div>
    );
};

export default MultiCardCarousel;
