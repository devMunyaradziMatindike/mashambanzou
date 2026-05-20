<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $email = (string) config('admin.email');
        $password = (string) config('admin.password');

        if ($email === '' || $password === '') {
            return;
        }

        User::updateOrCreate(
            ['email' => $email],
            [
                'name' => 'Admin User',
                'password' => $password,
                'role' => 'admin',
            ]
        );
    }
}
