import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import HigherConnectionsCase from "./pages/HigherConnectionsCase";
import HeroJourneyCase from "./pages/HeroJourneyCase";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects/higher-connections",
    Component: HigherConnectionsCase,
  },
  {
    path: "/projects/heros-journey",
    Component: HeroJourneyCase,
  },
]);