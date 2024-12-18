import React from "react";
import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line import/no-named-as-default
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType, HeadingType, ButtonType } from "@utils/types";

const HeroArea = ({ data, id }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    return (
        <section
            id={id}
            className="slider-style-6 web-developer height--100 rn-section-gap align-items-center with-particles"
            data-black-overlay="5"
            style={{ height: "100vh" }}
        >
            <Particles
                id="particles-js"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            detect_on: "canvas",
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 800,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    particles: {
                        number: {
                            value: 20,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: ["#fff"],
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 4,
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 0.8,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {data?.images?.[0]?.src && (
                <div className="hero-img w-100 h-100">
                    <Image
                        className="w-100 h-100"
                        src={data.images[0].src}
                        alt={data.images[0]?.alt || "Hero"}
                    />
                </div>
            )}
            <div className="wrapper" style={{ minWidth: "90vw" }}>
                <div className="container">
                    <div className="row">
                        <div className="banner-inner">
                            {data?.headings?.[0] && (
                                <h1
                                    className="fs--100"
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0].content,
                                    }}
                                />
                            )}
                            {data?.animated_texts && (
                                <span className="header-caption" id="page-top">
                                    <span className="cd-headline clip is-full-width">
                                        <span>I am a </span>{" "}
                                        <Typewriter
                                            words={data.animated_texts}
                                            loop
                                            cursor
                                        />
                                    </span>
                                </span>
                            )}
                            <div className="button-area">
                                {data?.buttons?.map((btn) => (
                                    <Button
                                        key={btn.id}
                                        className={btn.className}
                                        path={btn.path}
                                    >
                                        <span>{btn.content}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        animated_texts: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
