<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CareerOpening;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class CareerController extends Controller
{
    public function index(): View
    {
        $careers = CareerOpening::query()
            ->orderBy('application_deadline')
            ->latest()
            ->paginate(15);

        return view('admin.careers.index', compact('careers'));
    }

    public function create(): View
    {
        return view('admin.careers.create', [
            'career' => new CareerOpening([
                'application_deadline' => now()->addWeek(),
                'is_published' => true,
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['slug'] = CareerOpening::uniqueSlug($data['title']);
        $data['is_published'] = $request->boolean('is_published');

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('careers', 'public');
        }

        CareerOpening::create($data);

        return redirect()
            ->route('admin.careers.index')
            ->with('status', 'Career opening posted.');
    }

    public function edit(CareerOpening $career): View
    {
        return view('admin.careers.edit', compact('career'));
    }

    public function update(Request $request, CareerOpening $career): RedirectResponse
    {
        $data = $this->validated($request);
        $data['slug'] = CareerOpening::uniqueSlug($data['title'], $career);
        $data['is_published'] = $request->boolean('is_published');

        if ($request->hasFile('image')) {
            if ($career->image_path) {
                Storage::disk('public')->delete($career->image_path);
            }

            $data['image_path'] = $request->file('image')->store('careers', 'public');
        }

        $career->update($data);

        return redirect()
            ->route('admin.careers.index')
            ->with('status', 'Career opening updated.');
    }

    public function destroy(CareerOpening $career): RedirectResponse
    {
        if ($career->image_path) {
            Storage::disk('public')->delete($career->image_path);
        }

        $career->delete();

        return redirect()
            ->route('admin.careers.index')
            ->with('status', 'Career opening deleted.');
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'max:16384'],
            'application_deadline' => ['required', 'date'],
        ]);
    }
}
