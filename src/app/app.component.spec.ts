import { TestBed, async } from '@angular/core/testing';
import { AppComponent, DummyService, RealService } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: RealService, useClass: DummyService}
      ]
    }).compileComponents();
  }));
  it('should be able to test async in init', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app : AppComponent = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    app.ngOnInit();
    expect(app.title).toBe('yes!');
    expect(app.subtitle).toBe('yes!');
  }));

});
