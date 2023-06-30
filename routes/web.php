<?php

use App\Http\Controllers\AdminController;
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

Route::match(['get', 'delete'], '/post/destroy/{id}', [AdminController::class, 'postDestroy']);
Route::match(['get', 'post'], '/post/update/{id}', [AdminController::class, 'postUpdate']);
Route::match(['get', 'post'], '/', [homeController::class, 'insertPost']);
Route::match(['get', 'post'], '/posts', [homeController::class, 'posts']);
Route::match(['get', 'post'], '/posts/{id?}', [homeController::class, 'postsUnico']);
Route::match(['get', 'post'], '/posts/categoria/{id?}', [homeController::class, 'postsCategoria']);
Route::match(['get', 'post'], '/categorias', [homeController::class, 'categorias']);
Route::match(['get', 'post'], '/categorias/insert', [AdminController::class, 'categoriaInsert']);
Route::match(['get', 'delete'], '/categorias/destroy/{id}', [AdminController::class, 'categoriaDestroy']);
Route::match(['get', 'post'], '/categorias/update/{id}', [AdminController::class, 'categoriaUpdate']);
Route::match(['get', 'post'], '/categorias/{id}', [homeController::class, 'categoriasUnica']);
