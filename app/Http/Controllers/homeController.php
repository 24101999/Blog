<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidRequest;
use App\Models\Categoria;
use App\Models\Post;

class homeController extends Controller
{
    public function index(ValidRequest $ValidRequest)
    {

        // Categoria::create(['name' => "tests"]);
        // Categoria::create(['name' => "logos"]);
        // Categoria::create(['name' => "machine"]);

        $model = Categoria::find($ValidRequest->categoria);

        if ($model) {
            $model->posts()->create([
                'titulo' => $ValidRequest->titulo,
                'descricao' => $ValidRequest->descricao,
                'autor' => $ValidRequest->autor,
                'categoria' => $ValidRequest->categoria,
            ]);
        } else {
            echo 'erro';
        }
    }
    public function posts()
    {
        echo Post::all();
    }
    public function postsCategoria($id)
    {
        $categoria = Categoria::find($id);

        echo $categoria->posts;
    }
    public function postsUnico($id)
    {
        echo Post::find($id);
    }

    public function categorias()
    {
        echo Categoria::all();
    }
    public function insertPost()
    {
    }
}
