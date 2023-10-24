import { center } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";
import { button } from "../../recipies/button.recipe.tsx";
// @ts-ignore
import { Motion as m } from "@motionone/solid";

export function Contact() {
  return (
    <section
      class={center({
        bg: "#0B0B0B",
        minH: "449px",
      })}
    >
      <div
        class={css({
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          maxW: "546px",
          px: 4,
          textAlign: "center",
        })}
      >
        <m.h1
          initial={{ opacity: 0 }}
          inView={{
            opacity: 1,
            y: [40, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          class={css({
            fontSize: {
              base: "2rem",
              md: "3rem",
            },
            lineHeight: {
              base: "normal",
              md: "67.2px",
            },
            fontWeight: "black",
            textAlign: "center",
            maxW: {
              base: "full",
              sm: "600px",
              md: "832px",
            },
          })}
        >
          Let’s work together
        </m.h1>
        <m.p
          initial={{ opacity: 0 }}
          inView={{
            opacity: 1,
            y: [20, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          class={css({
            mt: 4,
            maxW: "full",
            lineHeight: "24px",
            color: "rgba(255, 255, 255, .7)",
            transition: "all 200ms ease-in-out",
          })}
        >
          Please fill out our inquiry Google form and we will get back to you as
          soon as possible.
        </m.p>

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
          Contact Us
        </m.a>
      </div>
    </section>
  );
}
