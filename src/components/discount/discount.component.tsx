import {
  center,
  container,
  stack,
  vstack,
} from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";
import { button } from "../../recipies/button.recipe.tsx";
// @ts-ignore
import { Motion as m } from "@motionone/solid";

export function Discount() {
  return (
    <section
      class={center({
        minH: "296px",
        w: "full",
      })}
    >
      <div
        class={container({
          w: "full",
          maxW: "1126px",
        })}
      >
        <m.div
          initial={{ opacity: 0 }}
          inView={{
            opacity: 1,
            y: [40, 0],
          }}
          transition={{
            duration: 1,
          }}
          class={stack({
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            bg: "white",
            w: "full",
            h: "fit-content",
            maxH: "138px",
            rounded: "24px",
            py: {
              base: "16px",
              sm: "24px",
            },
            px: {
              base: "24px",
              sm: "34px",
            },
            pos: "relative",
            zIndex: 1,
            overflow: {
              base: "hidden",
              md: "visible",
            },
          })}
        >
          <div
            class={vstack({
              gap: 5,
              alignItems: "start",
              h: "fit-content",
            })}
          >
            <h2
              class={css({
                color: "black",
                fontSize: {
                  base: "24px",
                  lg: "32px",
                },
                lineHeight: {
                  base: "32px",
                  sm: "none",
                },
                w: "full",
                maxW: {
                  base: "80%",
                  sm: "100%",
                },
                transition: "width 200ms ease-in-out",
                fontWeight: "black",
              })}
            >
              Join the Anime Switch community
            </h2>

            <a
              href="https://discord.gg/V4XVsgbA"
              target={"_blank"}
              class={button({ visual: "black", shape: "rounded" })}
            >
              Join us now
            </a>
          </div>
          <div
            class={css({
              h: "full",
              maxH: "138px",
              overflow: "hidden",
              rounded: "24px",
            })}
          >
            <img
              src="https://true-gambit-studio.b-cdn.net/anime-switch-logo.png"
              class={css({
                pos: "absolute",
                zIndex: 10,
                right: 0,
                bottom: 0,
                roundedBottomRight: "24px",
                w: {
                  base: "150px",
                  md: "290px",
                },
                transition: "all 400ms ease-in-out",
              })}
              width={290}
              alt="Guy wearing VR"
            />

            <img
              src="https://true-gambit-studio.b-cdn.net/discount-bg.png"
              class={css({
                pos: "absolute",
                bottom: 0,
                zIndex: -1,
                maxH: {
                  base: "full",
                  sm: "132px",
                  lg: "138px",
                },
                right: 8,
                hideBelow: "sm",
                transition: "all 400ms ease-in-out",
              })}
              height={138}
              alt="Gray circle"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
