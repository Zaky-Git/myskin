<?php

namespace App\Http\Controllers;

use App\Models\SkinAnalysis;
use App\Models\Verifications;
use Illuminate\Http\Request;

class SkinAnalysisController extends Controller
{
    public function mengajukanVerifikasi(int $id, Request $request)
    {

        $alreadyReqVerif = Verifications::where('skin_analysis_result_id', $id)->first();

        if ($alreadyReqVerif) {
            return response()->json(['message' => 'Sedang mengajukan verifikasi'], 400);
        } else {
            $verif = new Verifications();
            $verif->skin_analysis_result_id = $id;
            $verif->user_id = $request->input('userId');

            if ($request->input('doctorId') == null) {
                $verif->doctor_id = null;
            } else {
                $verif->doctor_id = $request->input('doctorId');
            }
            $verif->verified = false;
            $verif->verification_date = date('Y-m-d H:i:s');
            $verif->save();

            return response()->json(['message' => 'Berhasil mengajukan verifikasi'], 200);
        }
    }

    public function verikasi(int $id, Request $request)
    {
        $verif = Verifications::where('skin_analysis_result_id', $id)->first();
        $skinAnalysis = SkinAnalysis::find($id);

        if ($verif) {
            $verif->verified = $request->input('verified');
            $verif->verification_date = date('Y-m-d H:i:s');
            $verif->save();

            $skinAnalysis->verified = true;
            $skinAnalysis->verified_by = $verif->doctor_id;
            $skinAnalysis->verification_date = date('Y-m-d H:i:s');
            $skinAnalysis->save();

            return response()->json(['message' => 'Berhasil verifikasi'], 200);
        } else {
            return response()->json(['message' => 'Verifikasi tidak ditemukan'], 404);
        }
    }

    public function getMySkinAnalysis(int $id)
    {
        $skinAnalysis = SkinAnalysis::where('user_id', $id)->get();
        return response()->json($skinAnalysis);
    }

    public function getSkinAnalysisById(int $id)
    {
        $skinAnalysis = SkinAnalysis::find($id);
        return response()->json($skinAnalysis);
    }
}
