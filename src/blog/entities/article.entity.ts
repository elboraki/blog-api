import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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



}