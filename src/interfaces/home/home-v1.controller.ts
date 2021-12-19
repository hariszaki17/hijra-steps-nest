import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { HomeV1UseCase } from 'src/application/shared/home-v1.usecase';

@Controller({
  path: 'home',
})
export class HomeV1Controller {
  constructor(private homeUseCase: HomeV1UseCase) {}

  @Get('profile/:userId')
  public async profile(@Param('userId') userId: number): Promise<any> {
    return this.homeUseCase.getProfileData(userId);
  }

  @Get('recommendation/:userId')
  public async recommendation(@Param('userId') userId: number): Promise<any> {
    try {
      return this.homeUseCase.getRecommendation(userId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('curriculum/:userId')
  public async curriculum(@Param('userId') userId: number): Promise<any> {
    return this.homeUseCase.getUserCurriculum(userId);
  }
}
