import {
  Chapters,
  Subjects,
  Topics,
} from 'src/infrastructure/databases/postgres/models';
import { IUsersCurriculum } from '../types/home-v1.type';

const checkChapterStatus = (chapter: Chapters, subjectStatus: string) => {
  if (subjectStatus === 'locked') return 'locked';
  const topicCount: number = chapter.topics.length;
  const unlockedTopic = chapter.topics.reduce((prev, curr) => {
    if (curr.userLearningSubjectChapterTopics[0]) {
      return prev + 1;
    }
  }, 0);
  const ulscIsExist = chapter.userLearningSubjectChapters[0];

  if (!ulscIsExist) return 'locked';
  console.log(chapter.id, '<><><>');

  const isAllCompleted: boolean = chapter.topics.every((topic) => {
    const allTopicStatus = topic.userLearningSubjectChapterTopics.every(
      (ulsct) => ulsct.status === 'completed',
    );

    console.log(allTopicStatus, 'LPLP', unlockedTopic, topicCount);
    return allTopicStatus && unlockedTopic === topicCount;
  });
  if (isAllCompleted && topicCount) return 'completed';
  return 'on_progress';
};

const checkTopicStatus = (chapterStatus: string, topic: Topics) => {
  if (chapterStatus === 'locked') return 'locked';
  if (
    topic.userLearningSubjectChapterTopics &&
    topic.userLearningSubjectChapterTopics.length > 0
  ) {
    return topic.userLearningSubjectChapterTopics[0].status;
  }
};

export const transformSubject = (subject: Subjects, status: string) => {
  return {
    id: subject.id,
    imageUrl: subject.imageUrl,
    description: subject.description,
    title: subject.title,
    subjectAuthor: subject.subjectAuthor,
    chapters: subject.chapters.map((chapter: Chapters) => {
      const statusChapter = checkChapterStatus(chapter, status);

      return {
        id: chapter.id,
        title: chapter.title,
        isBonusContent: chapter.isBonusContent,
        status: statusChapter,
        topics: chapter.topics.map((topic: Topics) => {
          return {
            id: topic.id,
            title: topic.title,
            contentType: topic.contentType,
            topicAuthor: topic.topicAuthor,
            isBonusContent: topic.isBonusContent,
            status: checkTopicStatus(statusChapter, topic),
          };
        }),
      };
    }),
  };
};

export const getSubject = (
  subjectId: number,
  curriculumLevels: IUsersCurriculum[],
) => {
  return curriculumLevels
    .map((cl) => {
      const [subjectFiltered] = cl.subjects.filter(
        (subject) => subject.id === subjectId,
      );
      if (subjectFiltered) {
        return subjectFiltered;
      }
    })
    .filter((e) => e)[0];
};
