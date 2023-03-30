<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Jobs>
 */
class JobsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titles' => fake()->sentence(),
            'description' => fake()->paragraph(2, true),
            'category' => fake()->text(),
            'author' => fake()->email(),

        ];
    }
}
