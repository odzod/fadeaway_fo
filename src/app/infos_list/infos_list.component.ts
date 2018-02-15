
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

    list_of_news = [
        {
             "id":5
            ,"type":"INFOS"
            ,"title":"La rumeur du jour : IT 's possible?"
            ,"img":"http://www.fadeaway.fr/assets/images/news_5.jpg"
            ,"date":"xx/xx/xxxx"
            ,"by":"XXXXXX X."
            ,"contains":'Voici la question et rumeur du jour ! Isaiah Thomas serait-il transférable avant la Trade deadline ?<br/>'+
            '<br/>'+
            'Malgré la victoire à l\'arraché de cette nuit contre Minnesota, les Cavaliers sont toujours...'
        }
        ,{
            "id":4
            ,"type":"CLUTCH"
            ,"title":"Le facteur X du jour : Patty Mils"
            ,"date":"xx/xx/xxxx"
            ,"by":"XXXXXX X."
            ,"img":"http://www.fadeaway.fr/assets/images/news_4.jpg"
            ,"contains":""
        }
        ,{
            "id":3
            ,"type":"DOSSIERS"
            ,"title":"Le dossier du jour : Les Toronto Raptors"
            ,"date":"xx/xx/xxxx"
            ,"by":"XXXXXX X."
            ,"img":"http://www.fadeaway.fr/assets/images/news_3.jpg"
            ,"contains":""
        }
        ,{
            "id":2
            ,"type":"INFOS"
            ,"title":"La (mauvaise) info du jour : La blessure de K. Porzingis"
            ,"date":"xx/xx/xxxx"
            ,"by":"XXXXXX X."
            ,"img":"http://www.fadeaway.fr/assets/images/news_2.jpg"
            ,"contains":""
        }
    ];

    infos_test = 'Voici la question et rumeur du jour ! Isaiah Thomas serait-il transférable avant la Trade deadline ? ...';

}
