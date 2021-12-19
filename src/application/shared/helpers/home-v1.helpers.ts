import {
  CurriculumLevels,
  UserLearningSubjects,
} from 'src/infrastructure/databases/postgres/models';
import { IUsersCurriculum } from '../types/home-v1.type';

export const transformCurriculum = (curriculumLevels: CurriculumLevels[]) => {
  return curriculumLevels.map((curriculumLevel, clIndex) => {
    return {
      id: curriculumLevel.id,
      sequence: curriculumLevel.sequence,
      levelTitle: curriculumLevel.name,
      subjects: curriculumLevel.subjects.map((subject, subjectIndex) => {
        return {
          id: subject.id,
          image_url: subject.imageUrl,
          title: subject.title,
          subject_author: subject.subjectAuthor,
          sequence: subject.sequence,
          status: subjectCheckStatus(
            curriculumLevels,
            curriculumLevel,
            clIndex,
            subjectIndex,
            subject.isMandatory,
            subject.userLearningSubjects,
          ),
        };
      }),
    };
  });
};

const subjectCheckStatus = (
  cls: CurriculumLevels[],
  cl: CurriculumLevels,
  clIndex: number,
  subjectIndex: number,
  isMandatory: boolean,
  userLearningSubjects: UserLearningSubjects,
) => {
  if (subjectIndex === 0 && !userLearningSubjects && clIndex === 0) {
    return 'unlocked';
  }

  if (
    subjectIndex === 0 &&
    isMandatory &&
    !userLearningSubjects &&
    clIndex > 0
  ) {
    const lastCl = cls[clIndex - 1];
    if (
      lastCl.subjects[lastCl.subjects.length - 1]?.userLearningSubjects
        ?.status === 'completed'
    ) {
      return 'unlocked';
    }
  }
  if (userLearningSubjects) {
    if (userLearningSubjects.status === 'completed') return 'completed';
    if (userLearningSubjects.status === 'on_progress') return 'on_progress';
  }
  if (
    cl.subjects[subjectIndex - 1]?.userLearningSubjects?.status === 'completed'
  ) {
    return 'unlocked';
  }
  if (isMandatory) return 'locked';
  return 'unlocked';
};

export const filterRecommendation = (usersCurriculums: IUsersCurriculum[]) => {
  return usersCurriculums
    .map((usersCurriculum) => {
      return usersCurriculum.subjects.find(
        (subject) => subject.status === 'unlocked' || subject.status === 'on_progress',
      );
    })
    .find((e) => e);
};
