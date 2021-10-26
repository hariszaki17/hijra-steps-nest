import { Inject } from '@nestjs/common';
import { QUIZ_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Quizzes } from '../models';
import { BaseService } from './base.service';

export class QuizServices extends BaseService {
  constructor(
    @Inject(QUIZ_REPOSITORY)
    private readonly quizRepository: typeof Quizzes,
  ) {
    super(quizRepository);
  }
}
