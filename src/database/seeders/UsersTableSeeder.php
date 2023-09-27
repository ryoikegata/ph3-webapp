<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'りょう',
                'email' => 'ryo.ike.6153@gmail.com',
                'password' => 'password'
            ],
            ];
            DB::table('users')->insert($users);
    }
}
