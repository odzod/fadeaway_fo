import {Component} from '@angular/core';
import {VERSION} from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  version = VERSION;
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */