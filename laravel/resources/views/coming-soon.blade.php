<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Coming Soon | Mashambanzou Care Trust</title>
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
        <style>
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes pulse-scale {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.08); }
            }
            @keyframes bounce-dot {
                0%, 100% { opacity: 0.3; transform: translateY(0); }
                50% { opacity: 1; transform: translateY(-6px); }
            }
            .spin-slow { animation: spin-slow 8s linear infinite; }
            .pulse-scale { animation: pulse-scale 2s ease-in-out infinite; }
            .bounce-dot { animation: bounce-dot 1.2s ease-in-out infinite; }
            .bounce-dot-2 { animation-delay: 0.2s; }
            .bounce-dot-3 { animation-delay: 0.4s; }
        </style>
    </head>
    <body class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-cream px-6 py-16 text-center font-sans text-brand-dark antialiased">
        <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-sunlight/25 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl pulse-scale"></div>

        <div class="relative z-10 mb-8">
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-green/10 text-2xl font-bold text-brand-green">
                MCT
            </div>
        </div>

        <div class="relative z-10 mb-10 flex h-40 w-40 items-center justify-center rounded-full border-4 border-brand-green/20 bg-white shadow-xl shadow-brand-green/10">
            <div class="absolute inset-3 rounded-full border-2 border-dashed border-brand-green/30 spin-slow"></div>
            <svg class="relative h-16 w-16 text-brand-green pulse-scale" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>

        <p class="relative z-10 text-sm font-bold uppercase tracking-[0.35em] text-brand-green">Mashambanzou Care Trust</p>
        <h1 class="relative z-10 mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">Coming Soon</h1>
        <p class="relative z-10 mt-4 max-w-md text-base text-brand-dark/70 sm:text-lg">
            Our website is being prepared. Please check back soon for updates on our work in Harare and beyond.
        </p>

        <div class="relative z-10 mt-8 flex gap-2" aria-hidden="true">
            <span class="h-2.5 w-2.5 rounded-full bg-brand-green bounce-dot"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-brand-green bounce-dot bounce-dot-2"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-brand-green bounce-dot bounce-dot-3"></span>
        </div>
    </body>
</html>
