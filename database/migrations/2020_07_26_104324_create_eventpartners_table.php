<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventpartnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('eventpartners', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->unsignedBigIncrements('event_id')->nullable();
            $table->string('partnername')->nullable();
            $table->string('partnerlogoimage')->nullable();
            $table->timestamps();

            $table->foreignId('event_id')->references('id')->on('events')->onDelete('cascade');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('eventpartners');
    }
}
