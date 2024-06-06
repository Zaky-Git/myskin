import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import PasienLayout from "./components/PasienLayout";
import DeteksiKanker from "./views/DeteksiKanker";
import FAQ from "./views/FAQ";
import DaftarPengajuanUmum from "./views/DaftarPengajuanUmum";
import Verifikasi from "./views/Verifikasi";
import NotFound from "./views/NotFound";
import ProtectedRoute from "./security/ProtectedRoute";
import DokterDashboard from "./views/DokterDashboard.jsx";
import RiwayatVerifikasi from "./views/RiwayatVerifikasi.jsx";
import AdminDashboard from "./views/AdminDashboard.jsx";
import DaftarDokter from "./views/DaftarDokter.jsx";
import DaftarPasien from "./views/DaftarPasien.jsx";
import DetailDokter from "./views/DetailDokter.jsx";
import RiwayatPengajuan from "./views/RiwayatPengajuan.jsx";

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
        children: [
            {
                path: "dashboard",
                element: <PasienLayout />
            },
            {
                path: "riwayatPengajuan",
                element: <RiwayatPengajuan />,
            },
        ],
    },
    {
        path: "/dokter",
        element: <ProtectedRoute allowedRoles={["dokter"]} />,
        children: [
            {
                path: "dashboard",
                element: <DokterDashboard />,
            },
            { path: "pengajuan", element: <DaftarPengajuanUmum /> },
            {
                path: "riwayatVerifikasi",
                element: <RiwayatVerifikasi />,
            },
        ],
    },
    {
        path: "/admin",
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "daftarDokter",
                element: <DaftarDokter />,
            },
            {
                path: "daftarPasien",
                element: <DaftarPasien />,
            },
            {
                path: "detailDokter/:id",
                element: <DetailDokter />,
            },
        ],
    },
    { path: "*", element: <NotFound /> },
]);

export default router;
