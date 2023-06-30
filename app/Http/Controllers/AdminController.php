<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Post;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function categoriaInsert(Request  $request)
    {
        $categoria = new Categoria;
        $categoria->name = $request->name;
        $categoria->save();
    }
    public function categoriaUpdate(Request  $request)
    {
        $categoria = Categoria::find($request->id);
        $categoria->name = $request->name;
        $categoria->save();
    }
    public function categoriaDestroy($id)
    {
        Categoria::find($id)->delete();
    }

    public function postDestroy($id)
    {
        Post::find($id)->delete();
    }
    public function postUpdate(Request $request)
    {
        $update = Post::find($request->id);
        if ($request->img) {
            $img = $request->img->store('images', 'public');
            $link = asset("storage/$img");
        }
        $update->titulo = $request->titulo;
        $update->descricao = $request->descricao;
        $update->autor = $request->autor;
        $update->categoria = $request->categoria;
        $update->categoria_id = $request->categoria;
        $update->img = $link;

        $update->save();
    }
}
