@extends('layouts.app', ['title' => $story->title.' | Mashambanzou Care Trust'])

@section('content')
    <article class="px-4 pb-24">
        <div class="mx-auto max-w-4xl">
            <a href="{{ route('success-stories.index') }}" class="text-sm font-semibold text-brand-green hover:text-brand-dark">
                Back to success stories
            </a>

            <p class="mt-10 text-sm font-bold uppercase tracking-[0.25em] text-brand-green">
                {{ optional($story->published_at)->format('F d, Y') }}
            </p>
            <h1 class="mt-4 font-heading text-5xl font-semibold leading-tight md:text-7xl">
                {{ $story->title }}
            </h1>

            @if ($story->excerpt)
                <p class="mt-6 text-xl leading-9 text-brand-dark/75">{{ $story->excerpt }}</p>
            @endif

            @if ($story->image_path)
                <img
                    src="{{ asset('storage/'.$story->image_path) }}"
                    alt="{{ $story->title }}"
                    class="mt-10 aspect-[16/10] w-full rounded-[2rem] object-cover shadow-xl"
                >
            @endif

            <div class="prose prose-lg mt-10 max-w-none text-brand-dark prose-headings:font-heading prose-a:text-brand-green">
                {!! nl2br(e($story->body)) !!}
            </div>
        </div>
    </article>
@endsection

