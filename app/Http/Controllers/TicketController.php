<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
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
        
        $ticket = new Ticket();
        $ticket->id = $request->get('id');
        $ticket->event_id = $request->get("event_id");
        $ticket->ticketname = $request->get("ticketname");
        $ticket->ticketquantity = $request->get("ticketquantity");
        $ticket->ticketprice = $request->get("ticketprice");
        $ticket->ticketstartdate = $request->get("ticketstartdate");
        $ticket->ticketenddate = $request->get("ticketenddate");
        $ticket->ticketstarttime = $request->get("ticketstarttime");
        $ticket->ticketendtime = $request->get("ticketendtime");
        $ticket->ticketimage = $request->get("ticketimage");
        $ticket -> save();
        return response()->json($ticket);
    }
    return response()->json('failed to add ticket');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ticket = Ticket::find($id);
        return $ticket;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ticket = Ticket::find($id);

        $ticket->id = $request->get('id');
        $ticket->event_id = $request->get("event_id");
        $ticket->ticketname = $request->get("ticketname");
        $ticket->ticketquantity = $request->get("ticketquantity");
        $ticket->ticketprice = $request->get("ticketprice");
        $ticket->ticketstartdate = $request->get("ticketstartdate");
        $ticket->ticketenddate = $request->get("ticketenddate");
        $ticket->ticketstarttime = $request->get("ticketstarttime");
        $ticket->ticketendtime = $request->get("ticketendtime");
        $ticket->ticketimage = $request->get("ticketimage");
        $ticket -> save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy ($id)
        {   
            $ticket = Ticket::find($id);
            $ticket->delete();
        }
}
