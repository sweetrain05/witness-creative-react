import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import motionWrapper from "../wrapper/motionWrapper";

function Contact({ ascend }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Formspree Integration
    const [state, handleSubmit] = useForm("mjvdqojb");
    if (state.succeeded) {
        return (
            <p
                style={{
                    marginTop: "200px",
                    marginBottom: "200px",
                    textAlign: "center",
                    fontSize: "20px",
                }}
            >
                Thanks for your submission. <br />
                We will get back to you shortly!
            </p>
        );
    }

    return (
        <article className="page contactUs">
            <div className="contactUs_formSub">
                <motion.p variants={ascend} className="animate">
                    Tell us about your mission, and we'll get back to you right
                    away!
                </motion.p>
                <motion.div variants={ascend} className="form_input_container">
                    <form onSubmit={handleSubmit}>
                        <li>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </li>
                        <li>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </li>
                        <li>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder="Phone"
                            />
                        </li>
                        <li>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Please tell us a bit about your mission"
                                required
                            />
                        </li>
                        <li>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="send_btn"
                            >
                                Send
                            </button>
                        </li>
                    </form>
                </motion.div>
            </div>
        </article>
    );
}

export default motionWrapper(Contact);
