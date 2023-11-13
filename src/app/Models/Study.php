<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;

class Study extends Model
{
    // use HasFactory;


    protected $fillable = [
        'user_id',
        'content_id',
        'language_id',
        'hours',
        'create_at'
    ];


    public function users () {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function contents () {
        return $this->belongsTo(Content::class, 'content_id');
    }
    public function languages () {
        return $this->belongsTo(Language::class, 'language_id');
    }

}
