import { For, JSX, Show } from "solid-js";
import { css } from "../../../styled-system/css";
import { container, grid, stack } from "../../../styled-system/patterns";
// @ts-ignore
import { Motion as m } from "@motionone/solid";

function Project({
  src,
  logo,
  link,
  isVideo,
}: {
  src: string;
  logo?: string;
  link?: string;
  isVideo: boolean;
}): JSX.Element {
  return (
    <Show
      when={!isVideo}
      fallback={
        <m.a
          initial={{ opacity: 0 }}
          inView={{
            opacity: 1,
            y: [40, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          href={link}
          target={"_blank"}
          class={css({
            pos: "relative",
            transition: "opacity 300ms ease-in-out",
            _hover: {
              opacity: 0.6,
              cursor: "pointer",
            },
            zIndex: 20,
          })}
        >
          {logo !== "" && (
            <img
              src={logo}
              alt="Anime Switch logo"
              class={css({
                pos: "absolute",
                zIndex: 50,
                w: {
                  base: "40%",
                  md: "60%",
                },
                h: "auto",
                insetX: 0,
                m: "auto",
                bottom: 4,
              })}
            />
          )}

          <video
            class={css({
              w: "full",
              h: "full",
              minH: "300px",
              rounded: "14px",
              objectFit: "cover",
              overflow: "hidden",
              pos: "relative",
              pointerEvents: "none",
            })}
            autoplay={true}
            loop={true}
            muted={true}
            src={src}
          />
        </m.a>
      }
    >
      <m.a
        initial={{ opacity: 0 }}
        inView={{
          opacity: 1,
          y: [40, 0],
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        href={link}
        target={"_blank"}
        class={css({
          w: "full",
          minH: "300px",
          rounded: "14px",
          bgSize: "cover",
          bgRepeat: "no-repeat",
          bgAttachment: "scroll",
          bgPosition: "center",
          overflow: "hidden",
        })}
        style={{
          "background-image": `url('${src}')`,
        }}
      ></m.a>
    </Show>
  );
}

type ProjectTypes = {
  src: string;
  logo?: string;
  link?: string;
  name: string;
  isVideo: boolean;
};

export function ProjectList(): JSX.Element {
  let defaultProject: ProjectTypes[] = [
    {
      src: "https://true-gambit-studio.b-cdn.net/project-1-video.mp4",
      name: "Anime Switch",
      logo: "https://true-gambit-studio.b-cdn.net/anime-switch-logo.png",
      link: "https://discord.gg/V4XVsgbA",
      isVideo: true,
    },
    {
      src: "https://true-gambit-toye.b-cdn.net/projects/ComingSoon.mp4",
      // src: "https://true-gambit-studio.b-cdn.net/project-not-exist-1.png",
      name: "Project 2",
      logo: "",
      isVideo: true,
    },
    {
      src: "https://true-gambit-toye.b-cdn.net/projects/ComingSoon.mp4",
      // src: "https://true-gambit-studio.b-cdn.net/project-not-exist-1.png",
      name: "Project 2",
      logo: "",
      isVideo: true,
    },
    {
      src: "https://true-gambit-toye.b-cdn.net/projects/ComingSoon.mp4",
      name: "Project 2",
      logo: "",
      isVideo: true,
    },
  ];

  return (
    <section
      id={"projects"}
      class={css({
        pt: 14,
        minH: "680px",
        w: "full",
        mb: 10,
      })}
    >
      <div class={container({ display: "block" })}>
        {/* Header: Title & Description */}
        <div
          class={stack({
            direction: {
              base: "column",
              md: "row",
            },
            alignItems: {
              base: "start",
              md: "center",
            },
            justifyContent: "space-between",
            w: "full",
            p: 4,
            gap: 4,
          })}
        >
          <m.h2
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
              fontWeight: "black",
            })}
          >
            Projects
          </m.h2>
          <m.p
            initial={{ opacity: 0 }}
            inView={{
              opacity: 1,
              y: [40, 0],
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            class={css({
              maxW: {
                base: "full",
                md: "400px",
                lg: "625px",
              },
              lineHeight: "24px",
              color: "rgba(255, 255, 255, .7)",
              transition: "all 200ms ease-in-out",
            })}
          >
            We’re excited to share with you our current projects. Our team is
            dedicated to delivering exceptional work and we’re proud of the
            amazing initiatives we’re working on right now.
          </m.p>
        </div>

        {/* Content: Project list */}
        <div
          class={grid({
            columns: {
              base: 1,
              md: 2,
              lg: 3,
              xl: 4,
            },
            mt: 10,
            minH: {
              base: "200px",
              sm: "465px",
            },
            w: "full",
            gap: {
              base: 4,
              md: 8,
            },
            transition: "all 400ms ease-in-out",
          })}
        >
          <For each={defaultProject}>
            {({ src, isVideo, logo, link }) => (
              <Project src={src} isVideo={isVideo} logo={logo} link={link} />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
