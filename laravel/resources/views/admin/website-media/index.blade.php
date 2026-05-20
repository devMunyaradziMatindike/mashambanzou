@extends('layouts.app', ['title' => 'Website Images | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-7xl">
            <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
                    <h1 class="mt-3 font-heading text-5xl font-semibold">Website images</h1>
                    <p class="mt-3 max-w-3xl text-brand-dark/70">
                        Replace images across the public website, including slideshows, management photos, board member photos and impact page feature images.
                    </p>
                </div>
                <a href="{{ route('admin.website-media.create') }}" class="inline-flex rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
                    Add image
                </a>
            </div>

            @if (session('status'))
                <div class="mt-8 rounded-2xl border border-brand-green/20 bg-brand-green/10 px-5 py-4 font-semibold text-brand-green">
                    {{ session('status') }}
                </div>
            @endif

            <div class="mt-8 grid gap-6">
                @foreach ($sections as $key => $section)
                    @php($items = $media->get($key, collect()))
                    @php($activeItems = $items->where('is_active', true)->values())
                    @php($fallbacks = collect($section['fallbacks'] ?? []))
                    @php($liveImages = $activeItems->isNotEmpty() ? $activeItems : $fallbacks)
                    @php($usingFallbacks = $activeItems->isEmpty() && $fallbacks->isNotEmpty())
                    <section class="overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-white/80 shadow-sm">
                        <div class="flex flex-col gap-4 border-b border-brand-dark/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 class="font-heading text-2xl font-semibold">{{ $section['label'] }}</h2>
                                <p class="mt-1 text-sm text-brand-dark/60">
                                    {{ $section['multiple'] ? 'Supports multiple images for a slideshow or gallery.' : 'Uses one active replacement image.' }}
                                </p>
                                <code class="mt-2 inline-block rounded-full bg-brand-dark/10 px-3 py-1 text-xs text-brand-dark/70">{{ $key }}</code>
                            </div>
                            <a href="{{ route('admin.website-media.create', ['section' => $key]) }}" class="rounded-2xl bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green/90">
                                {{ $section['multiple'] ? 'Add image' : 'Replace image' }}
                            </a>
                        </div>

                        @if ($liveImages->isEmpty())
                            <div class="p-5 text-sm text-brand-dark/60">
                                No image has been registered for this section yet.
                            </div>
                        @else
                            <div class="border-b border-brand-dark/10 px-5 pt-5">
                                <div class="flex flex-wrap items-center gap-3">
                                    <h3 class="font-heading text-xl font-semibold">Currently showing on the website</h3>
                                    <span class="rounded-full px-3 py-1 text-xs font-bold {{ $usingFallbacks ? 'bg-brand-dark/10 text-brand-dark/60' : 'bg-brand-green/10 text-brand-green' }}">
                                        {{ $usingFallbacks ? 'Built-in site image' : 'Admin replacement' }}
                                    </span>
                                </div>
                                <p class="mt-2 text-sm text-brand-dark/60">
                                    {{ $usingFallbacks ? 'Upload a replacement to override this image automatically on the Next.js website.' : 'These active admin uploads are being served to the Next.js website.' }}
                                </p>
                            </div>
                            <div class="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
                                @foreach ($liveImages as $item)
                                    @php($isFallback = is_array($item))
                                    @php($src = $isFallback ? ($item['src'] ?? '') : asset('storage/'.$item->image_path))
                                    @php($imageUrl = $isFallback && ! str_starts_with($src, 'http') ? $nextSiteUrl.'/'.ltrim($src, '/') : $src)
                                    @php($label = $isFallback ? ($item['label'] ?? 'Built-in site image') : ($item->label ?: 'Website image'))
                                    @php($alt = $isFallback ? ($item['alt'] ?? $label) : ($item->alt_text ?: $label))
                                    <article class="overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-cream">
                                        <img src="{{ $imageUrl }}" alt="{{ $alt }}" class="h-44 w-full object-cover">
                                        <div class="p-4">
                                            <div class="flex items-center justify-between gap-3">
                                                <h3 class="font-semibold">{{ $label }}</h3>
                                                <span class="rounded-full px-3 py-1 text-xs font-bold {{ $isFallback ? 'bg-brand-dark/10 text-brand-dark/60' : 'bg-brand-green/10 text-brand-green' }}">
                                                    {{ $isFallback ? 'Current fallback' : 'Active' }}
                                                </span>
                                            </div>
                                            <p class="mt-2 text-sm text-brand-dark/60">{{ $alt }}</p>
                                            @if (! $isFallback)
                                                <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-dark/50">Order: {{ $item->sort_order }}</p>
                                            @endif
                                            <div class="mt-4 flex gap-2">
                                                @if ($isFallback)
                                                    <a href="{{ route('admin.website-media.create', ['section' => $key]) }}" class="rounded-xl bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green/90">
                                                        Replace image
                                                    </a>
                                                @else
                                                    <a href="{{ route('admin.website-media.edit', $item) }}" class="rounded-xl border border-brand-dark/15 px-4 py-2 text-sm font-semibold hover:bg-white">
                                                        Edit replacement
                                                    </a>
                                                    <form method="POST" action="{{ route('admin.website-media.destroy', $item) }}" onsubmit="return confirm('Delete this website image? The site will fall back to its built-in image.')">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button class="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
                                                            Delete
                                                        </button>
                                                    </form>
                                                @endif
                                            </div>
                                        </div>
                                    </article>
                                @endforeach
                            </div>
                        @endif

                        @if ($items->where('is_active', false)->isNotEmpty())
                            <div class="border-t border-brand-dark/10 p-5">
                                <h3 class="font-heading text-lg font-semibold">Hidden admin uploads</h3>
                                <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    @foreach ($items->where('is_active', false) as $item)
                                        <article class="overflow-hidden rounded-2xl border border-brand-dark/10 bg-white opacity-75">
                                            <img src="{{ asset('storage/'.$item->image_path) }}" alt="{{ $item->alt_text ?: $item->label }}" class="h-32 w-full object-cover">
                                            <div class="p-4">
                                                <h4 class="font-semibold">{{ $item->label ?: 'Hidden image' }}</h4>
                                                <a href="{{ route('admin.website-media.edit', $item) }}" class="mt-3 inline-flex rounded-xl border border-brand-dark/15 px-4 py-2 text-sm font-semibold hover:bg-brand-cream">
                                                    Edit
                                                </a>
                                            </div>
                                        </article>
                                    @endforeach
                                </div>
                            </div>
                        @endif
                    </section>
                @endforeach
            </div>
        </div>
    </section>
@endsection

