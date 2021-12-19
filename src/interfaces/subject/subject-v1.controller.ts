import { Body, Controller, Post } from '@nestjs/common';
import { SubjectV1UseCase } from 'src/application/shared/subject-v1.usecase';

@Controller({
  path: 'subject',
})
export class SubjectV1Controller {
  constructor(private subjectUseCase: SubjectV1UseCase) {}
  @Post()
  public async subjectDetail(@Body() body: any): Promise<any> {
    const { userId, subjectId } = body;
    return this.subjectUseCase.getUserSubject(userId, subjectId);
  }
}
