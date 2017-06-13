import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChanelFormComponent } from "./chanel-form.component";

describe("MessageFormComponent", () => {
  let component: ChanelFormComponent;
  let fixture: ComponentFixture<ChanelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
