<?php
Use App\Eventpartner;
Use App\Ticket;
Use App\Http\Controllers\EventpartnerController;
Use App\Http\Controllers\TicketController;

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
Route::resource('events','EventController');
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
