// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pessoa from "App/Models/Pessoa";

export default class PessoasController {
  index() {
    return Pessoa.all();
  }
  store({ request }) {
    const dados = request.only([
      "nome",
      "email",
      "cpf",
      "telefone",
      "rendimento_liquido",
    ]);
    return Pessoa.create(dados);
  }
}
