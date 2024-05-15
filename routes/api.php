<?php

use App\Http\Controllers\ArticleController ;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/articles-by-category', [ArticleController::class, 'getArticlesCategories']);
Route::get('/articles-by-category/{category}', [ArticleController::class, 'getArticlesByCategory']);
Route::resource('articles', ArticleController::class);

Route::get('/article/{id}', [ArticleController::class, 'show']);


