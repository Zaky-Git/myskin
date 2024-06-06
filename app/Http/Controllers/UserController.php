<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAllUser()
    {
        $users = User::all();

        return response()->json($users);
    }
    public function countUser(){
        $userCount = User::all()->count();
        return response()->json($userCount);
    }
}
