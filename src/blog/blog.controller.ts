import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';

@Controller('blog')
export class BlogController {
    @Get()
    getAll(){
     
        Logger.log("get ALL articles","BlogController");

        return "Get all article";
    }

    @Get(':articleId')
    getOne(@Param('articleId') articleId){
     
        Logger.log("get one article","BlogController");

        return "Get one article";
    }

    @Post()
    create(@Body() articleDto){
        Logger.log("create an article","BlogController");

        return "create article";
    }

    @Put(':articleId')
    update(@Param(":articleId") articleId,@Body() articleDto){
        Logger.log("update an article","BlogController");

        return "update article";
    }

    @Delete(":articleId")
    delete(@Param("articleId") articleId){
        Logger.log("delete an article","BlogController");

        return "delete article";
    }
}
