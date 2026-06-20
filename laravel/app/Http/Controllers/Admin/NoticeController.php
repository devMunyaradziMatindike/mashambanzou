<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notice;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class NoticeController extends Controller
{
    public function index(): View
    {
        $notices = Notice::query()
            ->latest('published_at')
            ->latest()
            ->paginate(15);

        return view('admin.notices.index', compact('notices'));
    }

    public function create(): View
    {
        return view('admin.notices.create', [
            'notice' => new Notice([
                'published_at' => now(),
                'is_published' => true,
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['slug'] = Notice::uniqueSlug($data['title']);
        $data['is_published'] = $request->boolean('is_published');

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('notices', 'public');
        }

        Notice::create($data);

        return redirect()
            ->route('admin.notices.index')
            ->with('status', 'Notice posted.');
    }

    public function edit(Notice $notice): View
    {
        return view('admin.notices.edit', compact('notice'));
    }

    public function update(Request $request, Notice $notice): RedirectResponse
    {
        $data = $this->validated($request, imageRequired: false);
        $data['slug'] = Notice::uniqueSlug($data['title'], $notice);
        $data['is_published'] = $request->boolean('is_published');

        if ($request->hasFile('image')) {
            if ($notice->image_path) {
                Storage::disk('public')->delete($notice->image_path);
            }

            $data['image_path'] = $request->file('image')->store('notices', 'public');
        }

        $notice->update($data);

        return redirect()
            ->route('admin.notices.index')
            ->with('status', 'Notice updated.');
    }

    public function destroy(Notice $notice): RedirectResponse
    {
        if ($notice->image_path) {
            Storage::disk('public')->delete($notice->image_path);
        }

        $notice->delete();

        return redirect()
            ->route('admin.notices.index')
            ->with('status', 'Notice deleted.');
    }

    private function validated(Request $request, bool $imageRequired = false): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'published_at' => ['required', 'date'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'body' => ['required', 'string'],
            'image' => [$imageRequired ? 'required' : 'nullable', 'image', 'max:16384'],
        ]);
    }
}
