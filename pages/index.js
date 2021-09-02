import { useEffect } from "react";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import Head from "next/head";
import config from "../_data/config.json";
import LandingPage from "../components/LandingPage";

const renderer = createRenderer();

export default function Home() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }

    if (window.CMS) {
      CMS.registerPreviewTemplate("landingPage", LandingPage);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RendererProvider renderer={renderer}>
        <LandingPage />
      </RendererProvider>
    </div>
  );
}
