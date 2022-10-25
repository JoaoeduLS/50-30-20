// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ReservFinanceira from "App/Models/ReservFinanceira";

export default class ReservFinanceirasController {
  index() {
    return ReservFinanceira.all();
  }
  store({ request }) {
    const dados = request.only([
      "Pagamento_de_dívidas",
      "Investimentos_e_poupanças",
    ]);
    return ReservFinanceira.create(dados);
  }
}
