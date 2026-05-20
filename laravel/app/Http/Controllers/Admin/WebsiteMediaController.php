<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WebsiteMedia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class WebsiteMediaController extends Controller
{
    public function index(): View
    {
        $sections = $this->sections();
        $nextSiteUrl = rtrim((string) config('website_media.next_site_url', 'http://localhost:3000'), '/');
        $media = WebsiteMedia::query()
            ->orderBy('section_key')
            ->orderBy('sort_order')
            ->orderByDesc('created_at')
            ->get()
            ->groupBy('section_key');

        return view('admin.website-media.index', compact('sections', 'media', 'nextSiteUrl'));
    }

    public function create(Request $request): View
    {
        return view('admin.website-media.create', [
            'item' => new WebsiteMedia([
                'section_key' => $request->query('section'),
                'sort_order' => 0,
                'is_active' => true,
            ]),
            'sections' => $this->sections(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $section = $this->sections()[$data['section_key']] ?? null;
        $data['is_active'] = $request->boolean('is_active');
        $data['image_path'] = $request->file('image')->store('website-media', 'public');

        if (! ($section['multiple'] ?? true)) {
            WebsiteMedia::query()
                ->where('section_key', $data['section_key'])
                ->get()
                ->each(function (WebsiteMedia $item): void {
                    Storage::disk('public')->delete($item->image_path);
                    $item->delete();
                });
        }

        WebsiteMedia::create($data);

        return redirect()
            ->route('admin.website-media.index')
            ->with('status', 'Website image saved.');
    }

    public function edit(WebsiteMedia $websiteMedium): View
    {
        return view('admin.website-media.edit', [
            'item' => $websiteMedium,
            'sections' => $this->sections(),
        ]);
    }

    public function update(Request $request, WebsiteMedia $websiteMedium): RedirectResponse
    {
        $data = $this->validated($request, imageRequired: false);
        $section = $this->sections()[$data['section_key']] ?? null;
        $data['is_active'] = $request->boolean('is_active');

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete($websiteMedium->image_path);
            $data['image_path'] = $request->file('image')->store('website-media', 'public');
        }

        if (! ($section['multiple'] ?? true)) {
            WebsiteMedia::query()
                ->where('section_key', $data['section_key'])
                ->whereKeyNot($websiteMedium->getKey())
                ->get()
                ->each(function (WebsiteMedia $item): void {
                    Storage::disk('public')->delete($item->image_path);
                    $item->delete();
                });
        }

        $websiteMedium->update($data);

        return redirect()
            ->route('admin.website-media.index')
            ->with('status', 'Website image updated.');
    }

    public function destroy(WebsiteMedia $websiteMedium): RedirectResponse
    {
        Storage::disk('public')->delete($websiteMedium->image_path);
        $websiteMedium->delete();

        return redirect()
            ->route('admin.website-media.index')
            ->with('status', 'Website image deleted.');
    }

    private function validated(Request $request, bool $imageRequired = true): array
    {
        return $request->validate([
            'section_key' => ['required', 'string', 'max:255'],
            'label' => ['nullable', 'string', 'max:255'],
            'alt_text' => ['nullable', 'string', 'max:255'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'image' => [$imageRequired ? 'required' : 'nullable', 'image', 'max:8192'],
        ]);
    }

    private function sections(): array
    {
        return config('website_media.sections', []);
    }
}
