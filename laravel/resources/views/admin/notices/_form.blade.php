@csrf

<div class="grid gap-6">
    <div>
        <label for="title" class="text-sm font-semibold text-brand-dark">Title</label>
        <input
            id="title"
            name="title"
            value="{{ old('title', $notice->title) }}"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="e.g. Office closure notice"
        >
        @error('title')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="published_at" class="text-sm font-semibold text-brand-dark">Date</label>
        <input
            id="published_at"
            name="published_at"
            type="datetime-local"
            value="{{ old('published_at', optional($notice->published_at)->format('Y-m-d\TH:i')) }}"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
        >
        @error('published_at')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="excerpt" class="text-sm font-semibold text-brand-dark">Short summary (optional)</label>
        <input
            id="excerpt"
            name="excerpt"
            value="{{ old('excerpt', $notice->excerpt) }}"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="Brief summary shown in listings"
        >
        @error('excerpt')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="body" class="text-sm font-semibold text-brand-dark">Notice content</label>
        <textarea
            id="body"
            name="body"
            rows="8"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="Full notice text"
        >{{ old('body', $notice->body) }}</textarea>
        @error('body')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="image" class="text-sm font-semibold text-brand-dark">Picture upload (optional)</label>
        <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 file:mr-4 file:rounded-full file:border-0 file:bg-brand-green file:px-4 file:py-2 file:font-semibold file:text-white"
        >
        @if ($notice->image_path)
            <img src="{{ asset('storage/'.$notice->image_path) }}" alt="{{ $notice->title }}" class="mt-4 h-40 w-full rounded-2xl object-cover">
        @endif
        @error('image')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <label class="flex items-center gap-3 rounded-2xl bg-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-dark">
        <input
            type="checkbox"
            name="is_published"
            value="1"
            class="h-5 w-5 rounded border-brand-dark/20 text-brand-green"
            @checked(old('is_published', $notice->is_published ?? true))
        >
        Publish on the website
    </label>

    <div class="flex flex-wrap gap-3">
        <button class="rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
            {{ $submitLabel }}
        </button>
        <a href="{{ route('admin.notices.index') }}" class="rounded-2xl border border-brand-dark/15 px-6 py-3 font-semibold text-brand-dark hover:bg-white">
            Cancel
        </a>
    </div>
</div>
