import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { PrismaModule } from './common/prisma/prisma.module'
import { UsersModule } from './models/users/users.module'
import { ManagersModule } from './models/managers/managers.module'
import { CinemasModule } from './models/cinemas/cinemas.module'
import { ScreensModule } from './models/screens/screens.module'
import { SeatsModule } from './models/seats/seats.module'
import { MoviesModule } from './models/movies/movies.module'
import { ShowtimesModule } from './models/showtimes/showtimes.module'
import { BookingsModule } from './models/bookings/bookings.module'
import { AuthModule } from './common/auth/auth.module'
import { FirebaseModule } from './common/firebase/firebase.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),

    PrismaModule,
    AuthModule,
    FirebaseModule,

    UsersModule,
    ManagersModule,
    CinemasModule,
    ScreensModule,
    SeatsModule,
    MoviesModule,
    ShowtimesModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
