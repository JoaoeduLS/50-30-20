import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class ReservFinanceira extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public Pagamento_de_dívidas: number;

  @column()
  public Investimentos_e_poupanças: number;
}
