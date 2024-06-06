<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Verifications;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function getAllDoctor()
    {
        $doctor = Doctor::all();
        return response()->json($doctor);
    }
    public function getDoctor($id)
    {
        $doctor = Doctor::find($id);
        return response()->json($doctor);
    }
    public function getJumlahPasien($doctor_id)
    {
        $patientCount = Verifications::where('doctor_id', $doctor_id)
            ->distinct('user_id')
            ->count('user_id');

        return response()->json(['doctor_id' => $doctor_id, 'patient_count' => $patientCount]);
    }
    public function getPatients($doctor_id)
    {
        $patients = Verifications::where('doctor_id', $doctor_id)
            ->with('user') // assuming you have a User model related to the Verification
            ->get();

        return response()->json($patients);
    }
    public function updateDoctor(Request $request, $id)
    {
        $doctor = Doctor::find($id);

        if (!$doctor) {
            return response()->json(['message' => 'Doctor not found'], 404);
        }

        $doctor->firstName = $request->input('firstName');
        $doctor->lastName = $request->input('lastName');
        $doctor->number = $request->input('number');
        $doctor->email = $request->input('email');

        $doctor->save();

        return response()->json($doctor);
    }
    public function countDoctor(){
        $doctorCount = Doctor::all()->count();
        return response()->json($doctorCount);
    }
    public function countVerified(){
        $verCount = Doctor::where('verified', 1)->count();
        return response()->json($verCount);
    }
    public function countUnverified(){
        $unverCount = Doctor::where('verified', 0)->count();
        return response()->json($unverCount);
    }
}
