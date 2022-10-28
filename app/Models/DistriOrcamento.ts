import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class DistriOrcamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public Custos_Essenciais: number;

  @column()
  public Custos_Pessoais: number;

  @column()
  public Reserva_Financeiras: number;

  @column()
  public RendimentoLiquido: number;
}
