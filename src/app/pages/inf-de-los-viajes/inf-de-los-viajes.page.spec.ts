import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from "@angular/router/testing";
import { InfDeLosViajesPage } from './inf-de-los-viajes.page';
import {HttpClientModule} from '@angular/common/http'

describe('InfDeLosViajesPage', () => {
  let component: InfDeLosViajesPage;
  let fixture: ComponentFixture<InfDeLosViajesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfDeLosViajesPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule,HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InfDeLosViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
