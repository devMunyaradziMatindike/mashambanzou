@extends('layouts.app', ['title' => 'Post Notice | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-3xl">
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
            <h1 class="mt-3 font-heading text-5xl font-semibold">Post a notice</h1>

            <form method="POST" action="{{ route('admin.notices.store') }}" enctype="multipart/form-data" class="mt-8 rounded-[2rem] border border-brand-dark/10 bg-white/80 p-6 shadow-sm sm:p-8">
                @include('admin.notices._form', ['submitLabel' => 'Post notice'])
            </form>
        </div>
    </section>
@endsection
