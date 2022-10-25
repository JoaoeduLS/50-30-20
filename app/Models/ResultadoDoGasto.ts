import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class ResultadoDoGasto extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public Seu_rendimento_é_de: number;

  @column()
  public Seu_gasto_mensal_total: number;
}
