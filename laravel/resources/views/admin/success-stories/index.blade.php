@extends('layouts.app', ['title' => 'Admin Success Stories | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
                    <h1 class="mt-3 font-heading text-5xl font-semibold">Success stories</h1>
                    <p class="mt-3 text-brand-dark/70">Create, edit, publish and delete stories stored in MySQL.</p>
                </div>
                <a href="{{ route('admin.success-stories.create') }}" class="inline-flex rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
                    Post a story
                </a>
            </div>

            @if (session('status'))
                <div class="mt-8 rounded-2xl border border-brand-green/20 bg-brand-green/10 px-5 py-4 font-semibold text-brand-green">
                    {{ session('status') }}
                </div>
            @endif

            <div class="mt-8 overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-white/80 shadow-sm">
                @if ($stories->isEmpty())
                    <div class="p-8 text-center">
                        <h2 class="font-heading text-3xl font-semibold">No stories yet</h2>
                        <p class="mt-3 text-brand-dark/70">Post the first success story to publish it on the website.</p>
                    </div>
                @else
                    <div class="divide-y divide-brand-dark/10">
                        @foreach ($stories as $story)
                            <div class="grid gap-4 p-5 md:grid-cols-[120px_1fr_auto] md:items-center">
                                <div>
                                    @if ($story->image_path)
                                        <img src="{{ asset('storage/'.$story->image_path) }}" alt="{{ $story->title }}" class="h-24 w-full rounded-2xl object-cover">
                                    @else
                                        <div class="flex h-24 items-center justify-center rounded-2xl bg-brand-green/10 text-xs font-bold uppercase tracking-widest text-brand-green">
                                            Story
                                        </div>
                                    @endif
                                </div>

                                <div>
                                    <div class="flex flex-wrap items-center gap-3">
                                        <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                                            {{ optional($story->published_at)->format('M d, Y') }}
                                        </p>
                                        <span class="rounded-full px-3 py-1 text-xs font-bold {{ $story->is_published ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-dark/10 text-brand-dark/60' }}">
                                            {{ $story->is_published ? 'Published' : 'Draft' }}
                                        </span>
                                    </div>
                                    <h2 class="mt-2 font-heading text-2xl font-semibold">{{ $story->title }}</h2>
                                    <p class="mt-2 line-clamp-2 text-sm leading-6 text-brand-dark/70">
                                        {{ $story->excerpt ?: str($story->body)->stripTags()->limit(150) }}
                                    </p>
                                </div>

                                <div class="flex gap-2 md:justify-end">
                                    <a href="{{ route('admin.success-stories.edit', $story) }}" class="rounded-xl border border-brand-dark/15 px-4 py-2 text-sm font-semibold hover:bg-brand-cream">
                                        Edit
                                    </a>
                                    <form method="POST" action="{{ route('admin.success-stories.destroy', $story) }}" onsubmit="return confirm('Delete this success story?')">
                                        @csrf
                                        @method('DELETE')
                                        <button class="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @endif
            </div>

            <div class="mt-8">
                {{ $stories->links() }}
            </div>
        </div>
    </section>
@endsection

