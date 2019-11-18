import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database: "test",
    username: "postgres",
    password: "pass",
    entities: [Customer],
    synchronize: true,
  }), CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
