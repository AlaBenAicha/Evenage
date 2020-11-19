<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api')->except('index','show');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->getContent())
       {
         $eventObj = new Event();
         $eventObj->id = $request->get('id');
         $eventObj->eventname = $request->get('eventname');
         $eventObj->eventdescription = $request->get('eventdescription');
         $eventObj->eventlocation = $request->get('eventlocation');
         $eventObj->eventstartdate = $request->get('eventstartdate');
         $eventObj->eventenddate = $request->get('eventenddate');
         $eventObj->eventstarttime = $request->get('eventstarttime');
         $eventObj->eventendtime = $request->get('eventendtime');
        // echo($eventObj);
        //  $Event->eventname = $event->eventname;
        // $event->eventlocation = $request->eventlocation;
        // $event->eventstartdate = $request->eventstartdate;
        // $event->eventenddate = $request->eventenddate;
        // $event->eventstarttime = $request->eventstarttime;
        // $event->eventendtime = $request->eventendtime;
        // $event->eventdescription = $request->eventdescription;
        // $event->eventcoverimage_id = $request->eventcoverimage_id;
        // $event->eventlogo_id = $request->eventlogo_id;
        // $event->eventpartners_id = $request->eventpartners_id;
        // $event->eventprograms_id = $request->eventprograms_id;
        // $eventpath = public_path('events/').$eventname;
        // \Event::make($request->get('event'))->save($eventpath);
        
        // $Event ->eventname=$eventname;
         $eventObj ->save();
          return response()->json($eventObj);
        }



       
        return response()->json('failed to add event');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        $event = UploadImage::findOrFail($id);
        return response()->json($event);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }
}
