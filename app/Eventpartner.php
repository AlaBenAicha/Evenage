<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventpartner extends Model
{
    protected $table = 'eventpartners';
    protected $fillable = [
        'event_id',
        'partnername',
        'partnerlogoimage', 
    ];
  
    public function event()
    {
        return $this->belongsTo('App\Event');
    }
}
