export interface StudentInterface {
  id: number;
  name: string;
  contact: { phone: string; email: string };
  course: string;
  gender: string;
  interest: { [key: string]: boolean };
  type: boolean;
}

const INTEREST = ['javascript', 'typescript', 'angular'];
const STORAGE = 'com.haa.angular.form.students';

export class StudentModel {
  private studentList: StudentInterface[] = [];

    private idGenerator = 0;

  public addStudent(student: StudentInterface) {

    if(student.id == 0) {
        // new
        student.id = ++this.idGenerator;
    }else {
        // update
        this.studentList = this.studentList
            .filter(s => s.id !== student.id);
    }
    this.studentList.push(student);

    // Add to Browser LocalStroage
    // this.saveToLocalStorage();
    
  }

  public getAllStudent(): StudentInterface[] {
    // return this.studentList;
    return [
      ...this.studentList.filter((student) => {
        return {
          ...student,
          contact: { ...student.contact },
          interest: { ...student.interest },
        };
      }),
    ];
  }

  public getById(id: number) {
    const storedStudent = { ...this.studentList
        .filter((s) => s.id === id)[0] };
    return {
      ...storedStudent,
      contact: { ...storedStudent.contact },
      interest: { ...storedStudent.interest },
    };
  }

  public newStudent(): StudentInterface {
    let student: StudentInterface = {
      id: 0,
      name: '',
      contact: { phone: '', email: '' },
      course: '',
      gender: '',
      interest: {},
      type: false,
    };

    INTEREST.forEach((interest) => (student.interest[interest] = false));

    return student;
  }

  saveToLocalStorage() {
    const data = JSON.stringify(this.studentList);

    if (data) {
      localStorage.setItem(STORAGE, data);
    }
  }

  reloadFromLocalStorage() {
    const data = localStorage.getItem(STORAGE);

    if (data) {
      this.studentList = JSON.parse(data);
    }
  }
}
