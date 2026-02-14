import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class NfcTagsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.nFCTag.findMany();
  }

  async findOne(id: string) {
    return this.prisma.nFCTag.findUnique({ where: { id } });
  }

  async findByTagId(tagId: string) {
    return this.prisma.nFCTag.findUnique({ where: { tagId } });
  }

  async verify(tagId: string) {
    const tag = await this.findByTagId(tagId);
    return tag && tag.isActive;
  }

  async create(data: any) {
    return this.prisma.nFCTag.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.nFCTag.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.nFCTag.delete({ where: { id } });
  }
}
