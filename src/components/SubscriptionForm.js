export default function SubscriptionForm() {
    return (
        <div className="connect_emailSub">
            <p className="animate fadeIn-descend">Join the mail list</p>
            <div className="email_input">
                {/* Begin Mailchimp Signup Form */}
                <div id="mc_embed_signup">
                    <form
                        action="https://witnesspartners.us14.list-manage.com/subscribe/post?u=d9a81e0e0ec9f0ea34b780173&id=c29869701a&f_id=006d81e0f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        noValidate
                    >
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <input
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Enter your email here"
                                    className="required email"
                                    id="mce-EMAIL"
                                    required
                                />
                                <button
                                    type="submit"
                                    value="Join"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                >
                                    Join
                                </button>
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div
                                    className="response"
                                    id="mce-error-response"
                                    style={{ display: "none" }}
                                />
                                <div
                                    className="response"
                                    id="mce-success-response"
                                    style={{ display: "none" }}
                                />
                            </div>
                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "-5000px",
                                }}
                                aria-hidden="true"
                            >
                                <input
                                    type="text"
                                    name="b_d9a81e0e0ec9f0ea34b780173_c29869701a"
                                    tabIndex={-1}
                                    defaultValue
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/*End mc_embed_signup*/}
            </div>
        </div>
    );
}
