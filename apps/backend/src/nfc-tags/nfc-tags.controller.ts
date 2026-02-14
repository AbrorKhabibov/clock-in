import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NfcTagsService } from './nfc-tags.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('nfc-tags')
@UseGuards(JwtAuthGuard)
export class NfcTagsController {
  constructor(private readonly nfcTagsService: NfcTagsService) {}

  @Post()
  create(@Body() createNfcTagDto: any) {
    return this.nfcTagsService.create(createNfcTagDto);
  }

  @Post('verify')
  verify(@Body() verifyDto: { tagId: string }) {
    return this.nfcTagsService.verify(verifyDto.tagId);
  }

  @Get()
  findAll() {
    return this.nfcTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nfcTagsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNfcTagDto: any) {
    return this.nfcTagsService.update(id, updateNfcTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nfcTagsService.remove(id);
  }
}
