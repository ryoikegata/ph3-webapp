<?php

namespace App\Http\Controllers;

use App\Models\Study;
use App\Models\Content;
use App\Models\Language;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

//mail
use Illuminate\Support\Facades\Mail;
use App\Mail\login;

class StudyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $userId = Auth::id();
        $user = User::find($userId);
        $today = now();
        $month = $today->month();
        $studies = Study::with('contents', 'languages')->where('user_id', $userId)->get();

        Mail::to('recipient@example.com')->send(new login($studies, $user));
        return Inertia::render('Index', ['studies' => $studies, 'user' => $user]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
