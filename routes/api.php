<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'getAllUser']);

# auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/checkEmail', [AuthController::class, 'checkEmail']);
Route::post('/changePassword', [AuthController::class, 'gantiPassword']);
Route::post('/verifUser/{id}', [AuthController::class, 'verifikasiIdentitas']);
Route::post('/registerUser', [AuthController::class, 'mendaftarkanUser']);
