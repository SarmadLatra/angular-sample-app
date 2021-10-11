export class Course {
  constructor(
    public id: number = 0,
    public name: string = '',
    public desc: string = '',
    public instructor: string = '',
    public instructor_email: string = ''
  ) {}
}
