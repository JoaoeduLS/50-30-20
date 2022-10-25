// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ResultadoDoGasto from "App/Models/ResultadoDoGasto";

export default class ResultadoDoGastosController {
  index() {
    return ResultadoDoGasto.all();
  }
  store({ request }) {
    const dados = request.only([
      "Seu rendimento é de",
      "Seu gasto mensal total",
    ]);
    return ResultadoDoGasto.create(dados);
  }
}
