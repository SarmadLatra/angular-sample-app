import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-course';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;
  constructor(public CourseService: CourseService) {}
  onSelect(course: Course) {
    debugger;
    this.selectedCourse = course;
  }
  getCourses(): Course[] {
    return this.CourseService.getCourses();
  }
  ngOnInit(): void {
    this.courses = this.getCourses();
    console.log(this.courses);
  }
}
