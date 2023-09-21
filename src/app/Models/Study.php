<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Study extends Model
{
    // use HasFactory;


    protected $fillable = [
        'user_id',
        'content_id',
        'language_id',
        'hours'
    ];


    public function user () {
        return $this->belongsTo(User::class);
    }
    public function content () {
        return $this->belongsTo(Content::class);
    }
    public function language () {
        return $this->belongsTo(Language::class);
    }
}
