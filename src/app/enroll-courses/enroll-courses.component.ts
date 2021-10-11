import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../courses/course';
import { ValidationService } from '../validation.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-enroll-courses',
  templateUrl: './enroll-courses.component.html',
  styleUrls: ['./enroll-courses.component.css'],
})
export class EnrollCoursesComponent implements OnInit {
  public courseForm: FormGroup;
  model: Course = new Course();
  name = new FormControl('sarn');
  statusMessage: string;
  constructor(
    private courseservice: CourseService,
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {}
  submitForm() {
    debugger;
    if (this.courseForm.invalid) return;
    this.model.name = this.courseForm.value?.name;
    this.model.desc = this.courseForm.value?.desc;
    this.model.instructor = this.courseForm.value?.instructor;
    this.model.instructor_email = this.courseForm.value?.instructor_email;
    this.courseservice.addCourse(this.model);
    this.statusMessage = 'Saved Successfully';

    setTimeout(() => {
      this.statusMessage = '';
    }, 3000);
    this.courseForm.reset();
  }
  private bindForm() {
    this.courseForm = this.formBuilder.group({
      id: [0],
      name: [null],
      desc: [null],
      instructor: [null],
      instructor_email: [
        null,
        Validators.compose([
          Validators.pattern(this.validationService.regUserEmail),
        ]),
      ],
    });
  }

  ngOnInit(): void {
    this.bindForm();
    // this.model = new Course(0, '', '', '', '');
  }
}
