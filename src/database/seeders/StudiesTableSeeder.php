<?php

namespace Database\Seeders;

use App\Models\Study;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $studies = [
            [
            'user_id' => 1,
            'content_id' => 1,
            'language_id' => 1,
            'hours' => 6
        ],
    ];
    DB::table('studies')->insert($studies);
    }
}
