<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventprogramdates extends Model
{
    protected $table = 'eventprogramdates';
    protected $fillable = [
        'eventday', 
    ];
  
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
    
}
