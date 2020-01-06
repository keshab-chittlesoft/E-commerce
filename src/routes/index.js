import Main from "../Container/App";
import Admin from "../Container/Admin";

const indexRoutes = [
    {path: '/admin', component: Admin},
    {path: '/', component: Main},
];

export default indexRoutes; 