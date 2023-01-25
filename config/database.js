module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'containers-us-west-28.railway.app'),
        port: env.int('DATABASE_PORT', 5639),
        database: env('DATABASE_NAME', 'railway'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'SRhMFswwMYAyArEIRjBE'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
