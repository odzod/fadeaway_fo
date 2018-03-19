import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfosComponent} from "./infos/infos.component";
import {InfosListComponent} from "./infos_list/infos_list.component";
import {MentionsLegalesComponent} from "./mentions_legales/mentions_legales.component";
import {AProposComponent} from "./apropos/apropos.component";
import {NoAccessComponent} from "./no_access/no_access.component";

const routes: Routes = [
    {path: '', component: InfosListComponent},
    // {path: 'list', component: InfosListComponent},
    {path: 'news/:id', component: InfosComponent},
    {path: 'mentions-legales', component: MentionsLegalesComponent},
    {path: 'a-propos', component: AProposComponent},
    {path: 'list/news', component: NoAccessComponent},
    {path: 'list/dossiers', component: NoAccessComponent},
    {path: 'list/clutch', component: NoAccessComponent},
    {path: 'list/videos', component: NoAccessComponent},
    {path: 'list/contacts', component: NoAccessComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}