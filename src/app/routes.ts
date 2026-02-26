import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import HigherConnectionsCase from "./pages/HigherConnectionsCase";
import HeroJourneyCase from "./pages/HeroJourneyCase";
import GeminiCampaignCase from "./pages/GeminiCampaignCase";

export const router = createBrowserRouter(
  [
    { path: "/", Component: Home },
    { path: "/projects/higher-connections", Component: HigherConnectionsCase },
    { path: "/projects/heros-journey", Component: HeroJourneyCase },
    { path: "/projects/gemini", Component: GeminiCampaignCase },
  ],
  {
    // Automatically becomes "/" locally and "/Nergal-Website/" on GitHub Pages
    basename: import.meta.env.BASE_URL,
  }
);
