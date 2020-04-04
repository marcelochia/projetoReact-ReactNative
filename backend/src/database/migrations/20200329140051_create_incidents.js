exports.up = function(knex) {   // método de criação da tabela de banco de dados
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); // primary key criada automaticamente

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable(); // chave estrangeira

        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) { // método para fazer drop table
    return knex.schema.dropTable('incidents');
};
