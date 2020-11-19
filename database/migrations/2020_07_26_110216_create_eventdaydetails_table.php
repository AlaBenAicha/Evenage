<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventdaydetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventdaydetails', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->foreignId('programdate_id')->references('id')->on('programdates');
            $table->time('subeventtime');
            $table->string('subeventdescription');
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
        Schema::dropIfExists('eventdaydetails');
    }
}
