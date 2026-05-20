@extends('layouts.app', ['title' => 'Admin Login | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-xl">
            <div class="overflow-hidden rounded-[2rem] border border-white/20 bg-brand-green p-8 text-white shadow-xl sm:p-10">
                <p class="text-sm font-bold uppercase tracking-[0.25em] text-white/70">Admin</p>
                <h1 class="mt-3 font-heading text-4xl font-semibold">Post success stories</h1>
                <p class="mt-4 leading-7 text-white/80">
                    Sign in to add stories with a date, image and story text.
                </p>

                <form method="POST" action="{{ route('admin.authenticate') }}" class="mt-8 space-y-5">
                    @csrf

                    <div>
                        <label for="email" class="text-sm font-semibold">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value="{{ old('email') }}"
                            required
                            class="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-4 focus:ring-white/20"
                            placeholder="admin@mashambanzou.test"
                        >
                        @error('email')
                            <p class="mt-2 text-sm text-red-100">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="password" class="text-sm font-semibold">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            class="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-4 focus:ring-white/20"
                            placeholder="Enter admin password"
                        >
                    </div>

                    <button class="w-full rounded-2xl bg-white px-6 py-3 font-semibold text-brand-green hover:bg-white/90">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    </section>
@endsection

