// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CustPessoai from "App/Models/CustPessoai";

export default class CustPessoaisController {
  index() {
    return CustPessoai.all();
  }
  store({ request }) {
    const dados = request.body()
    const custPessoais= dados.custosPessoais;
    const internetTelefone = dados.internetTelefone;
    const entretenimento = dados.entretenimentoStreaming;
    const presentesDoacoes = dados.presentesDoações;
    const viagensPasseios = dados.viagensPasseios;
    const shopingOutros= dados.shoppingOutros;

    const custopessoais= custPessoais

    const resultadoGastos= internetTelefone+entretenimento+presentesDoacoes+viagensPasseios+shopingOutros;
    
    dados.internet_e_telefone = internetTelefone;
    dados.entretenimento_e_streaming = entretenimento;
    dados.presentes_e_doacoes = presentesDoacoes;
    dados.viagens_e_passeios = viagensPasseios;
    dados.shopping_e_outros = shopingOutros;
    dados.resultado_do_gastos = resultadoGastos;


    CustPessoai.create(dados);
    return {
      resultadoGastos,
      custopessoais,
      internetTelefone,
      entretenimento,
      presentesDoacoes,
      viagensPasseios,
      shopingOutros
    }
  }
}
