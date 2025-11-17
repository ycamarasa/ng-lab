import { Routes } from '@angular/router';
import { GitCourseComponent } from './git-course/git-course.component';

export const routes: Routes = [
  {
    path: '',
    component: GitCourseComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
