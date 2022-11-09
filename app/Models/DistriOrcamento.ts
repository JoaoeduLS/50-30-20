import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class DistriOrcamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public custos_essenciais: number;

  @column()
  public custos_pessoais: number;

  @column()
  public reserva_financeiras: number;

  @column()
  public rendimento_liquido: number;
}
