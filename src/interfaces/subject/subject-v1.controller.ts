import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'subject',
})
export class SubjectV1Controller {
  @Get('/:id')
  public async subjectDetail(): Promise<any> {
    return true;
  }
}
