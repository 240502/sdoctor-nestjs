import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clinic } from "./Clinic";
import { CategoryService } from "./CategoryService";

@Index("category_id", ["categoryId"], {})
@Index("clinic_id", ["clinicId"], {})
@Entity("services", { schema: "sdoctor" })
export class Services {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("int", { name: "price" })
  price: number;

  @Column("int", { name: "clinic_id", nullable: true })
  clinicId: number | null;

  @Column("int", { name: "category_id", nullable: true })
  categoryId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("text", { name: "introduction", nullable: true })
  introduction: string | null;

  @Column("int", { name: "views", nullable: true })
  views: number | null;

  @ManyToOne(() => Clinic, (clinic) => clinic.services, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "clinic_id", referencedColumnName: "id" }])
  clinic: Clinic;

  @ManyToOne(
    () => CategoryService,
    (categoryService) => categoryService.services,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: CategoryService;
}
