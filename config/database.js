module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bhdean'),
      user: env('DATABASE_USERNAME', 'bhdean'),
      password: env('DATABASE_PASSWORD', '1400_w5WHD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
