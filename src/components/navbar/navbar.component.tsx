import { css } from "../../../styled-system/css";
import { createSignal } from "solid-js";
import { container, stack } from "../../../styled-system/patterns";
import { button } from "../../recipies/button.recipe.tsx";

export function Navbar() {
// here we are creating the getter and the setter
  const [isPopupVisible, setPopupVisible] = createSignal(false);
  // this is a function that will toggle the popup
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible());
  };
  return (
    <div>
    <nav
      class={css({
        h: "88px",
        w: "100%",
        display: "flex",
        alignItems: "center",
        bgGradient: "to-b",
        gradientFrom: "black",
        gradientTo: "transparent",
        position: "fixed",
        fontFamily: "primary",
        zIndex: 20,
      })}
    >
      <div
        class={container({
          w: "full",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <a href="#">
          <img
            src="https://true-gambit-studio.b-cdn.net/true-gambit-logo.svg"
            class={css({
              minW: "123px",
            })}
            alt="True Gambit logo"
          />
        </a>

        <ul
          class={stack({
            direction: "row",
            gap: "34px",
            hideBelow: "md",
          })}
        >
          <li>
            <a href={"#projects"}>Projects</a>
          </li>
          <li>
            <a href={"#about"}>About</a>
          </li>
          <li>
            <a href={"#team"}>Team</a>
          </li>
        </ul>

        <ul
          class={stack({
            direction: "row",
            gap: "24px",
          })}
        >
          <li>
            <a
              class={button({ visual: "white", shape: "rounded" })}
              href="mailto:truegambitinquiries@gmail.com"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a class={button({ visual: "halloween", shape: "rounded" })} onClick={togglePopup}>
              🎃
            </a>
          </li>
        </ul>
      </div>
    </nav>

  {isPopupVisible() && (
          <div
            class={css({
              width: "520px",
              height: "520px",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              borderRadius: "10px",
              zIndex: 30,
            })}
          >
            <p>Happy Halloween from the True Gambit family!</p>
            <img
              src="src/assets/halloweenimg.jpg"
              alt="Halloween background"
              class={css({
                maxWidth: "100%",
                height: "auto",
              })}
            />
            <button onClick={togglePopup}>Close</button>
          </div>
        )}
    </div>
  );
}
