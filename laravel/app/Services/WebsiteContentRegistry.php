<?php

namespace App\Services;

use App\Models\WebsiteContent;

class WebsiteContentRegistry
{
    /** @var array<string, array{page:string,type:string,label:string,default:string}>|null */
    private static ?array $fields = null;

    public static function fields(): array
    {
        if (self::$fields !== null) {
            return self::$fields;
        }

        return self::$fields = config('website_content.fields', []);
    }

    public static function field(string $key): ?array
    {
        return self::fields()[$key] ?? null;
    }

    public static function pages(): array
    {
        $pages = [];

        foreach (self::fields() as $key => $field) {
            $page = $field['page'] ?? 'Other';
            $pages[$page] ??= [];
            $pages[$page][$key] = $field;
        }

        ksort($pages);

        return $pages;
    }

    public static function mergedContent(): array
    {
        $defaults = self::fields();
        $overrides = WebsiteContent::query()->pluck('value', 'content_key');

        $content = [];
        foreach ($defaults as $key => $field) {
            $content[$key] = $overrides[$key] ?? $field['default'] ?? '';
        }

        return $content;
    }

    public static function sanitizeValue(string $type, string $value): string
    {
        if (in_array($type, ['paragraph', 'rich'], true)) {
            return strip_tags($value, '<p><br><strong><em><b><i><a><ul><ol><li><h2><h3><h4><span>');
        }

        return trim(strip_tags($value));
    }

    public static function isRichType(string $type): bool
    {
        return in_array($type, ['paragraph', 'rich'], true);
    }
}
