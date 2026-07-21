<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebsiteContent extends Model
{
    protected $table = 'website_content';

    protected $fillable = [
        'content_key',
        'value',
    ];
}
