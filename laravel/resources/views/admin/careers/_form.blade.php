@csrf

<div class="grid gap-6">
    <div>
        <label for="title" class="text-sm font-semibold text-brand-dark">Job title</label>
        <input
            id="title"
            name="title"
            value="{{ old('title', $career->title) }}"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="e.g. Programmes Officer"
        >
        @error('title')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="image" class="text-sm font-semibold text-brand-dark">Picture upload</label>
        <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 file:mr-4 file:rounded-full file:border-0 file:bg-brand-green file:px-4 file:py-2 file:font-semibold file:text-white"
        >
        @if ($career->image_path)
            <img src="{{ asset('storage/'.$career->image_path) }}" alt="{{ $career->title }}" class="mt-4 h-40 w-full rounded-2xl object-cover">
        @endif
        @error('image')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="image_url" class="text-sm font-semibold text-brand-dark">Picture URL (optional)</label>
        <input
            id="image_url"
            name="image_url"
            type="url"
            value="{{ old('image_url', $career->image_url) }}"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="https://example.com/job-image.jpg"
        >
        <p class="mt-2 text-sm text-brand-dark/60">Use this if you already have an image hosted elsewhere. Upload takes priority over URL.</p>
        @error('image_url')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="application_deadline" class="text-sm font-semibold text-brand-dark">Application deadline</label>
        <input
            id="application_deadline"
            name="application_deadline"
            type="datetime-local"
            value="{{ old('application_deadline', optional($career->application_deadline)->format('Y-m-d\TH:i')) }}"
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
            @checked(old('is_published', $career->is_published ?? true))
        >
        Publish on the website
    </label>

    <div class="flex flex-wrap gap-3">
        <button class="rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
            {{ $submitLabel }}
        </button>
        <a href="{{ route('admin.careers.index') }}" class="rounded-2xl border border-brand-dark/15 px-6 py-3 font-semibold text-brand-dark hover:bg-white">
            Cancel
        </a>
    </div>
</div>
