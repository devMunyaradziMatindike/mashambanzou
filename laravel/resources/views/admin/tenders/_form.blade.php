@csrf

<div class="grid gap-6">
    <div>
        <label for="title" class="text-sm font-semibold text-brand-dark">Tender title</label>
        <input
            id="title"
            name="title"
            value="{{ old('title', $tender->title) }}"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="e.g. Supply of medical equipment"
        >
        @error('title')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="document" class="text-sm font-semibold text-brand-dark">Tender document</label>
        <input
            id="document"
            name="document"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 file:mr-4 file:rounded-full file:border-0 file:bg-brand-green file:px-4 file:py-2 file:font-semibold file:text-white"
            @if (! $tender->exists) required @endif
        >
        @if ($tender->file_path)
            <p class="mt-3 text-sm text-brand-dark/70">
                Current file: {{ $tender->original_filename }} ({{ $tender->fileSizeLabel() }})
            </p>
        @endif
        @error('document')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="application_deadline" class="text-sm font-semibold text-brand-dark">Application deadline</label>
        <input
            id="application_deadline"
            name="application_deadline"
            type="datetime-local"
            value="{{ old('application_deadline', optional($tender->application_deadline)->format('Y-m-d\TH:i')) }}"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
        >
        @error('application_deadline')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <label class="flex items-center gap-3 rounded-2xl bg-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-dark">
        <input
            type="checkbox"
            name="is_published"
            value="1"
            class="h-5 w-5 rounded border-brand-dark/20 text-brand-green"
            @checked(old('is_published', $tender->is_published ?? true))
        >
        Publish on the website
    </label>

    <div class="flex flex-wrap gap-3">
        <button class="rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
            {{ $submitLabel }}
        </button>
        <a href="{{ route('admin.tenders.index') }}" class="rounded-2xl border border-brand-dark/15 px-6 py-3 font-semibold text-brand-dark hover:bg-white">
            Cancel
        </a>
    </div>
</div>
