// import { css } from "../../../styled-system/css";
// import {container, stack} from "../../../styled-system/patterns";
import {button} from "../../recipies/button.recipe.tsx";
// import { center } from "../../../styled-system/patterns"; 
// @ts-ignore
import {Motion as m} from "@motionone/solid"

export function popup() {
    return (
<m.a
          initial={{ opacity: 0 }}
          inView={{
            opacity: 1,
            y: [10, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          href="mailto:truegambitinquiries@gmail.com"
          class={button({ visual: "white", shape: "rounded" })}
        >
          Happy Halloween
        </m.a>

    );
}