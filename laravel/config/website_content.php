<?php

$path = __DIR__.'/../../data/website-content.json';
$fields = [];

if (is_file($path)) {
    $json = json_decode((string) file_get_contents($path), true);
    $fields = is_array($json['fields'] ?? null) ? $json['fields'] : [];
}

return [
    'next_site_url' => env('NEXT_SITE_URL', 'http://localhost:3000'),
    'fields' => $fields,
];
