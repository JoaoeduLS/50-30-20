// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import DistriOrcamento from "App/Models/DistriOrcamento";
export default class DistriOrcamentosController {
  index() {
    return DistriOrcamento.all();
  }
  store({ request }) {
    const dados = request.only(["rendimento_liquido"]);

    const Custos_Essenciais = dados.rendimento_liquido * 0.5;
    const Custos_Pessoais = dados.rendimento_liquido * 0.3;
    const Reserva_Financeiras = dados.rendimento_liquido * 0.2;

    dados.custos_essenciais = Custos_Essenciais;
    dados.custos_pessoais = Custos_Pessoais;
    dados.reserva_financeiras = Reserva_Financeiras;

    DistriOrcamento.create(dados);
  }
}
