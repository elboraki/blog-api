import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from "./article.entity";

@Entity('comments')
export class CommentEnity {
    @PrimaryGeneratedColumn({ name: 'comment_id' })
    id: number;


    @Column({ type: 'text', name: "message" })
    message: string

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(type=>ArticleEntity,article=>article.comments)
    article:ArticleEntity
}