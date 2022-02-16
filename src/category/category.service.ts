import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    private prismaService: PrismaService,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<any> {
    return await this.prismaService.category.create({ data: createCategoryDto });
  }

  async findAll(): Promise<any> {
    return await this.prismaService.category.findMany();
  }

  async findOne(id: number): Promise<any> {
    return await this.prismaService.category.findUnique({ where: { id } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any> {
    return await this.prismaService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: number): Promise<any> {
    return await this.prismaService.category.delete({ where: { id: id } });
  }
}
