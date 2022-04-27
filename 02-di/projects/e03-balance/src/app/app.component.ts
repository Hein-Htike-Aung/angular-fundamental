import { STORAGE_SERVICE } from './app.module';
import { Component, OnInit, Inject, OnDestroy, HostListener } from '@angular/core';
import { StorageServiceInter } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  
  
  constructor(
    @Inject(STORAGE_SERVICE) private storageServices: StorageServiceInter[]
  ){}

  ngOnInit(): void {
    this.storageServices.forEach(service => service.loadData());
  }
  
}
