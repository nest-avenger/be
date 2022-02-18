import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Auth } from './auth.entity';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService,
    ) {}

    async doLogin(email: string, password: string): Promise<Auth> {
        const user = await this.prismaService.user.findUnique({
            where: { email },
        });

        if(!user) {
            throw new NotFoundException('User not found');
        }

        // catatan: ini bukan cara yg baik, harusnya lakukan encrypt password misal dgn bcrypt
        const passwordValid = user?.password === password;

        if(!passwordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        return {
            accessToken: this.jwtService.sign({
                userId: user.id,
            }),
        }
        
    }

    async validateUser(id: number): Promise<any> {
        return await this.prismaService.user.findUnique({
            where: { id },
        });
    }
}
