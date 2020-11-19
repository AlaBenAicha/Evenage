<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventcoverimage extends Model
{
    protected $table = 'eventcoverimages';
    protected $fillable = [
        'coverimage', 
    ];
  
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
