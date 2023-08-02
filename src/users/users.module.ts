import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ExampleMiddleware } from 'src/example/example.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(ExampleMiddleware).forRoutes(
      {
      path: 'users',
      method: RequestMethod.GET,
      },
      {
        path: 'users/:id',
        method: RequestMethod.GET,
        },
    );
  }  
}
