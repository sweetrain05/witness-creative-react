import { NavLink } from "react-router-dom";
import PartnersCarousel from "../components/PartnersCarousel";
import SubscriptionForm from "../components/SubscriptionForm";
import { motion } from "framer-motion";

const images = require.context("../assets/img", false, /\.(jpg|jpeg|png)$/);
const imageFiles = images.keys().map(images);

export default function Home() {
    const ascend = {
        offscreen: {
            y: 20,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <article className="page home">
            <section className="intro">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    // viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.p
                        variants={ascend}
                        className="intro_statement animate fadeIn-ascend"
                    >
                        We connect great minds so that dreams become reality.
                    </motion.p>

                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/contact"
                    >
                        <button className="intro_btn_contact goToContact">
                            ⇀ contact us
                        </button>
                    </NavLink>
                    <div className="intro_img_container">
                        <motion.img
                            variants={ascend}
                            className="animate fadeIn-ascend-s1"
                            src={imageFiles[5]}
                            alt="meeting"
                        />
                        <motion.img
                            variants={ascend}
                            className="animate fadeIn-ascend-s1"
                            src={imageFiles[6]}
                            alt="office"
                        />
                        <svg
                            className="animate fadeIn-ascend-s2"
                            width={130}
                            height={130}
                            viewBox="0 0 130 130"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={65} cy={65} r={65} fill="#FF6565" />
                        </svg>
                    </div>
                </motion.div>
            </section>
            <section className="what-we-do">
                <p className="what-we-do_title animate fadeIn-ascend">
                    what we do
                </p>
                <div className="what-we-do_articles">
                    <article className="what-we-do_1">
                        <div className="animate fadeIn-appearFromLeft">
                            <h3>Business development for startups</h3>
                            <p>
                                We have diligently pioneered the establishment
                                of inaugural revenue streams for startups,
                                methodically forging connections and uncovering
                                hidden gems of opportunity. We wholeheartedly
                                champion industrious founders, consistently
                                advocating for their vision, and persistently
                                driving financial success. We recognize the
                                paramount importance of securing initial
                                revenue, and we consider it a privilege to
                                contribute to extraordinary entrepreneurial
                                odysseys.
                            </p>
                        </div>
                        <img
                            className="animate fadeIn-appearFromRight"
                            src={imageFiles[1]}
                            alt="ascending stairs"
                        />
                    </article>
                    <article className="what-we-do_2">
                        <div className="animate fadeIn-appearFromRight">
                            <h3>Capital raising advisory consulting</h3>
                            <p>
                                The symbiotic relationship between capital
                                raising and business development is inherent
                                within fast-growing startups. We possess a
                                comprehensive grasp of this intricate dynamic
                                and work closely with our partners to navigate
                                the transformative moments with meticulous
                                preparation. We remain steadfast in our
                                commitment to support our partners through all
                                circumstances, unwavering in our dedication to
                                their success, come rain or shine.
                            </p>
                        </div>
                        <img
                            className="animate fadeIn-appearFromLeft"
                            src={imageFiles[2]}
                            alt="active discussion"
                        />
                    </article>
                    <article className="what-we-do_3">
                        <div className="animate fadeIn-appearFromLeft">
                            <h3>
                                Commercializing the innovation: Biotech-based
                                cosmetics ingredients
                            </h3>
                            <p>
                                We have adeptly executed numerous business
                                development projects, among them being the
                                pioneering venture into cosmetics ingredient
                                products. As a result, we have become esteemed
                                providers of exceptionally distinctive and
                                groundbreaking cosmetics ingredients to our
                                esteemed global partners. If your beauty brand
                                prides itself on innovation or if you aspire to
                                showcase your inventive ingredients to the
                                world, we are poised to collaboratively forge a
                                pathway to success.
                            </p>
                        </div>
                        <img
                            className="animate fadeIn-appearFromRight"
                            src={imageFiles[3]}
                            alt="biology lab"
                        />
                    </article>
                    <article className="what-we-do_4">
                        <div className="animate fadeIn-appearFromRight">
                            <h3>Climate technology business operations</h3>
                            <p>
                                Our unwavering commitment to business
                                development has resulted in the successful
                                implementation and management of vital battery
                                technologies. Moreover, we have expanded our
                                operations to the United States, leveraging our
                                expertise gained in Asia to propose improved
                                alternatives to established industry players.
                            </p>
                        </div>
                        <img
                            className="animate fadeIn-appearFromLeft"
                            src={imageFiles[4]}
                            alt="eco cube"
                        />
                    </article>
                </div>
            </section>
            <section className="partners">
                <p className="partners_title" style={{ marginBottom: "100px" }}>
                    Partners and Resources
                </p>
                <PartnersCarousel />
            </section>
            <section className="connect">
                <NavLink className="nav-link" aria-current="page" to="/contact">
                    <div className="connect_circle">
                        <p className="goToContact animate fadeIn-ascend">
                            <span>We</span> can help, let's connect.
                        </p>
                        <svg
                            width={267}
                            height={267}
                            viewBox="0 0 267 267"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="133.5"
                                cy="133.5"
                                r="133.5"
                                fill="#FF6565"
                            />
                        </svg>
                    </div>
                </NavLink>
                <SubscriptionForm />
            </section>
        </article>
    );
}
