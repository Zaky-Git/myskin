<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\SkinAnalysis;
use App\Models\Verifications;
use Illuminate\Http\Request;

class SkinAnalysisController extends Controller
{


    public function skinAnalysis(Request $request)
    {
        if ($request->hasFile('image')) {

            $skinAnalysis = SkinAnalysis::find($request->input('skinAnalysisId'));

            if ($skinAnalysis) {
                if (file_exists(public_path($skinAnalysis->image_path))) {
                    unlink(public_path($skinAnalysis->image_path));
                }
            }

            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/skinAnalysis'), $imageName);
            $imagePath = 'images/skinAnalysis/' . $imageName;

            //ai disini nanti
            $percentage = 75.5;

            if ($percentage > 70) {
                $melanoma_detected = true;
            } else {
                $melanoma_detected = false;
            }

            if (!$skinAnalysis) {
                $skinAnalysis = new SkinAnalysis();
                $skinAnalysis->user_id = $request->input('userId');
            }

            $skinAnalysis->image_path = $imagePath;
            $skinAnalysis->melanoma_detected = $melanoma_detected;
            $skinAnalysis->verified = false;
            $skinAnalysis->analysis_percentage = $percentage;
            $skinAnalysis->save();

            $skinAnalysisId = $skinAnalysis->id;

            $response = [
                'message' => 'Success',
                'data' => [
                    'skinAnalysis' => $skinAnalysis,
                    'skinAnalysisId' => $skinAnalysisId
                ]
            ];

            return response()->json($response, 200);
        } else {
            return response()->json(['message' => 'Gambar tidak ditemukan'], 400);
        }
    }


    public function mengajukanVerifikasi(int $id, Request $request)
    {

        $alreadyReqVerif = Verifications::where('skin_analysis_id', $id)->first();

        if ($alreadyReqVerif) {
            return response()->json(['message' => 'Sedang mengajukan verifikasi'], 400);
        } else {

            $skinAnalysis = SkinAnalysis::find($request->input('skinAnalysisId'));

            if (!$skinAnalysis) {
                return response()->json(['message' => 'Skin analysis result not found'], 404);
            }

            $verif = new Verifications();
            $verif->skin_analysis_id = $id;
            $verif->user_id = $request->input('userId');

            if ($request->input('doctorId') == null) {
                $verif->doctor_id = null;
            } else {

                $dokter = Doctor::find($request->input('doctorId'));

                if (!$dokter) {
                    return response()->json(['message' => 'Dokter tidak ditemukan'], 404);
                }

                $verif->doctor_id = $request->input('doctorId');
            }
            $verif->verified = false;
            $verif->verification_date = date('Y-m-d H:i:s');
            $verif->save();

            $skinAnalysis->keluhan = $request->input('keluhan');
            $skinAnalysis->save();

            return response()->json(['message' => 'Berhasil mengajukan verifikasi'], 200);
        }
    }


    public function verifikasi(int $id, Request $request)
    {
        $verif = Verifications::where('skin_analysis_id', $id)->first();
        $skinAnalysis = SkinAnalysis::find($request->input('skin_analysis_id'));

        if (!$skinAnalysis) {
            return response()->json(['message' => 'Skin analysis result not found'], 404);
        }

        if ($verif) {
            $verif->verified = $request->input('verified');
            $verif->verification_date = date('Y-m-d H:i:s');
            $verif->save();

            $skinAnalysis->verified = $request->input('verified');
            $skinAnalysis->verified_by = $verif->doctor_id;
            $skinAnalysis->catatanDokter = $request->input('catatanDokter');
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
