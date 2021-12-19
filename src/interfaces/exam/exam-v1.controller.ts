import { Controller, Get, Post } from '@nestjs/common';

@Controller({
  path: 'exam',
})
export class ExamV1Controller {
  @Get('/:id')
  public async examDetail(): Promise<any> {
    return true;
  }

  @Post('/:id')
  public async submitExamAnswer(): Promise<any> {
    return true;
  }
}
