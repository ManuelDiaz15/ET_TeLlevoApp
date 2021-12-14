import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { PHistorialViajesPage } from './p-historial-viajes.page';
import {HttpClientModule} from '@angular/common/http';

describe('PHistorialViajesPage', () => {
  let component: PHistorialViajesPage;
  let fixture: ComponentFixture<PHistorialViajesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PHistorialViajesPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule,HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PHistorialViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
