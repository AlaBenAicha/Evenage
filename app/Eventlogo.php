<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventlogo extends Model
{
    protected $table = 'eventlogos';
    protected $fillable = [
        'logoimage', 
    ];
  
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
