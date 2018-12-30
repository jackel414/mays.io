<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MainController extends Controller
{
    public function contact(Request $request)
    {
        Log::info('Contact form submitted: ' . json_encode($request->all()));

        return response()->json(['status' => 'success'], 201);
    }
}
