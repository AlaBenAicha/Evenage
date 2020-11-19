<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramdatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programdates', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->foreignId('eventprogram_id')->references('id')->on('eventprograms');
            $table->date('eventday');
            // $table->integer('eventdaydetails_id')->index();
            // $table->foreignId('eventdaydetails_id')->references('id')->on('eventdaydetails');
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
        Schema::dropIfExists('programdates');
    }
}
