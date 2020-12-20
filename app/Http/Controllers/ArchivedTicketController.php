<?php

namespace App\Http\Controllers;

use App\ArchivedTicket;
use Illuminate\Http\Request;


class ArchivedTicketController extends Controller
{
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
        if($request->getContent())
       {
        $archivedticket = new ArchivedTicket();
        $archivedticket->id = $request->get('id');
        $archivedticket->event_id = $request->get("event_id");
        $archivedticket->ticketname = $request->get("ticketname");
        $archivedticket->ticketquantity = $request->get("ticketquantity");
        $archivedticket->ticketprice = $request->get("ticketprice");
        $archivedticket->ticketstartdate = $request->get("ticketstartdate");
        $archivedticket->ticketenddate = $request->get("ticketenddate");
        $archivedticket->ticketstarttime = $request->get("ticketstarttime");
        $archivedticket->ticketendtime = $request->get("ticketendtime");
        $archivedticket->ticketimage = $request->get("ticketimage");
        $archivedticket -> save();
        return response()->json($archivedticket);
    }
    return response()->json('failed to add event');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
