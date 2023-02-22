import React from "react";
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-66HMYFDEZE"
    ></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-66HMYFDEZE');
      `}
    </script>
  </Helmet>
);

export default Head;
