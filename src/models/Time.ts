import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";
import { ScheduleDetails } from "./ScheduleDetails";

@Entity("time", { schema: "sdoctor" })
export class Time {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "value", length: 255 })
  value: string;

  @Column("varchar", { name: "type_time", length: 100 })
  typeTime: string;

  @OneToMany(() => Appointment, (appointment) => appointment.time)
  appointments: Appointment[];

  @OneToMany(() => ScheduleDetails, (scheduleDetails) => scheduleDetails.time)
  scheduleDetails: ScheduleDetails[];
}
