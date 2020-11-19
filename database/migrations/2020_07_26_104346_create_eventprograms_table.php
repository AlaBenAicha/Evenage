<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventprogramsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventprograms', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->foreignId('event_id')->references('id')->on('events');
            // $table->unsignedInteger('programdates_id')->index();
            // $table->foreignId('programdates_id')->references('id')->on('programdates');
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
        Schema::dropIfExists('eventprograms');
    }
}
