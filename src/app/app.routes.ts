import { Routes } from '@angular/router';
import { GitCourseComponent } from './pages/git-course/git-course.component';
import { AngularCourseComponent } from './pages/angular-course/angular-course.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RxjsCourseComponent } from './pages/rxjs-course/rxjs-course.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'git',
    component: GitCourseComponent,
  },
  {
    path: 'angular',
    component: AngularCourseComponent,
  },
  {
    path: 'rxjs',
    component: RxjsCourseComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
