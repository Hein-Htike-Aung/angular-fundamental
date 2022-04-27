import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class StudentService {
    private id: number = 0;

    private students:Student[] = [];

    add(student: Student) {
        if(student.id) {
            this.updateStudent(student);
        }else {
            this.saveStudent(student);
        }
    }

    saveStudent(s : Student) {
        s.id = ++this.id;
        this.students.push(s);
    }

    updateStudent(s: Student) {
        this.students.forEach(student => {
            if(student.id == s.id){
                student.name = s.name;
                student.phone = s.phone;
                student.email = s.email;
                student.subject = s.subject;
            }
        })
    }

    deleteStudent(s: Student){
        this.students = this.students
            .filter(student => s.id != student.id);
    }

    searchByName(name: string) {
        return this.students
            .filter(student => student.name.startsWith(name));
    }

    getAllStudents(): Student[] {
        return [... this.students];
    }

}

export interface Student {
    id: number;
    name:string;
    phone: string;
    email:string;
    subject: string;
}

