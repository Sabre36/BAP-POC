import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProgramIntegrity from "views/ProgramIntegrity/ProgramIntegrity.jsx";
import CertificationPage from "views/CertificationPage/CertificationPage.jsx";
import FacilitiesPage from "views/FacilitiesPage/FacilitiesPage.jsx";
import PortalPage from "views/PortalPage/PortalPage.jsx";




var indexRoutes = [
    { path: "/landing-page", name: "LandingPage", component: LandingPage, requireAuth: true },
    { path: "/certification", name: "CertificationPage", component: CertificationPage, requireAuth: false},
    { path: "/facilities", name: "FacilitiesPage", component: FacilitiesPage, requireAuth: false},
    { path: "/portal", name: "PortalPage", component: PortalPage, requireAuth: true},
    { path: "/login", name: "LoginPage", component: LoginPage, requireAuth: false },
    { path: "/", name: "LandingPage", component: LandingPage, requireAuth: false}
];

export default indexRoutes;
