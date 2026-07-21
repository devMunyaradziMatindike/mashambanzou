@extends('layouts.app', ['title' => 'Edit Website Content | Mashambanzou Care Trust'])

@section('content')
    <section class="px-4 pb-24">
        <div class="mx-auto max-w-7xl">
            <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.25em] text-brand-green">Admin</p>
                    <h1 class="mt-3 font-heading text-4xl font-semibold">{{ $page }}</h1>
                    <p class="mt-3 max-w-3xl text-brand-dark/70">
                        Edit text for this page. Paragraph fields support bold, links and lists.
                    </p>
                </div>
                <a href="{{ route('admin.website-content.index') }}" class="rounded-2xl border border-brand-dark/15 px-5 py-2.5 text-sm font-semibold hover:bg-white">
                    All pages
                </a>
            </div>

            @if (session('status'))
                <div class="mt-8 rounded-2xl border border-brand-green/20 bg-brand-green/10 px-5 py-4 font-semibold text-brand-green">
                    {{ session('status') }}
                </div>
            @endif

            <form method="POST" action="{{ route('admin.website-content.update') }}" class="mt-8 space-y-6" id="content-form">
                @csrf
                @method('PUT')
                <input type="hidden" name="page" value="{{ $page }}">

                @foreach ($fields as $key => $field)
                    @php($type = $field['type'] ?? 'paragraph')
                    @php($isRich = in_array($type, ['paragraph', 'rich'], true))
                    @php($current = $content[$key] ?? ($field['default'] ?? ''))
                    @php($isOverride = isset($overrides[$key]))
                    @php($fieldId = md5($key))
                    <div class="rounded-[2rem] border border-brand-dark/10 bg-white/80 p-5 shadow-sm">
                        <div class="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <h2 class="font-heading text-lg font-semibold">{{ $field['label'] ?? $key }}</h2>
                                <code class="mt-1 inline-block rounded-full bg-brand-dark/10 px-3 py-1 text-xs text-brand-dark/70">{{ $key }}</code>
                                <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-dark/50">{{ ucfirst($type) }}</p>
                            </div>
                            <span class="rounded-full px-3 py-1 text-xs font-bold {{ $isOverride ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-dark/10 text-brand-dark/60' }}">
                                {{ $isOverride ? 'Custom' : 'Default' }}
                            </span>
                        </div>

                        @if ($isRich)
                            <textarea
                                id="field-{{ $fieldId }}"
                                name="values[{{ $key }}]"
                                rows="5"
                                class="rich-editor mt-4 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
                            >{{ old('values.'.$key, $current) }}</textarea>
                        @else
                            <input
                                type="text"
                                name="values[{{ $key }}]"
                                value="{{ old('values.'.$key, $current) }}"
                                class="mt-4 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-brand-green/20"
                            >
                        @endif

                        @if ($isOverride)
                            <button
                                type="submit"
                                form="reset-form-{{ $fieldId }}"
                                class="mt-3 text-sm font-semibold text-brand-dark/60 hover:text-brand-dark"
                                onclick="return confirm('Reset this field to the built-in default?')"
                            >
                                Reset to default
                            </button>
                        @endif
                    </div>
                @endforeach

                <div class="flex flex-wrap gap-3">
                    <button type="submit" class="rounded-2xl bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-green/90">
                        Save {{ $page }}
                    </button>
                    <a href="{{ route('admin.website-content.index') }}" class="rounded-2xl border border-brand-dark/15 px-6 py-3 font-semibold text-brand-dark hover:bg-white">
                        Cancel
                    </a>
                </div>
            </form>

            @foreach ($fields as $key => $field)
                @if (isset($overrides[$key]))
                    <form id="reset-form-{{ md5($key) }}" method="POST" action="{{ route('admin.website-content.reset') }}" class="hidden">
                        @csrf
                        <input type="hidden" name="content_key" value="{{ $key }}">
                    </form>
                @endif
            @endforeach
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"></script>
    <script>
        tinymce.init({
            selector: 'textarea.rich-editor',
            menubar: false,
            plugins: 'link lists',
            toolbar: 'bold italic underline | link | bullist numlist | removeformat',
            branding: false,
            license_key: 'gpl',
            height: 220,
            content_style: 'body { font-family: Outfit, sans-serif; font-size: 16px; }',
            setup(editor) {
                editor.on('change', () => editor.save());
            },
        });

        document.getElementById('content-form')?.addEventListener('submit', () => {
            if (window.tinymce) tinymce.triggerSave();
        });
    </script>
@endsection
