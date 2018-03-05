import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ConfigService} from '../config';

@Component({
    moduleId: module.id,
    selector: 'infos',
    templateUrl: 'infos.component.html',
    styleUrls: ['infos.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfigService],
    preserveWhitespaces: false,
})

export class InfosComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private config: ConfigService) {
        this.route.params.subscribe();
    }

    ngOnInit() {
        console.log(this.route);
        this.route.params.subscribe(res => {
            this.config.httpGET('news/' + res.id, '').subscribe(res2 => {
                this.news = res2['data'][0];
            });
        });
        this.config.httpGET('news/last', '').subscribe(res => {
            this.list_of_news = res['data'];
        });
    }

    public news = {};
    public list_of_news = [];

    sendMeHome() {
        this.router.navigate(['']);
    }

}
