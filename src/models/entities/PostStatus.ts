import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post_status", { schema: "sdoctor" })
export class PostStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;
}
