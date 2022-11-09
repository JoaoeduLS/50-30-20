// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CustEssenciai from "App/Models/CustEssenciai";

export default class CustEssenciaisController {
  index() {
    return CustEssenciai.all();
  }
  store({ request }) {
    const dados = request.only([
      "Moradia",
      "Transporte",
      "Saúde",
      "Serviços",
      "Alimentação",
      "Educação",
    ]);
    return CustEssenciai.create(dados);
  }
}
