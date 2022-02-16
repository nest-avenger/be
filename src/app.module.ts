import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, PrismaModule, CategoryModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
