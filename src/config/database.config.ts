import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.POSTGRES_PORT) || 5433,
  username: process.env.DB_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['dist/**/*.entity.js'],
};

export default databaseConfig;
