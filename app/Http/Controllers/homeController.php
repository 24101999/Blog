<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidR;
use App\Http\Requests\ValidRequest;
use App\Models\Categoria;
use App\Models\Post;

class homeController extends Controller
{
    public function posts()
    {
        echo Post::all();
    }
    public function insertPost(ValidR $request)
    {
        $model = Categoria::find($request->categoria);


        if ($request->img) {
            $img = $request->img->store('images', 'public');
            $link = asset("storage/$img");
        }

        if ($model) {
            $model->posts()->create([
                'titulo' => $request->titulo,
                'descricao' => $request->descricao,
                'autor' => $request->autor,
                'categoria' => $request->categoria,
                'img' => $link,
            ]);
        } else {
            echo 'erro';
        }
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
    public function categoriasUnica($id)
    {
        echo Categoria::find($id);
    }
}
