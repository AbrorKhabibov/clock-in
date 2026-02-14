import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TimeLogsService } from './time-logs.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('time-logs')
@UseGuards(JwtAuthGuard)
export class TimeLogsController {
  constructor(private readonly timeLogsService: TimeLogsService) {}

  @Post()
  create(@Body() createTimeLogDto: any) {
    return this.timeLogsService.create(createTimeLogDto);
  }

  @Post('clock-in')
  clockIn(@Body() clockInDto: any) {
    return this.timeLogsService.clockIn(clockInDto);
  }

  @Patch('clock-out/:id')
  clockOut(@Param('id') id: string) {
    return this.timeLogsService.clockOut(id);
  }

  @Get()
  findAll() {
    return this.timeLogsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.timeLogsService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeLogsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeLogDto: any) {
    return this.timeLogsService.update(id, updateTimeLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeLogsService.remove(id);
  }
}
