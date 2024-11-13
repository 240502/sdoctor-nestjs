import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./Doctor";
import { Services } from "./Services";

@Entity("clinic", { schema: "sdoctor" })
export class Clinic {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "location", length: 255 })
  location: string;

  @Column("varchar", { name: "avatar", length: 255 })
  avatar: string;

  @Column("varchar", { name: "cover_image", length: 255 })
  coverImage: string;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("int", { name: "views", nullable: true })
  views: number | null;

  @Column("json", { name: "major_list", nullable: true })
  majorList: object | null;

  @Column("text", { name: "introduction", nullable: true })
  introduction: string | null;

  @OneToMany(() => Doctor, (doctor) => doctor.clinic)
  doctors: Doctor[];

  @OneToMany(() => Services, (services) => services.clinic)
  services: Services[];
}
