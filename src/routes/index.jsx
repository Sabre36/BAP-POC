import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProgramIntegrity from "views/ProgramIntegrity/ProgramIntegrity.jsx";
import CertificationPage from "views/CertificationPage/CertificationPage.jsx";
import FacilitiesPage from "views/FacilitiesPage/FacilitiesPage.jsx";
import PortalPage from "views/PortalPage/PortalPage.jsx";

// function requireAuth(nextState, replace, next) {
//     if (!authenticated) {
//         replace({
//             pathname: "/login",
//             state: {nextPathname: nextState.location.pathname}
//         });
//     }
//     next();
// }

var indexRoutes = [
    { path: "/landing-page", name: "LandingPage", component: LandingPage },
    { path: "/certification", name: "CertificationPage", component: CertificationPage, /*onEnter={requireAuth}*/},
    { path: "/facilities", name: "FacilitiesPage", component: FacilitiesPage, /*onEnter={requireAuth}*/ },
    { path: "/ProgramIntegrity", name: "ProgramIntegrity", component: ProgramIntegrity },
    { path: "/portal", name: "PortalPage", component: PortalPage },

    { path: "/login", name: "LoginPage", component: LoginPage },
    { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
