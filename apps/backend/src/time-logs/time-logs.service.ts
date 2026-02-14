import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class TimeLogsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.timeLog.findMany();
  }

  async findOne(id: string) {
    return this.prisma.timeLog.findUnique({ where: { id } });
  }

  async findByUser(userId: string) {
    return this.prisma.timeLog.findMany({ where: { userId } });
  }

  async clockIn(data: any) {
    return this.prisma.timeLog.create({
      data: {
        ...data,
        clockIn: new Date(),
        status: 'CLOCKED_IN',
      },
    });
  }

  async clockOut(id: string) {
    return this.prisma.timeLog.update({
      where: { id },
      data: {
        clockOut: new Date(),
        status: 'CLOCKED_OUT',
      },
    });
  }

  async create(data: any) {
    return this.prisma.timeLog.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.timeLog.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.timeLog.delete({ where: { id } });
  }
}
