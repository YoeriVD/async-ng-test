import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RealService {
  private _isReady: Observable<string>;
  isReady = ()=> this._isReady;

  get isReadyAsProp(){
    return this._isReady;
  }

  constructor() {
    this._isReady = Observable.of('no!');
  }
}
@Injectable()
export class DummyService extends RealService {
  constructor() {
    super();
    spyOn(this, 'isReady')
    .and
    .returnValue(Observable.of('yes!'));

    spyOnProperty(this, 'isReadyAsProp', 'get')
    .and
    .returnValue(Observable.of('yes!'));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: RealService) { }
  ngOnInit(): void {
    this.service.isReady().subscribe(r => this.title = r);
    this.service.isReadyAsProp.subscribe(r => this.subtitle = r);
  }
  title = 'app';
  subtitle = 'sub'


}

