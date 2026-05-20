@csrf

<div class="grid gap-6">
    <div>
        <label for="section_key" class="text-sm font-semibold text-brand-dark">Website section</label>
        <select
            id="section_key"
            name="section_key"
            required
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
        >
            <option value="">Choose a section</option>
            @foreach ($sections as $key => $section)
                <option value="{{ $key }}" @selected(old('section_key', $item->section_key) === $key)>
                    {{ $section['label'] }} {{ $section['multiple'] ? '(slideshow/gallery)' : '' }}
                </option>
            @endforeach
        </select>
        @error('section_key')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="label" class="text-sm font-semibold text-brand-dark">Image label</label>
        <input
            id="label"
            name="label"
            value="{{ old('label', $item->label) }}"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="e.g. Outreach, Care Unit, Board portrait"
        >
        @error('label')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="alt_text" class="text-sm font-semibold text-brand-dark">Alt text</label>
        <input
            id="alt_text"
            name="alt_text"
            value="{{ old('alt_text', $item->alt_text) }}"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
            placeholder="Describe the image for accessibility"
        >
        @error('alt_text')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="sort_order" class="text-sm font-semibold text-brand-dark">Sort order</label>
        <input
            id="sort_order"
            name="sort_order"
            type="number"
            min="0"
            value="{{ old('sort_order', $item->sort_order ?? 0) }}"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
        >
        <p class="mt-2 text-sm text-brand-dark/60">Lower numbers show first in slideshows and galleries.</p>
        @error('sort_order')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <label for="image" class="text-sm font-semibold text-brand-dark">Image</label>
        <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 file:mr-4 file:rounded-full file:border-0 file:bg-brand-green file:px-4 file:py-2 file:font-semibold file:text-white"
            @if (! $item->exists) required @endif
        >
        @if ($item->image_path)
            <img src="{{ asset('storage/'.$item->image_path) }}" alt="{{ $item->alt_text ?: $item->label }}" class="mt-4 h-48 w-full rounded-2xl object-cover">
        @endif
        @error('image')
            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
        @enderror
    </div>

    <label class="flex items-center gap-3 rounded-2xl bg-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-dark">
        <input
            type="checkbox"
            name="is_active"
            value="1"
            class="h-5 w-5 rounded border-brand-dark/20 text-brand-green"
            @checked(old('is_active', $item->is_active ?? true))
        >
        Use this image on the website
    </label>

    <div class="flex flex-wrap gap-3">
        <button class="rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
            {{ $submitLabel }}
        </button>
        <a href="{{ route('admin.website-media.index') }}" class="rounded-2xl border border-brand-dark/15 px-6 py-3 font-semibold text-brand-dark hover:bg-white">
            Cancel
        </a>
    </div>
</div>

