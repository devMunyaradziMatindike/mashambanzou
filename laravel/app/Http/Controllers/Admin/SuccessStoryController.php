<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SuccessStory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class SuccessStoryController extends Controller
{
    public function index(): View
    {
        $stories = SuccessStory::query()
            ->latest('published_at')
            ->latest()
            ->paginate(15);

        return view('admin.success-stories.index', compact('stories'));
    }

    public function create(): View
    {
        return view('admin.success-stories.create', [
            'story' => new SuccessStory([
                'published_at' => now(),
                'is_published' => true,
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['slug'] = SuccessStory::uniqueSlug($data['title']);
        $data['is_published'] = $request->boolean('is_published');

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('success-stories', 'public');
        }

        SuccessStory::create($data);

        return redirect()
            ->route('admin.success-stories.index')
            ->with('status', 'Success story posted.');
    }

    public function edit(SuccessStory $successStory): View
    {
        return view('admin.success-stories.edit', ['story' => $successStory]);
    }

    public function update(Request $request, SuccessStory $successStory): RedirectResponse
    {
        $data = $this->validated($request, imageRequired: false);
        $data['slug'] = SuccessStory::uniqueSlug($data['title'], $successStory);
        $data['is_published'] = $request->boolean('is_published');

        if ($request->hasFile('image')) {
            if ($successStory->image_path) {
                Storage::disk('public')->delete($successStory->image_path);
            }

            $data['image_path'] = $request->file('image')->store('success-stories', 'public');
        }

        $successStory->update($data);

        return redirect()
            ->route('admin.success-stories.index')
            ->with('status', 'Success story updated.');
    }

    public function destroy(SuccessStory $successStory): RedirectResponse
    {
        if ($successStory->image_path) {
            Storage::disk('public')->delete($successStory->image_path);
        }

        $successStory->delete();

        return redirect()
            ->route('admin.success-stories.index')
            ->with('status', 'Success story deleted.');
    }

    private function validated(Request $request, bool $imageRequired = true): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'published_at' => ['required', 'date'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'body' => ['required', 'string'],
            'image' => [$imageRequired ? 'required' : 'nullable', 'image', 'max:5120'],
        ]);
    }
}
