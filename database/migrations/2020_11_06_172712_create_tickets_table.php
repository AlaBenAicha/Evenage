<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->BigIncrements('id');
            // $table->unsignedBigInteger('event_id')->nullable();
            $table->foreignId('event_id')->references('id')->on('events')->onDelete('cascade')->nullable();
            $table->string('ticketname')->nullable();
            $table->string('ticketquantity')->nullable();
            $table->string('ticketprice')->nullable();
            $table->date('ticketstartdate')->nullable();
            $table->date('ticketenddate')->nullable();
            $table->time('ticketstarttime')->nullable();
            $table->time('ticketendtime')->nullable();
            $table->string('ticketimage')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
