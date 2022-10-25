// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CustPessoai from "App/Models/CustPessoai";

export default class CustPessoaisController {
  index() {
    return CustPessoai.all();
  }
  store({ request }) {
    const dados = request.only([
      "Internet e Telefone",
      "Entretenimento e streaming",
      "Presentes e doações",
      "Viagens e passeios",
      "Shopping e Outros",
    ]);
    return CustPessoai.create(dados);
  }
}
