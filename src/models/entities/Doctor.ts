import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointment } from "./Appointment";
import { Clinic } from "./Clinic";
import { Major } from "./Major";

@Index("clinic_id", ["clinicId"], {})
@Index("major_id", ["majorId"], {})
@Entity("doctor", { schema: "sdoctor" })
export class Doctor {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "full_name", length: 255 })
  fullName: string;

  @Column("int", { name: "clinic_id", nullable: true })
  clinicId: number | null;

  @Column("int", { name: "major_id", nullable: true })
  majorId: number | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "phone", length: 11 })
  phone: string;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "gender", length: 255 })
  gender: string;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("int", { name: "fee" })
  fee: number;

  @Column("varchar", {
    name: "examination_object",
    nullable: true,
    length: 255,
  })
  examinationObject: string | null;

  @Column("int", { name: "views", nullable: true })
  views: number | null;

  @Column("text", { name: "introduction", nullable: true })
  introduction: string | null;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments: Appointment[];

  @ManyToOne(() => Clinic, (clinic) => clinic.doctors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "clinic_id", referencedColumnName: "id" }])
  clinic: Clinic;

  @ManyToOne(() => Major, (major) => major.doctors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "major_id", referencedColumnName: "id" }])
  major: Major;
}
