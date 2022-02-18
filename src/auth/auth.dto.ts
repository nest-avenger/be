import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsEmail()
    @ApiProperty({
        description: "Isi dengan email anda",
    })
    email: string;
    
    @IsNotEmpty()
    @ApiProperty({
        description: "Isi dengan password anda",
    })
    password: string;
}