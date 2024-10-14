import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-01";
import ResumeArea from "@containers/resume/layout-01";
import ContactArea from "@containers/contact/layout-01";
import EducationArea from "@containers/education/layout-01";
import SkillArea from "@containers/skill/layout-01";
import SkillArea3 from "@containers/skill/layout-03";
import ExperienceArea from "@containers/experience/layout-01";
import CertificateArea from "@containers/certificate/layout-01";
import PortfolioArea from "@containers/portfolio/layout-01";
import React, { useState, useEffect } from "react";

const ResumePage = ({ data }) => {
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
                <HeroArea
                    data={{
                        ...content["hero-section"],
                        socials: data.site.siteMetadata.socials,
                    }}
                />
                <SkillArea3 data={content["skill-section3"]} />
                <ResumeArea data={content["resume-section"]}>
                    <EducationArea data={content["education-section"]} />
                    <SkillArea data={content["skill-section"]} />
                    <ExperienceArea data={content["experience-section"]} />
                    <CertificateArea data={content["certificate-section"]} />
                </ResumeArea>
                <PortfolioArea data={content["portfolio-section"]} />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                />
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

ResumePage.propTypes = {
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

export default ResumePage;
