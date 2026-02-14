import { Module } from '@nestjs/common';
import { NfcTagsController } from './nfc-tags.controller';
import { NfcTagsService } from './nfc-tags.service';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [NfcTagsController],
  providers: [NfcTagsService, PrismaService],
})
export class NfcTagsModule {}
