import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { CreateArticleDto } from './article.dto';
import { ArticleService } from './article.service';

@ApiTags('MODULE ARTICLE')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)  // ini untuk menjaga jika user tidak login
  findAll(): Promise<any> {
    return this.articleService.getAllArticles();
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)  // ini untuk menjaga jika user tidak login
  nambahDataArticle(
    @Body() dataInput: CreateArticleDto
  ) {
    return this.articleService.create(dataInput);
  } 
}
