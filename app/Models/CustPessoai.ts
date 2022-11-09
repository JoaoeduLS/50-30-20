import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CustPessoai extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public internet_e_telefone: number;

  @column()
  public entretenimento_e_streaming: number;

  @column()
  public presentes_e_doacoes: number;

  @column()
  public viagens_e_passeios: number;

  @column()
  public shopping_e_outros: number;

  @column()
  public resultado_do_gastos: number;
}
