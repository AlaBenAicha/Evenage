<?php
Use App\Eventpartner;
Use App\Ticket;
use App\ArchivedTicket;
use App\Event;
Use App\Http\Controllers\EventController;
Use App\Http\Controllers\EventpartnerController;
Use App\Http\Controllers\TicketController;
Use App\Http\Controllers\ArchivedTicketController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resource('UploadImage', 'UploadImageController');
Route::get('events', function() {
    // If the Content-Type and Accept headers are set to 'application/json', // this will return a JSON structure. This will be cleaned up later.
    return Event::all();
});
Route::get('events/{id}', function($id) {
    return Event::find($id);
});
Route::post('events/{id}', function(Request $request, $id) {
    $event = Event::findOrFail($id);
    $event->update($request->all());

    return $event;
});
Route::post('events', 'EventController@store');
Route::put('events/{id}', function(Request $request, $id) {
    $event = Event::findOrFail($id);
    $event->update($request->all());

    return $event;
});
Route::resource('eventcoverimages','EventcoverimagesController');
Route::resource('eventlogos','EventlogosController');
Route::get('eventpartners', function() {
    // If the Content-Type and Accept headers are set to 'application/json', // this will return a JSON structure. This will be cleaned up later.
    return Eventpartner::all();
});
Route::post('eventpartners', 'EventpartnerController@store');
Route::get('tickets', function() {
    // If the Content-Type and Accept headers are set to 'application/json', // this will return a JSON structure. This will be cleaned up later.
    return Ticket::all();
});
Route::post('tickets', 'TicketController@store');
Route::get('tickets/{id}', function($id) {
    return Ticket::find($id);
});
Route::put('tickets/{id}', function(Request $request, $id) {
    $ticket = Ticket::findOrFail($id);
    $ticket->update($request->all());

    return $ticket;
});
Route::delete('tickets/{id}', function($id) {
    Ticket::find($id)->delete();

    return 204;
});
Route::post('archivedtickets', 'ArchivedTicketController@store');
Route::get('archivedtickets', function() {
    return ArchivedTicket::all();
});

// Route::post('eventpartners', [EventpartnerController::class, 'store']);
// Route::resource('eventpartners','EventpartnerController');
Route::resource('eventprograms','EventprogramsController');
Route::resource('programdates','ProgramdatesController');
Route::resource('eventdaydetails','EventdaydetailsController');
Route::name('api.')->namespace('Api')->group(function () {
    // Unprotected routes
    Route::group(['middleware' => 'guest:api'], function () {
        Route::namespace('Auth')->group(function () {
            Route::post('login', 'LoginController')->name('login');
            Route::post('register', 'RegisterController')->name('register');

            // Password Reset Routes...
            Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
            Route::post('password/reset', 'ResetPasswordController@reset');
        });
    });

    // Protected routes
    Route::middleware('auth:api')->group(function () {
        Route::namespace('Auth')->group(function () {
            Route::get('me', 'MeController@me')->name('me');
            Route::post('logout', 'LogoutController@logout')->name('logout');
        });
    });
});
