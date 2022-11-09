// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import DistriOrcamento from "App/Models/DistriOrcamento";
export default class DistriOrcamentosController {
  async index() {
    return await DistriOrcamento.query();
  }
  async show({request}){
    const id = await request.param('id')
    return await DistriOrcamento.findOrFail(id)
  }
  async store({ request }) {
    const dados = request.only(["rendimento_liquido"]);

    const Custos_Essenciais = dados.rendimento_liquido * 0.5;
    const Custos_Pessoais = dados.rendimento_liquido * 0.3;
    const Reserva_Financeiras = dados.rendimento_liquido * 0.2;

    dados.custos_essenciais = Custos_Essenciais;
    dados.custos_pessoais = Custos_Pessoais;
    dados.reserva_financeiras = Reserva_Financeiras;

    await DistriOrcamento.create(dados);
    let resultado
    return resultado = {Custos_Essenciais: Custos_Essenciais, Custos_Pessoais: Custos_Pessoais, Reserva_Financeiras: Reserva_Financeiras}
  }
  async destroy({request}){
    const id = await request.param('id')
    const distribuir = await DistriOrcamento.findOrFail(id)
    return await distribuir.delete()
  }
  async update({request}){
    const dados = request.only(["rendimento_liquido"]);
    const id = await request.param('id')
    const distribuir = await DistriOrcamento.findOrFail(id)

    await distribuir.merge(dados).save()

    return distribuir
  }
}
