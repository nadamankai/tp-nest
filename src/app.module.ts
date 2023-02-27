import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';

@Module({
  //module a importer
  imports: [ PremierModule, TodoModule, CommonModule],
  //controlleur associé a ce module 
  controllers: [AppController],
  //service associé a ce module
  providers: [AppService],
  exports:[AppService]
})
export class AppModule {}
