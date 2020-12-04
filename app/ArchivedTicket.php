<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ArchivedTicket extends Model
{
    protected $table = 'archivedtickets';
    protected $fillable = [
        'ticketname', 'ticketquantity', 'ticketprice','ticketssold', 'ticketstartdate', 'ticketenddate', 'ticketstarttime', 'ticketendtime',
          'ticketimage', 'event_id',
    ];
    protected $casts = [
        'ticketquantity'  =>  'integer',
        'ticketssold'  =>  'integer',
        'ticketstartdate'    =>  'date',
        'ticketenddate'  =>  'date',
        'ticketstarttime'  =>  'timestamp',
        'ticketendtime'  =>  'timestamp',
        'event_id'  =>  'integer',
    ];
    
    public function event()
    {
        return $this->belongsTo('App\Event', 'foreign_key');
    }
}
