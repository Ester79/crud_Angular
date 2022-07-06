import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateUpdateComponent } from './post-create.component';

describe('PostCreateComponent', () => {
  let component: PostCreateUpdateComponent;
  let fixture: ComponentFixture<PostCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
