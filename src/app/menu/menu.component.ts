/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {OverlayContainer} from '@angular/cdk/overlay';
import {Component, ElementRef, ViewEncapsulation} from '@angular/core';

/**
 * The entry app for demo site. Routes under `accessibility` will use AccessibilityDemo component,
 * while other demos will use `DemoApp` component. Since DemoApp and AccessibilityDemo use
 * different templates (DemoApp has toolbar and sidenav), we use this EntryApp in index.html
 * as our entry point.
 */
@Component({
    moduleId: module.id,
    selector: 'entry-app',
    template: '<menu></menu>',
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})
export class EntryApp {

}



/**
 * DemoApp with toolbar and sidenav.
 */
@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})
export class MenuComponent {


    constructor() {}

}
