import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleDto } from './dtos/article.dto';
import { ArticleEntity } from './entities/article.entity';
import { CommentEnity } from './entities/comment.entity';

@Injectable()
export class BlogService {

    constructor(
    @InjectRepository(ArticleEntity) private readonly articlesRepository: Repository<ArticleEntity>, 
    @InjectRepository(CommentEnity) private readonly commentsRepository: Repository<CommentEnity>) {

    }

    getAllArticles() {
        return this.articlesRepository.find({relations:['comments']});
    }

    async getOneArticle(id: number) {
        return await this.articlesRepository.findOne(id);
    }


    async createArticle(articleDto: ArticleDto) {
        const article = await this.articlesRepository.save(articleDto)
        return article
    }


    async updateArticle(articleId: number, articleDto: ArticleDto) {
        const article = await this.articlesRepository.findOne(articleId)
        if (!article) return null
        await this.articlesRepository.update(articleId, articleDto)
        return await this.articlesRepository.findOne(articleId)
    }

    async removeArticle(articleId: number) {
        const articleDto = await this.articlesRepository.findOne(articleId)
        const article = await this.articlesRepository.remove(articleDto)
        return article

    }

    async addComment(articleId,commentDto){
        const article = await this.articlesRepository.findOne(articleId,{relations:['comments']})
        const comment=new CommentEnity()
        comment.article=article
        comment.message=commentDto.message
        return this.commentsRepository.save(commentDto)
    }
}
