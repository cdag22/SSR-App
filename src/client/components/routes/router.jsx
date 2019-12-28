import App from "../app.jsx";
import Landing from "../landing.jsx";
import NotFound from "../errorPage/notFound.jsx";

export default [
  {
    component: App,
    routes: [
      {
        component: Landing,
        path: "/",
        exact: true
      },
      {
        component: NotFound,
        path: "*"
      }
    ]
  }
];
