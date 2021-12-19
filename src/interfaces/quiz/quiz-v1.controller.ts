import { Controller, Get, Post } from '@nestjs/common';

@Controller({
  path: 'quiz',
})
export class QuizV1Controller {
  @Get('/:id')
  public async quizDetail(): Promise<any> {
    return true;
  }

  @Post('/:id')
  public async submitQuizAnswer(): Promise<any> {
    return true;
  }
}
