export interface BaseModel {
  objectId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum CourseLevel {
  BASIC = 'BASIC',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export interface Course extends BaseModel {
  name: string;
  fees: number;
  duration: number;
  level: CourseLevel;
}

export interface Class extends BaseModel {
    startDate: Date;
    days: [boolean];
    teacher: string;
    course: Course;
}
