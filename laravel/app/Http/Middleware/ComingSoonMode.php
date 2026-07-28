<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ComingSoonMode
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! filter_var(config('app.coming_soon'), FILTER_VALIDATE_BOOLEAN)) {
            return $next($request);
        }

        if ($request->is('up')) {
            return $next($request);
        }

        if ($request->is('storage/*')) {
            return $next($request);
        }

        return response()->view('coming-soon');
    }
}
