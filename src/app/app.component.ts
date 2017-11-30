import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DummyService {


  get() {
    return Observable.of(true);
  }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: DummyService) { }
  ngOnInit(): void {
    this.service.get().subscribe(r => this.title = 'yes!');
  }
  title = 'app';



}

