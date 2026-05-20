@csrf

<div class="grid gap-6">
    <div>
        <label for="title" class="text-sm font-semibold text-brand-dark">Title</label>
        <input
            id="title"
            name="title"
            value="{{ old('title', $story->title) }}"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="e.g. Mary’s journey of restored hope"
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
            type="date"
            value="{{ old('published_at', optional($story->published_at)->format('Y-m-d')) }}"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
        >
        @error('published_at')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="image" class="text-sm font-semibold text-brand-dark">Picture</label>
        <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 file:mr-4 file:rounded-full file:border-0 file:bg-brand-green file:px-4 file:py-2 file:font-semibold file:text-white"
            @if (! $story->exists) required @endif
        >
        @if ($story->image_path)
            <img src="{{ asset('storage/'.$story->image_path) }}" alt="{{ $story->title }}" class="mt-4 h-40 w-full rounded-2xl object-cover">
        @endif
        @error('image')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="excerpt" class="text-sm font-semibold text-brand-dark">Short summary</label>
        <textarea
            id="excerpt"
            name="excerpt"
            rows="3"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="Optional intro shown on the listing page"
        >{{ old('excerpt', $story->excerpt) }}</textarea>
        @error('excerpt')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="body" class="text-sm font-semibold text-brand-dark">Story text</label>
        <textarea
            id="body"
            name="body"
            rows="12"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 leading-7 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="Write the full story here"
        >{{ old('body', $story->body) }}</textarea>
        @error('body')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <label class="flex items-center gap-3 rounded-2xl bg-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-dark">
        <input
            type="checkbox"
            name="is_published"
            value="1"
            class="h-5 w-5 rounded border-brand-dark/20 text-brand-green"
            @checked(old('is_published', $story->is_published ?? true))
        >
        Publish this story
    </label>

    <div class="flex flex-wrap gap-3">
        <button class="rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
            {{ $submitLabel }}
        </button>
        <a href="{{ route('admin.success-stories.index') }}" class="rounded-2xl border border-brand-dark/15 px-6 py-3 font-semibold text-brand-dark hover:bg-white">
            Cancel
        </a>
    </div>
</div>

