import Intro from "./home/Intro";
import WhatWeDo from "./home/WhatWeDo";
import PartnersCarousel from "./home/PartnersCarousel";
import Connect from "./home/Connect";

export default function Home() {
    return (
        <article className="page home">
            <Intro />
            <WhatWeDo />
            <PartnersCarousel />
            <Connect />
        </article>
    );
}
