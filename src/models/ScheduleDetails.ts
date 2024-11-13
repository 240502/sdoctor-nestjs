import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Schedule } from "./Schedule";
import { Time } from "./Time";

@Index("fk_schedule", ["scheduleId"], {})
@Index("fk_time", ["timeId"], {})
@Entity("schedule_details", { schema: "sdoctor" })
export class ScheduleDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "schedule_id", nullable: true })
  scheduleId: number | null;

  @Column("int", { name: "time_id", nullable: true })
  timeId: number | null;

  @Column("int", { name: "available", nullable: true })
  available: number | null;

  @ManyToOne(() => Schedule, (schedule) => schedule.scheduleDetails, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "schedule_id", referencedColumnName: "id" }])
  schedule: Schedule;

  @ManyToOne(() => Time, (time) => time.scheduleDetails, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "time_id", referencedColumnName: "id" }])
  time: Time;
}
