<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Database\Seeders\StudiesTableSeeder;
use Database\Seeders\ContentsTableSeeder;
use Database\Seeders\LanguagesTableSeeder;
use Database\Seeders\UsersTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(StudiesTableSeeder::class);
        $this->call(ContentsTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
