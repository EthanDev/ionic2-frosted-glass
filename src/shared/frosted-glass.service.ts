import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FrostedGlassService {
    public _onActivateBackdrop: Subject<boolean> = new Subject<boolean>();
    get onActivateBackdrop() { return this._onActivateBackdrop; }   
}