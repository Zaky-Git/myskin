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
        $verifications = Verifications::whereNull('doctor_id')
            ->with('skinAnalysis', 'user')
            ->get();

        return response()->json($verifications);
    }
}
