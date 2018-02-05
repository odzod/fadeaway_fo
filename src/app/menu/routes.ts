/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Routes} from '@angular/router';
import {MenuComponent, Home} from './menu.component';


export const DEMO_APP_ROUTES: Routes = [
    {path: '', component: MenuComponent, children: [
            {path: '', component: Home},
        ]}
];

export const ALL_ROUTES: Routes = [
    {path: '',  component: MenuComponent, children: DEMO_APP_ROUTES},
];