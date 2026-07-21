<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WebsiteContent;
use App\Services\WebsiteContentRegistry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class WebsiteContentController extends Controller
{
    public function index(): View
    {
        $pages = WebsiteContentRegistry::pages();
        $content = WebsiteContentRegistry::mergedContent();
        $overrides = WebsiteContent::query()->pluck('content_key')->flip();

        return view('admin.website-content.index', compact('pages', 'content', 'overrides'));
    }

    public function edit(Request $request): View
    {
        $page = (string) $request->query('page', '');
        $pages = WebsiteContentRegistry::pages();

        abort_unless(isset($pages[$page]), 404);

        $fields = $pages[$page];
        $content = WebsiteContentRegistry::mergedContent();
        $overrides = WebsiteContent::query()->pluck('content_key')->flip();

        return view('admin.website-content.edit', compact('page', 'fields', 'content', 'overrides'));
    }

    public function update(Request $request): RedirectResponse
    {
        $page = (string) $request->input('page', '');
        $pages = WebsiteContentRegistry::pages();

        abort_unless(isset($pages[$page]), 404);

        $values = $request->input('values', []);
        if (! is_array($values)) {
            $values = [];
        }

        foreach ($pages[$page] as $key => $field) {
            if (! array_key_exists($key, $values)) {
                continue;
            }

            $type = $field['type'] ?? 'paragraph';
            $sanitized = WebsiteContentRegistry::sanitizeValue($type, (string) $values[$key]);
            $default = (string) ($field['default'] ?? '');

            if ($sanitized === $default) {
                WebsiteContent::query()->where('content_key', $key)->delete();
                continue;
            }

            WebsiteContent::query()->updateOrCreate(
                ['content_key' => $key],
                ['value' => $sanitized]
            );
        }

        return redirect()
            ->route('admin.website-content.edit', ['page' => $page])
            ->with('status', 'Website content saved.');
    }

    public function reset(Request $request): RedirectResponse
    {
        $key = (string) $request->input('content_key', '');
        $field = WebsiteContentRegistry::field($key);

        abort_unless($field !== null, 404);

        WebsiteContent::query()->where('content_key', $key)->delete();

        return redirect()
            ->back()
            ->with('status', 'Content reset to default.');
    }
}
