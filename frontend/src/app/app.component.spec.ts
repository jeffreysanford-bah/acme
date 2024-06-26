import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingComponent } from './landing/landing.component';
import { RecordListComponent } from './landing/record-list/record-list-component';
import { RecordDetailComponent } from './landing/record-list/record-detail/record-detail.component';
import { MastheadModule } from './masthead/masthead.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot(appRoutes),MastheadModule, MaterialModule, FormsModule, BrowserAnimationsModule],
      declarations: [AppComponent, LandingComponent, RecordListComponent, RecordDetailComponent],
      providers: [
        provideAnimationsAsync()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
