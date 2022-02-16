import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateArticleDto } from './article.dto';
import { ArticleService } from './article.service';

@ApiTags('MODULE ARTICLE')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll(): Promise<any> {
    return this.articleService.getAllArticles();
  }

  @Post()
  nambahDataArticle(
    @Body() dataInput: CreateArticleDto
  ) {
    return this.articleService.create(dataInput);
  } 
}
