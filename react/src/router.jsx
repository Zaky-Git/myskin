import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import PasienLayout from "./components/PasienLayout";
import DoctorLayout from "./components/DoctorLayout";
import AdminLayout from "./components/AdminLayout";
import DeteksiKanker from "./views/DeteksiKanker";
import FAQ from "./views/FAQ";
import DaftarPengajuanUmum from "./views/DaftarPengajuanUmum";
import Verifikasi from "./views/Verifikasi";
import NotFound from "./views/NotFound";
import ProtectedRoute from "./security/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "/", element: <DeteksiKanker /> },
            { path: "faq", element: <FAQ /> },
            { path: "verifikasi", element: <Verifikasi /> },
        ],
    },
    {
        path: "/pasien",
        element: <ProtectedRoute allowedRoles={["pasien"]} />,
        children: [{ path: "dashboard", element: <PasienLayout /> }],
    },
    {
        path: "/dokter",
        element: <ProtectedRoute allowedRoles={["dokter"]} />,
        children: [
            { path: "dashboard", element: <DoctorLayout /> },
            { path: "pengajuan", element: <DaftarPengajuanUmum /> },
        ],
    },
    {
        path: "/admin",
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [{ path: "dashboard", element: <AdminLayout /> }],
    },
    { path: "*", element: <NotFound /> },
]);

export default router;
