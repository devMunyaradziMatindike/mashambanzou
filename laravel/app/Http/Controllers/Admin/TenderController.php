<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TenderInvitation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class TenderController extends Controller
{
    public function index(): View
    {
        $tenders = TenderInvitation::query()
            ->orderBy('application_deadline')
            ->latest()
            ->paginate(15);

        return view('admin.tenders.index', compact('tenders'));
    }

    public function create(): View
    {
        return view('admin.tenders.create', [
            'tender' => new TenderInvitation([
                'application_deadline' => now()->addWeek(),
                'is_published' => true,
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $file = $request->file('document');
        $data['slug'] = TenderInvitation::uniqueSlug($data['title']);
        $data['is_published'] = $request->boolean('is_published');
        $data['file_path'] = $file->store('tenders', 'public');
        $data['original_filename'] = $file->getClientOriginalName();
        $data['file_size'] = $file->getSize() ?: 0;
        $data['mime_type'] = $file->getMimeType();

        TenderInvitation::create($data);

        return redirect()
            ->route('admin.tenders.index')
            ->with('status', 'Tender invitation posted.');
    }

    public function edit(TenderInvitation $tender): View
    {
        return view('admin.tenders.edit', compact('tender'));
    }

    public function update(Request $request, TenderInvitation $tender): RedirectResponse
    {
        $data = $this->validated($request, documentRequired: false);
        $data['slug'] = TenderInvitation::uniqueSlug($data['title'], $tender);
        $data['is_published'] = $request->boolean('is_published');

        if ($request->hasFile('document')) {
            Storage::disk('public')->delete($tender->file_path);
            $file = $request->file('document');
            $data['file_path'] = $file->store('tenders', 'public');
            $data['original_filename'] = $file->getClientOriginalName();
            $data['file_size'] = $file->getSize() ?: 0;
            $data['mime_type'] = $file->getMimeType();
        }

        $tender->update($data);

        return redirect()
            ->route('admin.tenders.index')
            ->with('status', 'Tender invitation updated.');
    }

    public function destroy(TenderInvitation $tender): RedirectResponse
    {
        Storage::disk('public')->delete($tender->file_path);
        $tender->delete();

        return redirect()
            ->route('admin.tenders.index')
            ->with('status', 'Tender invitation deleted.');
    }

    private function validated(Request $request, bool $documentRequired = true): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'document' => [
                $documentRequired ? 'required' : 'nullable',
                'file',
                'mimes:pdf,doc,docx',
                'max:20480',
            ],
            'application_deadline' => ['required', 'date'],
        ]);
    }
}
