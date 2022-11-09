import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SaudeFinanceira extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public Custos_essenciais: number;

  @column()
  public Custos_Pessoais: number;

  @column()
  public Reserva_Financeiras: number;
}
