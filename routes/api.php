<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\SkinAnalysisController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

#pasien
Route::get('/users', [UserController::class, 'getAllUser']);

# auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/checkEmail', [AuthController::class, 'checkEmail']);
Route::post('/changePassword', [AuthController::class, 'gantiPassword']);
Route::post('/verifUser/{id}', [AuthController::class, 'verifikasiIdentitas']);
Route::post('/registerUser', [AuthController::class, 'mendaftarkanUser']);

#skinAnalysis
Route::post('/skinAnalysis', [SkinAnalysisController::class, 'skinAnalysis']);
Route::post('/mengajukanVerifikasi/{id}', [SkinAnalysisController::class, 'mengajukanVerifikasi']);
Route::post('/verifikasiSkin/{id}', [SkinAnalysisController::class, 'verifikasi']);
Route::get('/mySkinAnalysis/{id}', [SkinAnalysisController::class, 'getMySkinAnalysis']);
Route::get('/getSkinAnalysis/{id}', [SkinAnalysisController::class, 'getSkinAnalysisById']);


#doctor
Route::get('/doctors', [DoctorController::class, 'getAllDoctor']);

Route::get('/image/{filePath}', [ImageController::class, 'getImage']);
