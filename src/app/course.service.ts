import { Injectable } from '@angular/core';
import { COURSES } from './courses/mock-course';
import { Course } from './courses/course';
import { MessagesService } from './messages.service';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private MessagesService: MessagesService) {}
  getCourses(): Course[] {
    this.MessagesService.addMessage('get Courses Message');
    return COURSES;
  }
  addCourse(course: Course): void {
    let obj = COURSES.reduce(
      (acc, shot) => (acc = acc > shot.id ? acc : shot.id),
      0
    );
    course.id = ++obj;
    COURSES.push(course);
  }
}
