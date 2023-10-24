import { wrap } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";
// @ts-ignore
import { Motion as m } from "@motionone/solid";

export function Category() {
  return (
    <section
      class={wrap({
        gap: {
          base: 2,
          sm: 4,
        },
        py: "16px",
        minH: "100px",
        pos: "relative",
        alignItems: "center",
        justifyContent: "center",
        fontSize: {
          base: "14px",
          sm: "16px",
        },
      })}
    >
      <m.p
        initial={{ opacity: 0 }}
        inView={{
          opacity: 1,
          y: [40, 0],
        }}
        class={css({
          maxW: {
            base: "90%",
            sm: "700px",
          },
          opacity: 0.8,
          textAlign: "center",
        })}
      >
        Striving to pioneer unforgettable experiences, we aspire to forge gaming
        adventures that celebrate the courage to venture into the unknown,
        fostering unforgettable journeys.
      </m.p>{" "}
    </section>
  );
}
