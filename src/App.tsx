import type { Component } from "solid-js";
import { css } from "../styled-system/css";
// @ts-ignore
import { Motion as m } from "@motionone/solid";
// Components
import { Navbar } from "./components/navbar/navbar.component.tsx";
import { Hero } from "./components/hero/hero.component.tsx";
import { Category } from "./components/category/category.component.tsx";
// import { Discount } from "./components/discount/discount.component.tsx";
import { ProjectList } from "./components/project-list/projects.component.tsx";
import { About } from "./components/about/about.component.tsx";
import { Team } from "./components/team/team.component.tsx";
import { Contact } from "./components/contact/contact.component.tsx";
import { Footer } from "./components/footer/footer.component.tsx";

const App: Component = () => {
  return (
    <>
      <Navbar />

      <main
        class={css({
          w: "full",
          h: "auto",
        })}
      >
        <Hero />
        <Category />
        {/*<Discount />*/}
        <ProjectList />
        <About />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
