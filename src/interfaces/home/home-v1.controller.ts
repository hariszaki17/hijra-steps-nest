import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'home',
})
export class HomeV1Controller {
  @Get('profile/:userId')
  public async profile(): Promise<any> {
    return true;
  }

  @Get('recommendation/:userId')
  public async recommendation(): Promise<any> {
    return true;
  }

  @Get('curriculum/:userId')
  public async curriculum(): Promise<any> {
    return true;
  }
}
