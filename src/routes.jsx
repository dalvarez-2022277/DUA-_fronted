import { AuthPage } from "./pages/Auth/auth";
import { DashboardPage, DsaboardUser } from "./pages/Dashboard/dashboard";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/', element: <DashboardPage/>},
    {path: '/dashboardUser', element: <DsaboardUser/>},
]

export default routes