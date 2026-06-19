<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TenderInvitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'file_path',
        'original_filename',
        'file_size',
        'mime_type',
        'application_deadline',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'application_deadline' => 'datetime',
            'is_published' => 'boolean',
            'file_size' => 'integer',
        ];
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    public function fileSizeLabel(): string
    {
        $bytes = (int) $this->file_size;

        if ($bytes >= 1048576) {
            return number_format($bytes / 1048576, 2).' MB';
        }

        return number_format($bytes / 1024, 2).' KB';
    }

    public function uploadedLabel(): string
    {
        return 'Uploaded '.$this->created_at->format('l, d F Y g:i:s A');
    }

    public function fileUrl(): string
    {
        return asset('storage/'.$this->file_path);
    }

    public static function uniqueSlug(string $title, ?self $ignore = null): string
    {
        $base = Str::slug($title) ?: Str::random(8);
        $slug = $base;
        $counter = 2;

        while (self::query()
            ->when($ignore, fn (Builder $query) => $query->whereKeyNot($ignore->getKey()))
            ->where('slug', $slug)
            ->exists()
        ) {
            $slug = "{$base}-{$counter}";
            $counter++;
        }

        return $slug;
    }
}
