<?php

use App\Http\Controllers\JobsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [JobsController::class, 'index']);
Route::post('/jobs', [JobsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.jobs');
Route::get('/jobs', [JobsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.jobs');
Route::get('/jobs/edit', [JobsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.jobs');
Route::post('/jobs/update', [JobsController::class, 'update'])->middleware(['auth', 'verified'])->name('update.jobs');
Route::post('/jobs/delete', [JobsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.jobs');

Route::get('/images/{filename}', function ($filename) {
    $path = resource_path('images/' . $filename);
    if (!File::exists($path)) {
        abort(404);
    }
    $file = File::get($path);
    $type = File::mimeType($path);
    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);
    return $response;
})->where('filename', '^[^/]+$');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
