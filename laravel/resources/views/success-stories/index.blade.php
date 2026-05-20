@extends('layouts.app', ['title' => 'Success Stories | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-16">
        <div class="mx-auto max-w-7xl">
            <div>
                <p class="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-green">Success Stories</p>
                <h1 class="font-heading text-5xl font-semibold leading-tight text-brand-dark md:text-7xl">
                    Stories of dignity, care and restored hope.
                </h1>
                <p class="mt-6 max-w-2xl text-lg leading-8 text-brand-dark/75">
                    Read updates from the communities, children, families and partners reached through Mashambanzou Care Trust.
                </p>
            </div>
        </div>
    </section>

    <section class="px-4 pb-24">
        <div class="mx-auto max-w-7xl">
            @if ($stories->isEmpty())
                <div class="rounded-[2rem] border border-brand-dark/10 bg-white/70 p-10 text-center shadow-sm">
                    <h2 class="font-heading text-3xl font-semibold">No stories published yet</h2>
                    <p class="mt-3 text-brand-dark/70">Log in to the admin panel to add the first success story.</p>
                    <a href="{{ route('admin.success-stories.create') }}" class="mt-6 inline-flex rounded-full bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
                        Post a story
                    </a>
                </div>
            @else
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    @foreach ($stories as $story)
                        <article class="overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                            @if ($story->image_path)
                                <img
                                    src="{{ asset('storage/'.$story->image_path) }}"
                                    alt="{{ $story->title }}"
                                    class="h-64 w-full object-cover"
                                >
                            @else
                                <div class="flex h-64 items-center justify-center bg-brand-green/15 text-brand-green">
                                    <span class="text-sm font-bold uppercase tracking-[0.25em]">Mashambanzou</span>
                                </div>
                            @endif
                            <div class="p-6">
                                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                                    {{ optional($story->published_at)->format('M d, Y') }}
                                </p>
                                <h2 class="mt-3 font-heading text-2xl font-semibold leading-snug">
                                    <a href="{{ route('success-stories.show', $story) }}" class="hover:text-brand-green">
                                        {{ $story->title }}
                                    </a>
                                </h2>
                                <p class="mt-4 line-clamp-4 leading-7 text-brand-dark/70">
                                    {{ $story->excerpt ?: str($story->body)->stripTags()->limit(180) }}
                                </p>
                                <a href="{{ route('success-stories.show', $story) }}" class="mt-6 inline-flex font-semibold text-brand-green">
                                    Read story
                                </a>
                            </div>
                        </article>
                    @endforeach
                </div>

                <div class="mt-10">
                    {{ $stories->links() }}
                </div>
            @endif
        </div>
    </section>
@endsection

