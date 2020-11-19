<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventdaydetails extends Model
{
    protected $table = 'eventdaydetails';
    protected $fillable = [
        'subeventtime', 'subeventdescription',
    ];
    protected $casts = [
        'subeventtime'  =>  'timestamp',
    ];
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
