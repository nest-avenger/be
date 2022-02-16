import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './article.dto';

@Injectable()
export class ArticleService {
    constructor(
        private prismaService: PrismaService,
    ) {}

    async getAllArticles(): Promise<CreateArticleDto[]> {
        return await this.prismaService.article.findMany({
            include: {
                category: true,
            },
        });
    }

    async create(createArticleDto: CreateArticleDto): Promise<any> {
        return await this.prismaService.article.create({ data: createArticleDto });
    }
}
