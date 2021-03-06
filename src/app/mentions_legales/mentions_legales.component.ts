import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ConfigService} from '../config';

@Component({
    moduleId: module.id,
    selector: 'mentions_legales',
    templateUrl: 'mentions_legales.component.html',
    styleUrls: ['mentions_legales.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfigService],
    preserveWhitespaces: false,
})

export class MentionsLegalesComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private config: ConfigService) {
        this.route.params.subscribe();
    }

    ngOnInit() {
        this.config.httpGET('news/last', '').subscribe(res => {
            this.list_of_news = res['data'];
        });
    }

    public news;
    public list_of_news = [];

    sendMeHome() {
        this.router.navigate(['']);
    }

}
