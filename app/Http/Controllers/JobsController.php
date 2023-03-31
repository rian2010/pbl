<?php

namespace App\Http\Controllers;

use App\Http\Resources\JobsCollection;
use App\Models\Jobs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JobsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobs = new JobsCollection(jobs::OrderByDesc('id')->paginate(8));
        return Inertia::render('Homepage', [
            'title' => 'JobFinder',
            'description' => 'Find the job vacancy that you dream of',
            'jobs' => $jobs
        ]);
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
        $jobs = new Jobs();
        $jobs->titles = $request->titles;
        $jobs->description = $request->description;
        $jobs->category = $request->category;
        $jobs->author = auth()->user()->email;
        $jobs->save();
        return redirect()->back()->with('message', 'Lowongan Berhasil Dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Jobs $jobs)
    {
        $myJobs = $jobs::where('author', auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'myJobs' => $myJobs
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Jobs $jobs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Jobs $jobs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jobs $jobs)
    {
        //
    }
}
