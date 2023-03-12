import { FC } from "react";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

interface IRoutesType {
    [key: string]: { path: string; element: FC }[]
}

const router: IRoutesType = {
    public: [
        {
            path: "/login",
            element: LoginPage
        }
    ],
    private: [
        {
            path: "/dashboard",
            element: DashboardPage
        }
    ]
}

export default router;