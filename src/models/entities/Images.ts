import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostImages } from "./PostImages";

@Entity("images", { schema: "sdoctor" })
export class Images {
  @PrimaryGeneratedColumn({ type: "int", name: "image_id" })
  imageId: number;

  @Column("varchar", { name: "url", length: 255 })
  url: string;

  @Column("text", { name: "alt_text", nullable: true })
  altText: string | null;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @OneToMany(() => PostImages, (postImages) => postImages.image)
  postImages: PostImages[];
}
