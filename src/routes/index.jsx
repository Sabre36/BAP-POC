import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProgramIntegrity from "views/ProgramIntegrity/ProgramIntegrity.jsx"

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
    { path: "/ProgramIntegrity", name: "ProgramIntegrity", component: ProgramIntegrity },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
