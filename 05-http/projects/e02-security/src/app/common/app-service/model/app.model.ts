export interface BaseFields {
  objectId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User extends BaseFields {
  username: string;
  password: string;
  email: string;
}

export interface Role extends BaseFields {
  name: string;
  users: User[];
}

export interface Teacher extends BaseFields {
  name: string;
  phone: string;
  user: User;
  email: string;
}

export enum LEVEL {
  BASIC = 'BASIC',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export interface Course extends BaseFields {
  name: string;
  level: LEVEL;
  duration: number;
  fees: number;
  image?: File;
}

export const DAYS = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];

export interface Class extends BaseFields {
  teacher: Teacher;
  course: Course;
  startDate: Date;
  days: (boolean | null)[];
  period: {
    startTime: string;
    endTime: string;
  };
}

export class BatchRequestsBody {
  method = 'POST';
  constructor(public path: string, public body: any) {}
}

export class Pointer {
  __type = 'Pointer';

  constructor(public className: string, public objectId: string) {}
}

export class File {
  __type = 'File';

  constructor(public name: string) {}
}
