<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('id')->unique();
            //$table->unsignedInteger('user_id');
            //$table->foreignId('user_id')->references('id')->on('users');
            $table->string('eventname');
            $table->string('eventlocation');
            $table->date('eventstartdate');
            $table->date('eventenddate');
            $table->time('eventstarttime');
            $table->time('eventendtime');
            $table->string('eventdescription');
            // $table->unsignedInteger('eventcoverimage_id')->index();
            // $table->foreignId('eventcoverimage_id')->references('id')->on('eventcoverimages');
            // $table->unsignedInteger('eventlogo_id')->index();
            // $table->foreignId('eventlogo_id')->references('id')->on('eventpartners');
            // $table->unsignedInteger('eventpartners_id')->index();
            // $table->foreignId('eventpartners_id')->references('id')->on('eventprograms');
            // $table->unsignedInteger('eventprograms_id')->index();
            // $table->foreignId('eventprograms_id')->references('id')->on('eventprograms');
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
        Schema::dropIfExists('events');
    }
}
