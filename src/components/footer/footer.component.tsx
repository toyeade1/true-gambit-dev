import { container, stack } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

export function Footer() {
  return (
    <footer
      class={container({
        bg: "black",
        px: 4,
        py: 8,
        fontFamily: "primary",
      })}
    >
      <div
        class={stack({
          direction: {
            base: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
        })}
      >
        <a href="#">
          <img
            src="https://true-gambit-studio.b-cdn.net/true-gambit-logo.svg"
            class={css({
              opacity: 0.5,
            })}
            width={120}
            alt=""
          />
        </a>

        <p
          class={css({
            fontSize: "xs",
            color: "rgba(255, 255, 255, 0.5)",
          })}
        >
          © 2023 True Gambit. All rights reserved
        </p>
      </div>
    </footer>
  );
}
