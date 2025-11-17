import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCourseComponent } from './git-course.component';

describe('GitCourseComponent', () => {
  let component: GitCourseComponent;
  let fixture: ComponentFixture<GitCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
