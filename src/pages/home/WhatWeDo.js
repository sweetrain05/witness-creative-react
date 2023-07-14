import WhatWeDo1 from "../home/WhatWeDo1";
import WhatWeDo2 from "../home/WhatWeDo2";
import WhatWeDo3 from "../home/WhatWeDo3";
import WhatWeDo4 from "../home/WhatWeDo4";

export default function WhatWeDo() {
    return (
        <section className="what-we-do">
            <p className="what-we-do_title animate fadeIn-ascend">what we do</p>
            <div className="what-we-do_articles">
                <WhatWeDo1 />
                <WhatWeDo2 />
                <WhatWeDo3 />
                <WhatWeDo4 />
            </div>
        </section>
    );
}
