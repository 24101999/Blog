<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;


    protected $fillable = ['descricao', 'titulo', 'autor', 'categoria', "categoria_id"];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
}
