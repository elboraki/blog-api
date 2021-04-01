import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { ArticleEntity } from './entities/article.entity';
import { CommentEnity } from './entities/comment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ArticleEntity,CommentEnity])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
