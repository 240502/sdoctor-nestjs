import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comment", { schema: "sdoctor" })
export class Comment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "content" })
  content: string;

  @Column("datetime", { name: "date_booking", nullable: true })
  dateBooking: Date | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Column("varchar", { name: "full_name", nullable: true, length: 255 })
  fullName: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;
}
