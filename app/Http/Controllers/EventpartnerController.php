<?php

namespace App\Http\Controllers;

use App\Eventpartner;
use Illuminate\Http\Request;

class EventpartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $eventpartners = Eventpartner::all();
        return $eventpartners;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->all();
        $eventpartner = new Eventpartner();
        $eventpartner->event_id = $request->event_id;
        $eventpartner->partnername = $request->partnername;
        $eventpartner->partnerlogoimage = $request->partnerlogoimage;
        $eventpartner -> save();
        return response()->json($eventpartner);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Eventpartners  $eventpartners
     * @return \Illuminate\Http\Response
     */
    public function show(Eventpartners $eventpartners)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Eventpartners  $eventpartners
     * @return \Illuminate\Http\Response
     */
    public function edit(Eventpartners $eventpartners)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Eventpartners  $eventpartners
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Eventpartners $eventpartners)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Eventpartners  $eventpartners
     * @return \Illuminate\Http\Response
     */
    public function destroy(Eventpartners $eventpartners)
    {
        //
    }
}
