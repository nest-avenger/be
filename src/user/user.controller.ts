import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO, UpdateUserDTO, UserQueryDTO } from './user.dto';

@ApiTags('USER')
@Controller('users')
export class UserController {

    @Get()
    getUser(
        @Query() query: UserQueryDTO,
    ): string {
        return 'Anto';
    }

    @Post()
    @ApiBody({
        type: CreateUserDTO,
    })
    createUser(
        @Body() body: CreateUserDTO,
    ): string {
        return 'Anto';
    }

    @Put(':id')
    updateUser(
        @Param('id') id: string,
        @Body() body: UpdateUserDTO,
    ): string {
        return 'Anto';
    }
}
