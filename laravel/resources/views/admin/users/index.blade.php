@extends('layouts.app', ['title' => 'Admin Users | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
                    <h1 class="mt-3 font-heading text-5xl font-semibold">Admin users</h1>
                    <p class="mt-3 text-brand-dark/70">Create fellow administrators who can manage stories and website images.</p>
                </div>
                <a href="{{ route('admin.users.create') }}" class="inline-flex rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
                    Add admin
                </a>
            </div>

            @if (session('status'))
                <div class="mt-8 rounded-2xl border border-brand-green/20 bg-brand-green/10 px-5 py-4 font-semibold text-brand-green">
                    {{ session('status') }}
                </div>
            @endif

            <div class="mt-8 overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-white/80 shadow-sm">
                @if ($users->isEmpty())
                    <div class="p-8 text-center">
                        <h2 class="font-heading text-3xl font-semibold">No admin users yet</h2>
                        <p class="mt-3 text-brand-dark/70">Create the first database admin user.</p>
                    </div>
                @else
                    <div class="divide-y divide-brand-dark/10">
                        @foreach ($users as $user)
                            <div class="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                                <div>
                                    <h2 class="font-heading text-2xl font-semibold">{{ $user->name }}</h2>
                                    <p class="mt-1 text-brand-dark/70">{{ $user->email }}</p>
                                    <p class="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-green">{{ $user->role }}</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <span class="text-sm text-brand-dark/60">
                                        Added {{ $user->created_at?->format('M d, Y') }}
                                    </span>
                                    <form method="POST" action="{{ route('admin.users.destroy', $user) }}" onsubmit="return confirm('Delete admin user {{ $user->name }}? This cannot be undone.')">
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
        </div>
    </section>
@endsection

