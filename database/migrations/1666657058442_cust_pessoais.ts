import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "cust_pessoais";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("internet_e_telefone", 100000).notNullable();
      table.integer("entretenimento_e_streaming", 100000).notNullable();
      table.integer("presentes_e_doacoes", 100000).notNullable();
      table.integer("piagens_e_passeios", 100000).notNullable();
      table.integer("shopping_e_outros", 100000).notNullable();
      table.integer("resultado_do_gastos", 100000).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
