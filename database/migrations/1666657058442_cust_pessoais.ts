import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "cust_pessoais";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("Internet e Telefone", 100000).notNullable();
      table.integer("Entretenimento e streaming", 100000).notNullable();
      table.integer("Presentes e doações", 100000).notNullable();
      table.integer("Viagens e passeios", 100000).notNullable();
      table.integer("Shopping e Outros", 100000).notNullable();

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
