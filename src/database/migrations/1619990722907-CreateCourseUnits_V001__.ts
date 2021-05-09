import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourseUnitsV001_1619990722907 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"course_units",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar",
                    },
                    {
                        name:"description",
                        type:"varchar",
                    },
                    {
                        name:"activies",
                        type :"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                    }
                ],
                foreignKeys:[{
                    name:"CourseUnit_Activy",
                    referencedTableName:"activies",
                    referencedColumnNames:["id"],
                    columnNames:["activies"]
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("course_units");
    }

}
