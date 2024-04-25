import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import PasienLayout from "./components/PasienLayout";
import DoctorLayout from "./components/DoctorLayout";
import DeteksiKanker from "./views/DeteksiKanker";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/deteksiKanker",
                element: <DeteksiKanker />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "/",
        element: <PasienLayout />,
        children: [
            {
                path: "/deteksiKanker",
                element: <DeteksiKanker />,
            },
        ],
    },
    {
        path: "/",
        element: <DoctorLayout />,
        children: [
            {
                path: "/",
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
