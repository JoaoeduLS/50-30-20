import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CustPessoai extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public Internet_e_Telefone: number;

  @column()
  public Entretenimento_e_streaming: number;

  @column()
  public Presentes_e_doações: number;

  @column()
  public Viagens_e_passeios: number;

  @column()
  public Shopping_e_Outros: number;
}
