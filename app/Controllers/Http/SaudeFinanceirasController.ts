// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SaudeFinanceira from "App/Models/SaudeFinanceira";

export default class SaudeFinanceirasController {
  index() {
    return SaudeFinanceira.all();
  }
  store({ request }) {
    const dados = request.only([
      "Custos_Essenciais",
      "Custos_Pessoais",
      "Reserva_Financeiras",
    ]);
    return SaudeFinanceira.create(dados);
  }
}
