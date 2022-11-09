import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CustEssenciai extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public Moradia: number;

  @column()
  public Transporte: number;

  @column()
  public Saúde: number;

  @column()
  public Serviços: number;

  @column()
  public Alimentação: number;

  @column()
  public Educação: number;
}
