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
            if (password_verify($password, $user->password)) {
                return response()->json(['message' => 'Login berhasil', 'user' => $user, 'role' => $role]);
            } else {
                return response()->json(['message' => 'Password salah'], 401);
            }
        } else {
            return response()->json(['message' => 'Email tidak ditemukan'], 404);
        }
    }

    public function register(Request $request)
    {

        $data = $request->only([
            'firstName',
            'lastName',
            'number',
            'email',
            'password',
        ]);

        $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'number' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);


        if (strpos($data['email'], '@dokter.myskin.ac.id') !== false) {

            $user = Doctor::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);
        } elseif (strpos($data['email'], '@pasien.myskin.ac.id') !== false) {

            $user = User::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);
        } else {

            $user = Admin::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);
        }

        return response()->json(['message' => 'Registrasi berhasil', 'user' => $user]);
    }

    public function checkEmail(Request $request)
    {
        $email = $request->input('email');

        if (strpos($email, '@dokter.myskin.ac.id') !== false) {
            $user = Doctor::where('email', $email)->first();
        } elseif (strpos($email, '@pasien.myskin.ac.id') !== false) {
            $user = User::where('email', $email)->first();
        } else {
            $user = Admin::where('email', $email)->first();
        }

        if ($user) {
            response()->json(['message' => 'Email ditemukan', 'email' => $user['email']]);
        }
    }

    public function gantiPassword(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');

        $user = null;

        if (strpos($email, '@dokter.myskin.ac.id') !== false) {
            $user = Doctor::where('email', $email)->first();
        } elseif (strpos($email, '@pasien.myskin.ac.id') !== false) {
            $user = User::where('email', $email)->first();
        } else {
            $user = Admin::where('email', $email)->first();
        }

        if ($user) {
            $user->password = $password;
            $user->save();

            return response()->json(['message' => 'Password berhasil diubah']);
        } else {
            return response()->json(['error' => 'User tidak ditemukan'], 404);
        }
    }
}
