import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'learning',
})
export class LearningV1Controller {
  @Get('topic/:id')
  public async profile(): Promise<any> {
    return true;
  }
}
