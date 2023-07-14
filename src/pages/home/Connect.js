import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import motionWrapper from "../../wrapper/motionWrapper";
import SubscriptionForm from "../../components/SubscriptionForm";

function Connect({ ascend }) {
    return (
        <section className="connect">
            <NavLink className="nav-link" aria-current="page" to="/contact">
                <div className="connect_circle">
                    <motion.p
                        variants={ascend}
                        className="goToContact animate fadeIn-ascend"
                    >
                        <span>We</span> can help, let's connect.
                    </motion.p>
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
    );
}
export default motionWrapper(Connect);
