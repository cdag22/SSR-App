import React from "react";
import { hydrate } from "react-dom/server";
import { BrowserRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { renderRoutes } from "react-router-config";

import Routes from "./components/routes/router.jsx";

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </StyleContext.Provider>,
  document.getElementById("root")
);
