<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function getAllDoctor()
    {
        $doctor = Doctor::all();
        return response()->json($doctor);
    }
}
