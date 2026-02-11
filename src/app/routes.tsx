import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Features } from "./pages/Features";
import { Pricing } from "./pages/Pricing";
import { PrivacySecurity } from "./pages/PrivacySecurity";
import { Support } from "./pages/Support";
import { Blog } from "./pages/Blog";
import { Legal } from "./pages/Legal";
import { OurStory } from "./pages/OurStory";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "how-it-works", Component: HowItWorks },
      { path: "features", Component: Features },
      { path: "pricing", Component: Pricing },
      { path: "privacy", Component: PrivacySecurity },
      { path: "support", Component: Support },
      { path: "blog", Component: Blog },
      { path: "legal/terms", Component: Legal },
      { path: "legal/privacy", Component: Legal },
      { path: "our-story", Component: OurStory },
      { path: "*", Component: NotFound },
    ],
  },
]);