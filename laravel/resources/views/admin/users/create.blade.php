@extends('layouts.app', ['title' => 'Add Admin User | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-3xl">
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
            <h1 class="mt-3 font-heading text-5xl font-semibold">Add admin user</h1>
            <p class="mt-3 text-brand-dark/70">The role is fixed to admin for this portal.</p>

            <form method="POST" action="{{ route('admin.users.store') }}" class="mt-8 rounded-[2rem] border border-brand-dark/10 bg-white/80 p-6 shadow-sm sm:p-8">
                @csrf

                <div class="grid gap-6">
                    <div>
                        <label for="name" class="text-sm font-semibold text-brand-dark">Name</label>
                        <input
                            id="name"
                            name="name"
                            value="{{ old('name') }}"
                            required
                            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
                            placeholder="Full name"
                        >
                        @error('name')
                            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="email" class="text-sm font-semibold text-brand-dark">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value="{{ old('email') }}"
                            required
                            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
                            placeholder="admin@example.com"
                        >
                        @error('email')
                            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="rounded-2xl bg-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-dark">
                        Role: <span class="text-brand-green">admin</span>
                    </div>

                    <div>
                        <label for="password" class="text-sm font-semibold text-brand-dark">New password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
                            placeholder="At least 8 characters"
                        >
                        @error('password')
                            <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="password_confirmation" class="text-sm font-semibold text-brand-dark">Confirm password</label>
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            required
                            class="mt-2 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
                            placeholder="Re-enter password"
                        >
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <button class="rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
                            Create admin
                        </button>
                        <a href="{{ route('admin.users.index') }}" class="rounded-2xl border border-brand-dark/15 px-6 py-3 font-semibold text-brand-dark hover:bg-white">
                            Cancel
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </section>
@endsection

