import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { ArticleDto } from './dtos/article.dto';
import { CommentDto } from './dtos/comment.dto';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {

    }
    @Get()
    getAll() {

        Logger.log("get ALL articless", "BlogController");

        return this.blogService.getAllArticles();
    }

    @Get(':articleId')
    async getOne(@Param('articleId') articleId) {

        Logger.log("get one article", "BlogController");

        const article = await this.blogService.getOneArticle(articleId);
        if (article) return article
        throw new HttpException('article is null', HttpStatus.NOT_FOUND)
    }

    @Post()
    async create(@Body() articleDto: ArticleDto) {
        Logger.log("create an article", "BlogController");
        const article = await this.blogService.createArticle(articleDto)
        if (article)
            return article

        throw new HttpException('Not Exception', HttpStatus.NOT_MODIFIED)
    }

    @Put(':articleId')
    async update(@Param("articleId") articleId, @Body() articleDto: ArticleDto) {
        Logger.log("update an article", "BlogController--->" + articleId);
        const article = await this.blogService.updateArticle(articleId, articleDto);
        if (article) return article;
        throw new HttpException('Not Modified', HttpStatus.NOT_MODIFIED)

    }

    @Delete(":articleId")
    async delete(@Param("articleId") articleId) {
        Logger.log("delete an article", "BlogController");
        const article = await this.blogService.removeArticle(articleId);
        if (article) return article;
        throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }

    @Post("comment/:articleId")
    async addComment(@Param("articleId") articleId, @Body() commentDto: CommentDto) {
        //Logger.log("delete an article", "BlogController");
        //const commentDto=new CommentDto();

        const comment = await this.blogService.addComment(articleId, commentDto);
        if (comment) return comment;
        throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
}
