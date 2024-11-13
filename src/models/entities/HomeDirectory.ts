import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("home_directory", { schema: "sdoctor" })
export class HomeDirectory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "url", nullable: true, length: 100 })
  url: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("int", { name: "visible", nullable: true })
  visible: number | null;
}
