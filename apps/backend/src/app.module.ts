import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { SchedulesModule } from './schedules/schedules.module';
import { TimeLogsModule } from './time-logs/time-logs.module';
import { NfcTagsModule } from './nfc-tags/nfc-tags.module';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    CompaniesModule,
    SchedulesModule,
    TimeLogsModule,
    NfcTagsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
