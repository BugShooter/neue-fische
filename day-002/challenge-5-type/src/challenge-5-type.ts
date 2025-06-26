
type Grade =
    1 | 2 | 3 | 4 | 5 | 6 |
    'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;

type GradeSubject = {
    name: string;
    grades: Grade[];
}

export type Student = {
    firstName: string;
    lastName: string;
    age: number;
    gradeSubjects: GradeSubject[];
}

let logContainer: HTMLDivElement;

function log(...messages: any[]) {
    if (logContainer) {
        logContainer.innerHTML += messages.join("\n")+"\n";
    }
    console.log(...messages);
}

export function displayStudent(student: Student) {
    const line = `${student.firstName} ${student.lastName} (${student.age})`;
    log(line);
    log('='.repeat(line.length));

    if (student.gradeSubjects.length) {
        log('Noten:');
        student.gradeSubjects.forEach(subject => {
            log(
                `${subject.name}: ${subject.grades.map(v => v === undefined ? '*' : v)
                    .join(',')}`
            );
        });
    }
    log('');
}

export function displayStudents(students: Student[]) {
    students.forEach(student => displayStudent(student));
};

export function main(element?: HTMLDivElement) {
    logContainer = element;
    const student1: Student = {
        firstName: "Peter",
        lastName: "Pan",
        age: 33,
        gradeSubjects: [
            { name: 'Sport', grades: ['A', 1, undefined] },
            { name: 'Kunst', grades: [3, 2, 4, 5] },
            { name: 'Mathe', grades: [1, 2, 'A'] }
        ]
    }
    const student2: Student = {
        firstName: "John",
        lastName: "Dou",
        age: 20,
        gradeSubjects: [
            { name: 'JavaScript', grades: ['A', 1, undefined] },
            { name: 'TypeScript', grades: [3, 2, 4, 5] },
            { name: 'Vite', grades: [1, 2, 'A'] }
        ]
    }

    displayStudents([student1, student2]);
}