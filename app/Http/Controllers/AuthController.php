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
            $role = "dokter";
        } elseif (strpos($email, '@pasien.myskin.ac.id') !== false) {
            $user = User::where('email', $email)->first();
            $role = "pasien";
        } else {
            $user = Admin::where('email', $email)->first();
            $role = "admin";
        }

        if ($user) {
            if ($password == $user->password) {
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
            'password' => 'required|string',
        ]);

        $email = $data['email'];

        if (strpos($email, '@dokter.myskin.ac.id') !== false) {
            $user = Doctor::where('email', $email)->first();
        } elseif (strpos($email, '@pasien.myskin.ac.id') !== false) {
            $user = User::where('email', $email)->first();
        } else {
            $user = Admin::where('email', $email)->first();
        }

        if ($user) {
            return response()->json(['message' => 'Email telah digunakan']);
        }

        if (strpos($data['email'], '@dokter.myskin.ac.id') !== false) {
            $user = Doctor::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'verified' => false,
                'password' => $data['password'],
            ]);
        } elseif (strpos($data['email'], '@pasien.myskin.ac.id') !== false) {
            $user = User::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'verified' => false,
                'password' => $data['password'],
            ]);
        } elseif (strpos($data['email'], '@admin.myskin.ac.id') !== false) {
            $user = Admin::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);
        } else {
            return response()->json(['message' => 'Email tidak valid'], 400);
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
            return response()->json(['message' => 'Email ditemukan', 'email' => $user['email']]);
        } else {
            return response()->json(['message' => 'Email tidak ditemukan'], 404);
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
            if ($user->password == $password) {
                return response()->json(['error' => 'Password baru tidak boleh sama dengan password lama'], 400);
            }
            $user->password = $password;
            $user->save();
            return response()->json(['message' => 'Password berhasil diubah']);
        } else {
            return response()->json(['error' => 'User tidak ditemukan'], 404);
        }
    }

    public function verifikasiIdentitas(Request $request, int $id)
    {

        if ($request->input('role') == "dokter") {
            $user = Doctor::find($id);
        } else {
            $user = User::find($id);
        }

        if (!$user) {
            return response()->json(['message' => 'User tidak ditemukan'], 404);
        }

        if ($request->input('verif') == "true") {
            $user->verified = true;
            $action = "diverifikasi";
        } else {
            $user->verified = false;
            $action = "dibatalkan";
        }

        $user->save();

        if ($request->input('role') == "dokter") {
            return response()->json(['message' => 'Status verifikasi dokter ' . $user->firstName . ' ' . $user->lastName . ' berhasil ' . $action]);
        } else {
            return response()->json(['message' => 'Status verifikasi pasien ' . $user->firstName . ' ' . $user->lastName . ' berhasil ' . $action]);
        }
    }

    public function mendaftarkanUser(Request $request)
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
            'password' => 'required|string',
        ]);

        $email = $data['email'];

        if (strpos($email, '@dokter.myskin.ac.id') !== false) {
            $user = Doctor::where('email', $email)->first();
        } elseif (strpos($email, '@pasien.myskin.ac.id') !== false) {
            $user = User::where('email', $email)->first();
        } else {
            $user = Admin::where('email', $email)->first();
        }

        if ($user) {
            return response()->json(['message' => 'Email telah digunakan']);
        }

        if (strpos($data['email'], '@dokter.myskin.ac.id') !== false) {
            $user = Doctor::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'verified' => true,
                'password' => $data['password'],
            ]);
        } elseif (strpos($data['email'], '@pasien.myskin.ac.id') !== false) {
            $user = User::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'verified' => true,
                'password' => $data['password'],
            ]);
        } elseif (strpos($data['email'], '@admin.myskin.ac.id') !== false) {
            $user = Admin::create([
                'firstName' => $data['firstName'],
                'lastName' => $data['lastName'],
                'number' => $data['number'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);
        } else {
            return response()->json(['message' => 'Email tidak valid'], 400);
        }

        return response()->json(['message' => 'Registrasi berhasil', 'user' => $user]);
    }
}
