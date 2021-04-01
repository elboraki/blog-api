import { type } from "node:os";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommentEnity } from "./comment.entity";

@Entity('articles')
export class ArticleEntity {
    @PrimaryGeneratedColumn({name:'article_id'})
    id:number;

    @Column({default:null})
    title:string;

    @Column({type:'text',name:'corps',default:null})
    body:string;

    @CreateDateColumn({default:null})
    createdAt:Date;

    @Column({type:'boolean',default:true})
    published:boolean

    @Column({type:'int',default:0})
    likes:number

    @OneToMany(type=>CommentEnity,comment=>comment.article)
    comments:CommentEnity[]

}