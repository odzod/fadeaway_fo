
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'infos-list',
    templateUrl: 'infos_list.component.html',
    styleUrls: ['infos_list.component.css'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})

export class InfosListComponent implements OnInit{

    constructor(private route: ActivatedRoute,private router: Router) {
        this.route.params.subscribe(res => console.log(res.id));
    }

    ngOnInit() {
    }

    infos_test = 'Voici la question et rumeur du jour ! Isaiah Thomas serait-il transférable avant la Trade deadline ? ...';

}
