import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ScheduleDetails } from "./ScheduleDetails";

@Entity("schedule", { schema: "sdoctor" })
export class Schedule {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "subscriber_id" })
  subscriberId: number;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "type", length: 10 })
  type: string;

  @OneToMany(
    () => ScheduleDetails,
    (scheduleDetails) => scheduleDetails.schedule
  )
  scheduleDetails: ScheduleDetails[];
}
