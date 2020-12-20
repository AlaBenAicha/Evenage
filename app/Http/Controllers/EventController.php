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
         $eventObj->coverimage = $request->get('coverimage');
         $eventObj->logoimage = $request->get('logoimage');
         $eventObj->user_id = $request->get('user_id');

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
    public function show($id)
    {
        $event = Event::find($id);
        return $event;
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
    public function update(Request $request, $id)
    {
        $event = Event::find($id);

        $event->id = $request->get('id');
        $event->event_id = $request->get("event_id");
        $event->eventname = $request->get("eventname");
        $event->eventlocation = $request->get("eventlocation");
        $event->eventstartdate = $request->get("eventstartdate");
        $event->eventenddate = $request->get("eventenddate");
        $event->eventstarttime = $request->get("eventstarttime");
        $event->eventendtime = $request->get("eventendtime");
        $event->eventdescription = $request->get("eventdescription");
        $event->coverimage = $request->get("coverimage");
        $event->logoimage = $request->get("logoimage");
        $event -> save();
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
