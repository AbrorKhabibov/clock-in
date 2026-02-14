import { Module } from '@nestjs/common';
import { TimeLogsController } from './time-logs.controller';
import { TimeLogsService } from './time-logs.service';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [TimeLogsController],
  providers: [TimeLogsService, PrismaService],
})
export class TimeLogsModule {}
