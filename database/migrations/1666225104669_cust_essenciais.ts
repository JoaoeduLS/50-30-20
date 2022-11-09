import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "cust_essenciais";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("Moradia", 100000).notNullable();
      table.integer("Transporte", 100000).notNullable();
      table.integer("Saúde", 100000).notNullable();
      table.integer("Serviços", 100000).notNullable();
      table.integer("Alimentação", 100000).notNullable();
      table.integer("Educação", 100000).notNullable();

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
