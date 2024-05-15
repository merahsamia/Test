<?php


namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'text' => $this->faker->paragraphs(3, true),
            'description' => $this->faker->paragraph,
            'author' => $this->faker->name,
            'image' => $this->faker->imageUrl,
            'category' => $this->faker->randomElement(['Technology', 'Health', 'Finance', 'Education']),
        ];
    }
}

