@extends('layouts.app', ['title' => 'Admin Noticeboard | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
                    <h1 class="mt-3 font-heading text-5xl font-semibold">Noticeboard</h1>
                    <p class="mt-3 text-brand-dark/70">Post notices with title, date, optional picture and notice content.</p>
                </div>
                <a href="{{ route('admin.notices.create') }}" class="inline-flex rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
                    Post a notice
                </a>
            </div>

            <div class="mt-8 overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-white/80 shadow-sm">
                @if ($notices->isEmpty())
                    <div class="p-8 text-center">
                        <h2 class="font-heading text-3xl font-semibold">No notices yet</h2>
                        <p class="mt-3 text-brand-dark/70">Post the first notice to show it on the website noticeboard.</p>
                    </div>
                @else
                    <div class="divide-y divide-brand-dark/10">
                        @foreach ($notices as $notice)
                            <div class="grid gap-4 p-5 md:grid-cols-[120px_1fr_auto] md:items-center">
                                <div>
                                    @if ($notice->image_path)
                                        <img src="{{ asset('storage/'.$notice->image_path) }}" alt="{{ $notice->title }}" class="h-24 w-full rounded-2xl object-cover">
                                    @else
                                        <div class="flex h-24 items-center justify-center rounded-2xl bg-brand-green/10 text-xs font-bold uppercase tracking-widest text-brand-green">
                                            Notice
                                        </div>
                                    @endif
                                </div>

                                <div>
                                    <div class="flex flex-wrap items-center gap-3">
                                        <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                                            {{ optional($notice->published_at)->format('M d, Y g:i A') }}
                                        </p>
                                        <span class="rounded-full px-3 py-1 text-xs font-bold {{ $notice->is_published ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-dark/10 text-brand-dark/60' }}">
                                            {{ $notice->is_published ? 'Published' : 'Draft' }}
                                        </span>
                                    </div>
                                    <h2 class="mt-2 font-heading text-2xl font-semibold">{{ $notice->title }}</h2>
                                    <p class="mt-2 line-clamp-2 text-sm leading-6 text-brand-dark/70">
                                        {{ $notice->excerpt ?: str($notice->body)->stripTags()->limit(150) }}
                                    </p>
                                </div>

                                <div class="flex gap-2 md:justify-end">
                                    <a href="{{ route('admin.notices.edit', $notice) }}" class="rounded-xl border border-brand-dark/15 px-4 py-2 text-sm font-semibold hover:bg-brand-cream">
                                        Edit
                                    </a>
                                    <form method="POST" action="{{ route('admin.notices.destroy', $notice) }}" onsubmit="return confirm('Delete this notice?')">
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
                {{ $notices->links() }}
            </div>
        </div>
    </section>
@endsection
