import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./Images";
import { Post } from "./Post";

@Index("image_id", ["imageId"], {})
@Index("post_id", ["postId"], {})
@Entity("post_images", { schema: "sdoctor" })
export class PostImages {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "image_id", nullable: true })
  imageId: number | null;

  @Column("int", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("int", { name: "position" })
  position: number;

  @ManyToOne(() => Images, (images) => images.postImages, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "imageId" }])
  image: Images;

  @ManyToOne(() => Post, (post) => post.postImages, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "post_id", referencedColumnName: "id" }])
  post: Post;
}
