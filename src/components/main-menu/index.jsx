import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-scroll";
import cn from "clsx";
import Icon from "@ui/icon";
import { useLocation } from "@reach/router";
import { MenuType } from "@utils/types";
import { Link } from "gatsby";

const MainMenu = ({ menus, className, navId }) => {
    const location = useLocation();

    return (
        <nav
            id={navId}
            className={cn("mainmenu-nav navbar-example2", className)}
        >
            <ul className="primary-menu nav nav-pills">
                {menus.map(({ id, text, path, icon }) => (
                    <li key={id} className="nav-item">
                        <Link
                            // activeClass="active"
                            // active="active"
                            className={`nav-link smooth-animation ${
                                location.pathname === path ? "active" : ""
                            }`}
                            // href={`${path}`}
                            to={path}
                            // spy={true}
                            // smooth={true}
                            // offset={-50}
                            // duration={500}
                        >
                            {icon && <Icon name={icon} />}
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

MainMenu.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape(MenuType)).isRequired,
    navId: PropTypes.string,
    className: PropTypes.string,
};

MainMenu.defaultProps = {
    navId: "sideNav",
};

export default MainMenu;
