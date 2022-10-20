// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import DistriOrcamento from "App/Models/DistriOrcamento";

export default class DistriOrcamentosController {
  index() {
    return DistriOrcamento.all();
  }
  store({ request }) {
    const dados = request.only([
      "Custos_Essenciais",
      "Custos_Pessoais",
      "Reserva_Financeiras",
    ]);
    return DistriOrcamento.create(dados);
  }
}
