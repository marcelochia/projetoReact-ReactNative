exports.up = function(knex) {   // método de criação da tabela de banco de dados
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function(knex) { // método para fazer drop table
    return knex.schema.dropTable('ongs');
};
