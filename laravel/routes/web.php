<?php

use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CareerController as AdminCareerController;
use App\Http\Controllers\Admin\SuccessStoryController as AdminSuccessStoryController;
use App\Http\Controllers\Admin\TenderController as AdminTenderController;
use App\Http\Controllers\Admin\WebsiteMediaController as AdminWebsiteMediaController;
use App\Http\Controllers\SuccessStoryController;
use App\Models\CareerOpening;
use App\Models\SuccessStory;
use App\Models\TenderInvitation;
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

Route::get('/api/careers', function () {
    return [
        'careers' => CareerOpening::query()
            ->published()
            ->orderBy('application_deadline')
            ->latest()
            ->get()
            ->map(fn (CareerOpening $career) => [
                'id' => $career->id,
                'title' => $career->title,
                'slug' => $career->slug,
                'application_deadline' => $career->application_deadline?->toIso8601String(),
                'image_url' => $career->displayImageUrl(),
                'is_expired' => $career->application_deadline?->isPast() ?? false,
            ]),
    ];
})->name('api.careers.index');

Route::get('/api/tenders', function () {
    return [
        'tenders' => TenderInvitation::query()
            ->published()
            ->orderBy('application_deadline')
            ->latest()
            ->get()
            ->map(fn (TenderInvitation $tender) => [
                'id' => $tender->id,
                'title' => $tender->title,
                'slug' => $tender->slug,
                'application_deadline' => $tender->application_deadline?->toIso8601String(),
                'file_url' => $tender->fileUrl(),
                'original_filename' => $tender->original_filename,
                'file_size' => $tender->file_size,
                'file_size_label' => $tender->fileSizeLabel(),
                'uploaded_at' => $tender->created_at?->toIso8601String(),
                'uploaded_label' => $tender->uploadedLabel(),
                'is_expired' => $tender->application_deadline?->isPast() ?? false,
            ]),
    ];
})->name('api.tenders.index');

Route::get('/admin/login', [AuthController::class, 'login'])->name('admin.login');
Route::post('/admin/login', [AuthController::class, 'authenticate'])->name('admin.authenticate');
Route::post('/admin/logout', [AuthController::class, 'logout'])->name('admin.logout');

Route::middleware('mct.admin')->prefix('admin')->name('admin.')->group(function () {
    Route::resource('success-stories', AdminSuccessStoryController::class)->except('show');
    Route::resource('website-media', AdminWebsiteMediaController::class)->except('show');
    Route::resource('careers', AdminCareerController::class)->except('show');
    Route::resource('tenders', AdminTenderController::class)->except('show');
    Route::resource('users', AdminUserController::class)->only(['index', 'create', 'store']);
});
