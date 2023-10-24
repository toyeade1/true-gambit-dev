import { center, hstack } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";
import { JSX } from "solid-js";
// @ts-ignore
import { Motion as m } from "@motionone/solid";

function Member({
  src,
  name,
  role,
  robloxProfile,
}: {
  src: string;
  name: string;
  role: string;
  robloxProfile?: string;
}): JSX.Element {
  return (
    <m.div
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
        minW: "113px",
        minH: "113px",
        textAlign: "center",
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        _first: {
          gridColumn: {
            base: "1",
            md: "full",
          },
        },
      })}
    >
      <img
        src={src}
        class={css({
          bg: "gray.700",
          minW: "113px",
          minH: "113px",
          maxW: "113px",
          rounded: "full",
          mb: 4,
          mx: "auto",
        })}
        alt={name}
      />

      <div
        class={css({
          minH: 100,
          display: "flex",
          flexDir: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <p>{name}</p>
        <span
          class={css({
            fontSize: "xs",
            color: "gray.400",
          })}
        >
          {role}
        </span>

        <div
          class={hstack({
            gap: 4,
            mt: 4,
          })}
        >
          {robloxProfile !== "" && (
            <a
              href={robloxProfile}
              target={"_blank"}
              class={css({
                _hover: { cursor: "pointer", opacity: 0.8 },
              })}
            >
              <img
                src="https://true-gambit-studio.b-cdn.net/icon--roblox.svg"
                width={20}
                height={20}
                alt="Roblox icon"
              />
            </a>
          )}
        </div>
      </div>
    </m.div>
  );
}

type teamTypes = {
  name: string;
  role: string;
  robloxProfile: string;
  robloxProfilePicture: string;
};

const team: teamTypes[] = [
  {
    name: "Kahtom",
    role: "Full Stack Developer/Founder",
    robloxProfile: "https://www.roblox.com/users/86490609/profile",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/Kahtom.png",
  },
  {
    name: "TBOY",
    role: "Co-Founder/Web Developer",
    robloxProfile: "",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/AStrongMuscle.png",
  },
  {
    name: "ItzYaBoy_Z",
    role: "Co-Founder",
    robloxProfile: "https://www.roblox.com/users/18654975/profile",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/Itzyaboy_Z.png",
  },
  {
    name: "Tatsutamos",
    role: "Lead Developer",
    robloxProfile: "https://www.roblox.com/users/8566674/profile",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/Tatsutamos.png",
  },
  {
    name: "AStrongMuscle",
    role: "Development Manager",
    robloxProfile: "https://www.roblox.com/users/822999/profile",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/AStrongMuscle.png",
  },
  {
    name: "Protall",
    role: "Back-end Developer",
    robloxProfile: "https://www.roblox.com/users/37975670/profile",
    robloxProfilePicture:
      "https://tr.rbxcdn.com/9930277e272f59de94ca625a83fb8b01/150/150/AvatarHeadshot/Png",
  },
  {
    name: "MyrouZin",
    role: "Builder/Modeller",
    robloxProfile: "https://www.roblox.com/users/55349158/profile",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/Myrouzin.png",
  },
  /*{
    name: "McTysson",
    role: "Animator/VFXer",
    robloxProfile: "https://www.roblox.com/users/103958757/profile",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/McTysson.png",
  },*/
  {
    name: "Superzcz",
    role: "VFXer",
    robloxProfile: "https://www.roblox.com/users/188403787/profile",
    robloxProfilePicture:
      "https://true-gambit-studio.b-cdn.net/team/Superzcz.png",
  },
];
export function Team(): JSX.Element {
  const rows = Math.ceil((team.length - 1) / 4 ) + 1;
  return (
    <section
      id={"team"}
      class={center({
        minH: {
          base: "300px",
          sm: "600px",
        },
        maxW: "832px",
        mx: "auto",
        display: "flex",
        flexDir: "column",
        gap: 8,
        px: 4,
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
        The True Gambit Team
      </m.h1>

      
      <div
        class={css({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // Center rows horizontally
        })}
      >
        <div
          class={css({
            display: "flex",
            justifyContent: "center",
            gap: {
              base: 16,
              md: 32,
            },
            width: "100%",
            boxSizing: "border-box",
          })}
        >
          <Member
            src={team[0].robloxProfilePicture}
            name={team[0].name}
            role={team[0].role}
            robloxProfile={team[0].robloxProfile}
          />
        </div>

        {Array.from({ length: rows - 1 }, (_, rowIndex) => (
          <div
            class={css({
              display: "flex",
              justifyContent: "center",
              gap: {
                base: 16,
                md: 32,
              },
              width: "100%",
              boxSizing: "border-box",
            })}
          >
            {team
              .slice(rowIndex * 4 + 1, rowIndex * 4 + 5) // Get up to 4 team members for this row
              .map(
                ({ name, role, robloxProfilePicture, robloxProfile }: teamTypes) => (
                  <Member
                    src={robloxProfilePicture}
                    name={name}
                    role={role}
                    robloxProfile={robloxProfile}
                  />
                )
              )}

          </div>
        ))}
      </div>
    </section>
  );
}
