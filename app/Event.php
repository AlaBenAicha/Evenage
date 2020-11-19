<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    protected $fillable = [
        'eventname', 'eventlocation', 'eventstartdate', 'eventenddate', 'eventstarttime', 'eventendtime',
        'eventdescription', 'eventcoverimage_id', 'eventlogo_id', 'eventpartners_id', 'eventprograms_id',
    ];
    protected $casts = [
        'eventcoverimage_id'  =>  'integer',
        'eventlogo_id'  =>  'integer',
        'eventpartners_id'  =>  'integer',
        'eventprograms_id'  =>  'integer',
        'eventstartdate'    =>  'date',
        'eventenddate'  =>  'date',
        'eventstarttime'  =>  'timestamp',
        'eventendtime'  =>  'timestamp',
    ];
    public function eventcoverimages()
    {
        return $this->hasOne(ProductImage::class);
    }

    public function eventlogos()
    {
        return $this->hasOne(ProductImage::class);
    }

    public function eventpartners()
    {
        return $this->hasMany('App\Eventpartner');
    }

    public function eventprograms()
    {
        return $this->hasMany(ProductImage::class);
    }
    public function user()
    {
        return $this->belongsTo('App\User', 'foreign_key');
    }
}
