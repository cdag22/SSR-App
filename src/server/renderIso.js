import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { renderRoutes } from "react-router-config";

import Routes from "../client/components/routes/router.jsx";
import renderHTML from "./renderHTML.js";

function renderIso(url) {
  let css = new Set();
  const insertCss = (...styles) =>
    styles.forEach(style => css.add(style._getCss()));

  const reactString = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <StaticRouter location={url}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </StyleContext.Provider>
  );

  return renderHTML(reactString);
}

export default renderIso;
