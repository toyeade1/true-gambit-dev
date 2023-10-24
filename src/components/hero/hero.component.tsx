import { css } from "../../../styled-system/css";
// @ts-ignore
import { Motion as m } from "@motionone/solid";

export function Hero() {
  return (
    <header
      class={css({
        transition: "all 300ms ease-in-out",
        maxH: {
          base: "400px",
          lg: "560px",
          "2xl": "700px",
        },
        h: "100dvh",
        w: "full",
        pos: "relative",
        overflow: "hidden",
      })}
    >
      {/* Overlay */}
      <div
        class={css({
          pos: "absolute",
          zIndex: "0",
          h: "full",
          w: "full",
          bgGradient: "to-t",
          gradientFrom: "black",
          gradientVia: "transparent",
          gradientTo: "transparent",
        })}
      ></div>

      <m.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: 1,
          y: [40, 0],
          transition: { duration: 1 },
        }}
        class={css({
          m: "auto",
          pos: "absolute",
          zIndex: "10",
          bottom: "0px",
          textAlign: "center",
          insetX: "0",
          lineHeight: {
            base: "38px",
            sm: "112%",
          },
          fontWeight: "black",
          fontFamily: "primary",
          fontSize: {
            base: "2rem",
            md: "3.4rem",
            lg: "4.5rem",
            xl: "5.08769rem",
          },
          maxW: {
            base: "500px",
            md: "850px",
            lg: "1126px",
          },
          w: "fit-content",
          px: {
            base: "18px",
            sm: "0",
          },
          transition: "all 200ms ease-in-out",
        })}
      >
        Seek The Risk.
        <br />
        Embrace Victory.
        <br /> True Gambit
      </m.h1>

      <video
        src="https://true-gambit-toye.b-cdn.net/newvid.mp4"
        autoplay={true}
        muted={true}
        loop={true}
        class={css({
          objectFit: "cover",
          objectPosition: "center ",
          h: "100dvh",
          w: "full",
        })}
      ></video>
    </header>
  );
}
