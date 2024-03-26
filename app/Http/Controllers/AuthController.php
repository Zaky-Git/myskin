<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Doctor;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = null;
        $role = null;

        if (strpos($email, '@dokter.myskin.ac.id') !== false) {
            $user = Doctor::where('email', $email)->first();
            $role = "doctor";
        } elseif (strpos($email, '@pasien.myskin.ac.id') !== false) {
            $user = User::where('email', $email)->first();
            $role = "user";
        } else {
            $user = Admin::where('email', $email)->first();
            $role = "admin";
        }

        if ($user) {
            // Attempt authentication
            if (password_verify($password, $user->password)) {
                return response()->json(['message' => 'Login berhasil', 'user' => $user, 'role' => $role]);
            } else {
                return response()->json(['message' => 'Password salah'], 401);
            }
        } else {
            return response()->json(['message' => 'Email tidak ditemukan'], 404);
        }
    }
}
