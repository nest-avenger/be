import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './auth.dto';
import { Auth } from './auth.entity';
import { AuthService } from './auth.service';

@ApiTags('AUTHENTIKASI')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({
    type: Auth,
  })
  async login(@Body() body: LoginDto) {
    return this.authService.doLogin(body.email, body.password);
  }
}
