import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import PasienLayout from "./components/PasienLayout";
import DoctorLayout from "./components/DoctorLayout";
import DeteksiKanker from "./views/DeteksiKanker";
import FAQ from "./views/FAQ";
import DaftarPengajuanUmum from "./views/DaftarPengajuanUmum";
import Verifikasi from "./views/Verifikasi";
import DokterDashboard from "./components/DokterDashboard.jsx";
import RiwayatVerifikasi from "./components/RiwayatVerifikasi.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import DaftarDokter from "./components/DaftarDokter.jsx";
import DaftarPasien from "./components/DaftarPasien.jsx";
import DetailDokter from "./components/DetailDokter.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
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
            {
                path: "/faq",
                element: <FAQ />,
            },
            {
                path: "/pengajuan",
                element: <DaftarPengajuanUmum />,
            },
            {
                path: "/verifikasi",
                element: <Verifikasi />,
            },
        ],
    },
    {
        path: "/",
        element: <PasienLayout />,
        children: [
            {
                path: "/",
                element: <DeteksiKanker />,
            },
        ],
    },
    {
        path: "/",
        element: <DoctorLayout />,
        children: [
            {
                path: "/dokter/pengajuan",
                element: <DaftarPengajuanUmum />,
            },
            {
                path: "/dokter/dashboard",
                element: <DokterDashboard />,
            },
            {
                path: "/dokter/riwayat",
                element: <RiwayatVerifikasi />,
            },
        ],
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <AdminDashboard />
            },
            {
                path: "/admin/daftarDokter",
                element: <DaftarDokter/>
            },
            {
                path: "/admin/daftarPasien",
                element: <DaftarPasien/>
            },
            {
                path: "/admin/detailDokter",
                element: <DetailDokter/>
            }
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
