import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ src, alt, className, style }) => {
    let boxImage;
    if (typeof src === "object") {
        boxImage = (
            <GatsbyImage
                image={getImage(src)}
                alt={alt}
                className={className}
                style={style}
            />
        );
    } else {
        boxImage = (
            <img
                src={src}
                alt={alt}
                className={className}
                style={style}
            />
        );
    }
    return boxImage;
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
    alt: PropTypes.string,
};

export default Image;
