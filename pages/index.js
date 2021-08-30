import { useEffect } from "react";
import Head from "next/head";
import config from "../_data/config.json";

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
  }, []);

  return (
    <div>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Head>
    </div>
  );
}
