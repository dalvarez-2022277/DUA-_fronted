import { AuthPage } from "./pages/Auth/auth";
import { DashboardPage } from "./pages/Dashboard/dashboard";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
]

export default routes