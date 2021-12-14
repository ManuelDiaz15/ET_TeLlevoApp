import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PNuevaRutaPage } from './p-nueva-ruta.page';




describe('PNuevaRutaPage', () => {
  let component: PNuevaRutaPage;
  let fixture: ComponentFixture<PNuevaRutaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PNuevaRutaPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule,HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PNuevaRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
