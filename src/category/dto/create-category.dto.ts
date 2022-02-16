import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty(
        {
            description: "Category name",
            default: "PHP",
        }
    )
    name: string;
}
