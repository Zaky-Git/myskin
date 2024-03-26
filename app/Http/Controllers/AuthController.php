<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');

        if (strpos($email, '@doctor.myskin.ac.id') !== false) {
        } elseif (strpos($email, '@admin.myskin.ac.id') !== false) {
        } else {
        }
    }
}
