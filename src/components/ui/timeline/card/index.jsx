import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import cn from "clsx";

const TimelineCard = ({
    title,
    subtitle,
    images,
    url,
    desc,
    layout,
    className,
}) => {
    return (
        <div className={cn("resume-single-list", className)}>
            <div
                className={cn(
                    "inner",
                    layout === 2 && "psudo-after-none psudo-after-none"
                )}
            >
                <div className="heading">
                    {images?.[0]?.src && (
                        <Image
                            src={images[0].src}
                            alt={images[0]?.alt || title}
                            style={{
                                width: "60px",
                                objectFit: "cover",
                            }}
                        />
                    )}
                    <div className="title">
                        <h4>{title}</h4>
                        <span>{subtitle}</span>
                    </div>
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            className="date-of-time ms-auto"
                        >
                            <span>View Credential</span>
                        </a>
                    )}
                </div>
                <p className="description" style={{ textAlign: "justify" }}>
                    {desc}
                </p>
            </div>
        </div>
    );
};

TimelineCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    desc: PropTypes.string.isRequired,
    className: PropTypes.string,
    layout: PropTypes.oneOf([1, 2]),
};

TimelineCard.defaultProps = {
    layout: 1,
};

export default TimelineCard;
