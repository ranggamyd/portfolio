import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import ContactArea from "@containers/contact/layout-01";
import React, { useState, useEffect } from "react";

const ContactPage = ({ data }) => {
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
                    <ContactArea
                        data={{
                            ...content["contact-section"],
                            socials: data.site.siteMetadata.socials,
                            phone: data.site.siteMetadata?.contact?.phone,
                            email: data.site.siteMetadata?.contact?.email,
                            getform_url: data.site.siteMetadata?.getform_url,
                        }}
                    />
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

ContactPage.propTypes = {
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

export default ContactPage;
