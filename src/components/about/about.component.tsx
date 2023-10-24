import { css } from "../../../styled-system/css";
import { container, stack, vstack } from "../../../styled-system/patterns";
// @ts-ignore
import { Motion as m } from "@motionone/solid";

export function About() {
  return (
    <section
      id={"about"}
      class={css({
        minH: "600px",
        w: "full",
        mb: 10,
        bg: "#0B0B0B",
        py: 10,
      })}
    >
      <div class={container({ display: "block" })}>
        <div
          class={stack({
            direction: {
              base: "column",
              lg: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          })}
        >
          <div
            class={vstack({
              gap: {
                base: 4,
                sm: 8,
              },
              alignItems: "start",
              maxW: {
                base: "full",
                lg: "486px",
              },
            })}
          >
            <m.span
              initial={{ opacity: 0 }}
              inView={{
                opacity: 1,
                y: [20, 0],
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              class={css({
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "14px",
                letterSpacing: "4px",
                fontFamily: "primary",
              })}
            >
              ABOUT US
            </m.span>
            <m.h2
              initial={{ opacity: 0 }}
              inView={{
                opacity: 1,
                y: [40, 0],
              }}
              transition={{
                duration: 1,
                delay: 0.1,
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
              })}
            >
              Veteran Gamers Building Experiences
            </m.h2>
            <m.p
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
                maxW: "full",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, .7)",
                transition: "all 200ms ease-in-out",
              })}
            >
              We are true gambit, a game development team that loves taking bold
              risks to create immersive games. Our debut project, Anime Switch,
              is coming soon with innovative gameplay and stunning details. We
              aim to make our mark on Roblox and beyond. Join us as we seek the
              risk and embrace the victory. True Gambit.
            </m.p>
          </div>

          <m.video
            initial={{ opacity: 0 }}
            inView={{
              opacity: 1,
              x: [100, 0],
              scale: [0.8, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            src="https://true-gambit-studio.b-cdn.net/about.mp4"
            loop={true}
            autoplay={true}
            muted={true}
            class={css({
              w: "full",
              h: "auto",
              objectFit: "cover",
              maxW: {
                base: "full",
                lg: "500px",
                xl: "597px",
              },
              maxH: {
                base: "400px",
                lg: "620px",
              },
              minH: {
                base: "400px",
                lg: "620px",
              },
            })}
          />
        </div>
      </div>
    </section>
  );
}
