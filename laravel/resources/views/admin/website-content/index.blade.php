@extends('layouts.app', ['title' => 'Website Content | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-7xl">
            <div>
                <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
                <h1 class="mt-3 font-heading text-5xl font-semibold">Website content</h1>
                <p class="mt-3 max-w-3xl text-brand-dark/70">
                    Edit headings, subheadings, paragraphs, CTAs, stats and navigation labels across the public website.
                </p>
            </div>

            @if (session('status'))
                <div class="mt-8 rounded-2xl border border-brand-green/20 bg-brand-green/10 px-5 py-4 font-semibold text-brand-green">
                    {{ session('status') }}
                </div>
            @endif

            <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                @foreach ($pages as $pageName => $fields)
                    @php($overrideCount = collect($fields)->keys()->filter(fn ($key) => isset($overrides[$key]))->count())
                    <a href="{{ route('admin.website-content.edit', ['page' => $pageName]) }}" class="rounded-[2rem] border border-brand-dark/10 bg-white/80 p-6 shadow-sm transition hover:border-brand-green/30 hover:shadow-md">
                        <h2 class="font-heading text-2xl font-semibold">{{ $pageName }}</h2>
                        <p class="mt-2 text-sm text-brand-dark/60">{{ count($fields) }} editable fields</p>
                        <p class="mt-3 text-xs font-semibold uppercase tracking-wider {{ $overrideCount ? 'text-brand-green' : 'text-brand-dark/50' }}">
                            {{ $overrideCount ? $overrideCount.' custom override'.($overrideCount === 1 ? '' : 's') : 'Using built-in defaults' }}
                        </p>
                    </a>
                @endforeach
            </div>
        </div>
    </section>
@endsection
