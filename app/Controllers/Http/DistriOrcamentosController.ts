// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import DistriOrcamento from "App/Models/DistriOrcamento";
export default class DistriOrcamentosController {
  index() {
    return DistriOrcamento.all();
  }
  store({ request }) {
    const dados = request.only([
      "Rendimento_liquido",
      "Custos_Essenciais",
      "Custos_Pessoais",
      "Reserva_Financeiras",
    ]);
    const Custos_Essenciais = dados.Rendimento_liquido * 0.5;
    const Custos_Pessoais = dados.Rendimento_liquido * 0.3;
    const Reserva_Financeiras = dados.Rendimento_liquido * 0.2;

    dados.Custos_Essenciais = Custos_Essenciais;
    dados.Custos_Pessoais = Custos_Pessoais;
    dados.Reserva_Financeiras = Reserva_Financeiras;

    DistriOrcamento.create(dados);

    const resultado = {
      Custos_Essenciais: "R$ " + Custos_Essenciais + ",00",
      Custos_Pessoais: "R$ " + Custos_Pessoais + ",00",
      Reserva_Financeiras: "R$ " + Reserva_Financeiras + ",00",
    };

    return resultado;
  }
}
