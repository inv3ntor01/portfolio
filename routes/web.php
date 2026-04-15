<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::inertia('stitch', 'stitch/home')->name('stitch.home');
Route::inertia('stitch/novels', 'stitch/novels')->name('stitch.novels');
Route::inertia('stitch/archives', 'stitch/archives')->name('stitch.archives');
Route::inertia('stitch/about', 'stitch/about')->name('stitch.about');

require __DIR__.'/settings.php';
