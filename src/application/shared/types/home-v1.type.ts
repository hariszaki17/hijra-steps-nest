export interface IUsersCurriculum {
  id: number;
  sequence: number;
  levelTitle: string;
  subjects: {
    id: number;
    image_url: string;
    title: string;
    subject_author: string;
    sequence: number;
    status: string;
  }[];
}
