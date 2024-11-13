import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Services } from "./Services";

@Entity("category_service", { schema: "sdoctor" })
export class CategoryService {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => Services, (services) => services.category)
  services: Services[];
}
