import { ApiBody, ApiParam, ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
    @ApiProperty({
        description: 'Nama lengkap',
        default: 'Anto',
    })
    name: string;

    @ApiProperty({
        description: 'email untuk register',
        default: 'admin@asrul.dev',
    })
    email: string;

    @ApiProperty({
        description: 'password untuk register',
        default: 'rahasia',
    })
    password: string;
}


export class UpdateUserDTO {
    @ApiProperty({
        description: 'Nama lengkap',
        default: 'Anto',
    })
    name: string;

    @ApiProperty({
        description: 'password untuk register',
        default: 'rahasia',
    })
    password: string;
}

export class UserQueryDTO {
    @ApiProperty({
        required: false,
    })
    sort: string;

    @ApiProperty({
        default: "name",
    })
    order: string;

    @ApiProperty()
    page: number;

    @ApiProperty()
    limit: number;
}