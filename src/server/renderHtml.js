import { Helmet } from "react-helmet";

function renderHTML(reactString, css) {
  const helmet = Helmet.renderStatic();

  return `<!DOCTYPE html>
  <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/80b6e84bc6.js"></script>
    </head>
    <body>
      <div id="root">${reactString}</div>
      <script type="text/javascript" src="/runtime.bundle.js"></script><script type="text/javascript" src="/vendors.bundle.js"></script><script type="text/javascript" src="/client.bundle.js"></script>
    </body>
  </html>`;
}

export default renderHTML;
