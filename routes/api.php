<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\SkinAnalysisController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificationsController;

#verifikasi
Route::get('/countPengajuan', [SkinAnalysisController::class, 'countPengajuanVerifikasi']);
Route::get('/pasienVerificationList/{id}', [VerificationsController::class, 'getPasienVerificationListByID']);
Route::get('/pengajuanUmum', [VerificationsController::class, 'getPengajuanUmum']);
Route::get('/verification/{id}', [VerificationsController::class, 'getVerificationBySkinAnalysisID']);
Route::post('/verifikasiSkin/{id}', [VerificationsController::class, 'verifikasi']);

# doctor
Route::get('/doctors', [DoctorController::class, 'getAllDoctor']);
Route::get('/doctor/{id}', [DoctorController::class, 'getDoctor']);
Route::get('/doctor/{doctor_id}/patients-count', [DoctorController::class, 'getJumlahPasien']);
Route::get('/doctor/{doctor_id}/patients', [DoctorController::class, 'getPatients']);
Route::put('/doctor/{id}', [DoctorController::class, 'updateDoctor']);
Route::get('/countUserUnv', [DoctorController::class, 'countUnverified']);
Route::get('/countUserVer', [DoctorController::class, 'countVerified']);
Route::get('/countDoctor', [DoctorController::class, 'countDoctor']);

# user
Route::get('/users', [UserController::class, 'getAllUser']);
Route::get('/countUser', [UserController::class, 'countUser']);

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

Route::get('/mySkinAnalysis/{id}', [SkinAnalysisController::class, 'getMySkinAnalysis']);
Route::get('/getSkinAnalysis/{id}', [SkinAnalysisController::class, 'getSkinAnalysisById']);


#doctor
Route::get('/doctors', [DoctorController::class, 'getAllDoctor']);

Route::get('/image/{filePath}', [ImageController::class, 'getImage']);
