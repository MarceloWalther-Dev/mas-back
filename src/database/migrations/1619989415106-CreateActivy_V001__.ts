import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivyV001_1619989415106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"activies",
                columns: [
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"activy_date",
                        type:"timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name:"course_unit_id",
                        type:"varchar"
                    }                    
                ],
                foreignKeys:[
                    {
                        name:"Activy_CourseUnit",
                        referencedTableName:"course_units",
                        referencedColumnNames:["id"],
                        columnNames:["course_unit_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activies");
    }

}
