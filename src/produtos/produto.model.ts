import { ApiProperty } from "@nestjs/swagger";
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Produto extends Model<Produto>{
    
    @ApiProperty()
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    codigo: string;
    
    @ApiProperty()
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string;

    @ApiProperty()
    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    preco: number;
}