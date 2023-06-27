<?php

use App\Http\Controllers\homeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::match(['get', 'post'], '/', [homeController::class, 'index']);
Route::match(['get', 'post'], '/posts', [homeController::class, 'posts']);
Route::match(['get', 'post'], '/posts/{id?}', [homeController::class, 'postsUnico']);
Route::match(['get', 'post'], '/posts/categoria/{id?}', [homeController::class, 'postsCategoria']);
Route::match(['get', 'post'], '/categorias', [homeController::class, 'categorias']);
