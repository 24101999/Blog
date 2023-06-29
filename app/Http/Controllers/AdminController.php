<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Post;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function postDestroy($id)
    {
        Post::find($id)->delete();
    }
    public function postUpdate(Request $request)
    {
        $update = Post::find($request->id);

        $update->titulo = $request->titulo;
        $update->descricao = $request->descricao;
        $update->autor = $request->autor;
        $update->categoria = $request->categoria;
        $update->categoria_id = $request->categoria;

        $update->save();
    }
}
