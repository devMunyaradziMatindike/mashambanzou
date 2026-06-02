<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ $title ?? 'Mashambanzou Care Trust' }}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            brand: {
                                cream: '#f7f2e7',
                                dark: '#12343b',
                                green: '#0ea5a6',
                                sunlight: '#f9c74f',
                            },
                        },
                        fontFamily: {
                            heading: ['Outfit', 'ui-sans-serif', 'system-ui'],
                            sans: ['Outfit', 'ui-sans-serif', 'system-ui'],
                        },
                    },
                },
            };
        </script>
    </head>
    <body class="min-h-screen bg-brand-cream text-brand-dark antialiased">
        <header class="fixed inset-x-0 top-0 z-50 px-4 py-4">
            <div class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-5 py-3 shadow-sm backdrop-blur">
                <a href="{{ route('success-stories.index') }}" class="font-heading text-xl font-semibold tracking-tight">
                    Mashambanzou Care Trust
                </a>
                <nav class="hidden items-center gap-6 text-sm font-semibold md:flex">
                    <a class="hover:text-brand-green" href="{{ route('success-stories.index') }}">Success Stories</a>
                    <a class="hover:text-brand-green" href="{{ route('admin.success-stories.index') }}">Stories Admin</a>
                    <a class="hover:text-brand-green" href="{{ route('admin.website-media.index') }}">Website Images</a>
                    <a class="hover:text-brand-green" href="{{ route('admin.users.index') }}">Admin Users</a>
                </nav>
                @if (session('mct_admin'))
                    <form method="POST" action="{{ route('admin.logout') }}">
                        @csrf
                        <button class="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green/90">
                            Sign out
                        </button>
                    </form>
                @else
                    <a href="{{ route('admin.login') }}" class="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green/90">
                        Admin login
                    </a>
                @endif
            </div>
        </header>

        <main class="pt-28">
            @yield('content')
        </main>

        <footer class="border-t border-brand-dark/10 px-4 py-10">
            <div class="mx-auto max-w-7xl text-sm text-brand-dark/70">
                &copy; {{ now()->year }} Mashambanzou Care Trust. Care, dignity and hope.
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        @if (session('status'))
            <script>
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: @json(session('status')),
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#0ea5a6',
                });
            </script>
        @endif

        @if (session('error') || $errors->any())
            <script>
                Swal.fire({
                    icon: 'error',
                    title: 'Upload failed',
                    text: @json(session('error') ?: $errors->first()),
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626',
                });
            </script>
        @endif
    </body>
</html>

