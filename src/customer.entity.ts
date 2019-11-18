import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false }) name: string;

    @Column({ nullable: false }) email: string;

    @Column({ nullable: false, name: 'phone_number' }) phoneNumber: string;

    @Column({ nullable: false, name: 'alternate_phone_number' }) alternatePhoneNumber: string;

    @Column() age: number;

    @Column() weight: number;

    @Column({ name: 'id_type' }) idType: number;

    @Column({ name: 'id_number' }) idNumber: string;
}