import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PMenuUsuarioPage } from './p-menu-usuario.page';
import { OverlayModule } from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';

describe('PMenuUsuarioPage', () => {
  let component: PMenuUsuarioPage;
  let fixture: ComponentFixture<PMenuUsuarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PMenuUsuarioPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule,HttpClientTestingModule,OverlayModule,HttpClientModule]
    }).compileComponents();



    fixture = TestBed.createComponent(PMenuUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
