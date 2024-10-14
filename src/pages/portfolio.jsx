import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PortfolioArea from "@containers/portfolio/layout-01";
import React, { useState, useEffect } from "react";

const PortfolioPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme(localStorage.getItem("theme") || "");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "" ? "white-version" : "";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <Layout pageTitle="Home" className={theme}>
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <main className="main-page-wrapper">
                <div style={{ paddingTop: "110px" }}>
                    <PortfolioArea data={content["portfolio-section"]} />
                </div>
            </main>
            <Footer data={{ ...data.footer }} className="section-separator" />
        </Layout>
    );
};

export const query = graphql`
    query DefaultPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-1" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "default-home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

PortfolioPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default PortfolioPage;
