import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.schedule.findMany();
  }

  async findOne(id: string) {
    return this.prisma.schedule.findUnique({ where: { id } });
  }

  async findByUser(userId: string) {
    return this.prisma.schedule.findMany({ where: { userId } });
  }

  async create(data: any) {
    return this.prisma.schedule.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.schedule.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.schedule.delete({ where: { id } });
  }
}
