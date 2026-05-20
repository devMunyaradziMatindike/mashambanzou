<?php

namespace App\Http\Controllers;

use App\Models\SuccessStory;
use Illuminate\View\View;

class SuccessStoryController extends Controller
{
    public function index(): View
    {
        $stories = SuccessStory::query()
            ->published()
            ->latest('published_at')
            ->latest()
            ->paginate(9);

        return view('success-stories.index', compact('stories'));
    }

    public function show(SuccessStory $story): View
    {
        abort_unless(
            $story->is_published
            && $story->published_at
            && $story->published_at->isPast(),
            404
        );

        return view('success-stories.show', compact('story'));
    }
}
