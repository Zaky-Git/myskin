<?php

namespace App\Http\Controllers;

use App\Models\SkinAnalysis;
use App\Models\Verifications;
use Illuminate\Http\Request;

class VerificationsController extends Controller
{
    public function getPasienVerificationListByID($id)
    {
        $verifications = Verifications::where('user_id', $id)
            ->with(['skinAnalysis', 'doctor'])
            ->get();

        return response()->json($verifications);
    }

    public function getVerificationBySkinAnalysisID($id)
    {
        $verification = Verifications::where('skin_analysis_id', $id)
            ->with(['skinAnalysis', 'doctor', 'user'])
            ->first();

        if (!$verification) {
            return response()->json(['message' => 'Verification not found'], 404);
        }

        return response()->json($verification);
    }

    public function getPengajuanUmum()
    {
        $verifications = Verifications::where('verified', 0)
            ->whereNull('doctor_id')
            ->with('skinAnalysis', 'user')
            ->get();

        return response()->json($verifications);
    }


    public function verifikasi(int $id, Request $request)
    {
        $verif = Verifications::where('skin_analysis_id', $id)->first();
        $skinAnalysis = SkinAnalysis::find($id);

        if (!$skinAnalysis) {
            return response()->json(['message' => 'Skin analysis not found'], 404);
        }

        if ($verif) {
            $verif->verified = true;
            $verif->verified_melanoma = $request->input('verifiedMelanoma');
            $verif->verification_date = date('Y-m-d H:i:s');
            $verif->doctor_id = $request->input('doctor_id');
            $verif->save();

            $skinAnalysis->verified = true;
            $skinAnalysis->verified_by = $verif->doctor_id;
            $skinAnalysis->catatanDokter = $request->input('catatanDokter');
            $skinAnalysis->verification_date = date('Y-m-d H:i:s');
            $skinAnalysis->save();

            return response()->json(['message' => 'Berhasil verifikasi'], 200);
        } else {
            return response()->json(['message' => 'Verifikasi tidak ditemukan'], 404);
        }
    }
}
