import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
    @ApiProperty({
        description: "Article title",
        default: "My first article",
        required: true,
    })
    title: string;

    @ApiProperty({
        description: "Article content",
        required: false,
    })
    @ApiHideProperty()
    content: string;

    @ApiProperty({
        required: true,
    })
    categoryId: number;
}