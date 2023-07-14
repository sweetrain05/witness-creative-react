import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const motionWrapper = (Component) => () => {
    const ascend = {
        hidden: {
            y: 30,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    const toLeft = {
        hidden: {
            x: 30,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    const toRight = {
        hidden: {
            x: -30,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div ref={ref} initial="hidden" animate={control}>
            <Component ascend={ascend} toRight={toRight} toLeft={toLeft} />
        </motion.div>
    );
};

export default motionWrapper;
