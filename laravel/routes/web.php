<?php

use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\SuccessStoryController as AdminSuccessStoryController;
use App\Http\Controllers\Admin\WebsiteMediaController as AdminWebsiteMediaController;
use App\Http\Controllers\SuccessStoryController;
use App\Models\SuccessStory;
use App\Models\WebsiteMedia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('success-stories.index');
})->name('home');

Route::get('/success-stories', [SuccessStoryController::class, 'index'])->name('success-stories.index');
Route::get('/success-stories/{story:slug}', [SuccessStoryController::class, 'show'])->name('success-stories.show');

Route::get('/api/success-stories', function () {
    return [
        'stories' => SuccessStory::query()
            ->published()
            ->latest('published_at')
            ->latest()
            ->get()
            ->map(fn (SuccessStory $story) => [
                'id' => $story->id,
                'title' => $story->title,
                'excerpt' => $story->excerpt,
                'body' => $story->body,
                'published_at' => optional($story->published_at)->toDateString(),
                'image_url' => $story->image_path ? asset('storage/'.$story->image_path) : null,
                'url' => route('success-stories.show', $story),
            ]),
    ];
})->name('api.success-stories.index');

Route::get('/api/website-media', function () {
    return [
        'media' => WebsiteMedia::query()
            ->active()
            ->orderBy('section_key')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->groupBy('section_key')
            ->map(fn ($items) => $items->map(fn (WebsiteMedia $item) => [
                'id' => $item->id,
                'section_key' => $item->section_key,
                'label' => $item->label,
                'alt_text' => $item->alt_text,
                'sort_order' => $item->sort_order,
                'image_url' => asset('storage/'.$item->image_path),
            ])->values()),
    ];
})->name('api.website-media.index');

Route::get('/admin/login', [AuthController::class, 'login'])->name('admin.login');
Route::post('/admin/login', [AuthController::class, 'authenticate'])->name('admin.authenticate');
Route::post('/admin/logout', [AuthController::class, 'logout'])->name('admin.logout');

Route::middleware('mct.admin')->prefix('admin')->name('admin.')->group(function () {
    Route::resource('success-stories', AdminSuccessStoryController::class)->except('show');
    Route::resource('website-media', AdminWebsiteMediaController::class)->except('show');
    Route::resource('users', AdminUserController::class)->only(['index', 'create', 'store']);
});
