import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ExampleMiddleware } from './middlewares/example.middleware';
import { AnotherMiddleware } from './middlewares/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AnotherMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
          },
    )
    .apply(ExampleMiddleware).forRoutes(
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
