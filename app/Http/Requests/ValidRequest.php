<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Events\Validated;

class ValidRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'titulo' => 'required|string|regex:/^[a-z 0-9 à-ú À-Ú]+$/i',
            'descricao' => 'required|string|regex:/^[a-z 0-9 à-ú À-Ú]+$/i',
            'autor' => 'required|string|regex:/^[a-z à-ú À-Ú]+$/i',
            'img' => 'required|file',
            'categoria' => 'required',
        ];
    }
}
