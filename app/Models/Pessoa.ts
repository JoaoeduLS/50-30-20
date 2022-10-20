
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome:string

  @column()
  public email:string

  @column()
  public cpf:number

  @column()
  public telefone:number

  @column()
  public rendimento_liquido:number
}
