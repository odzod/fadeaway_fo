/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 * Edited by Ved Prakash
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {ConfigService} from "../config";

/*Angular 2 Carousel - Gallery*/
@Component({
    selector: 'cmp-carousel',
    encapsulation: ViewEncapsulation.None,
    providers: [ConfigService],
    preserveWhitespaces: false,
    template: `
    <div style="float:left; width:610px;border: 1px solid black;">
    <carousel [interval]="NextPhotoInterval" [noWrap]="noLoopSlides" [slidezs]="slides" [parent]="self">
                          <slide *ngFor="let slidez of slides; let index=index"
                                 [active]="slidez.active">
                              <img [src]="slidez.news_img"  style="margin:auto; width:610px; height:406px;">
                          </slide>
                        </carousel>
                        </div>
                        <div style="float:left;width:360px; text-align:left; padding-left:30px;
                        border:1px solid black;height:408px;background-color:#232323;padding-right:20px; padding-top:35px;">
                                    <p class="font-1">{{news_type}}</p>
                                    <p class="font-2">{{news_title}}</p>
                                    <p class="font-3" style="text-align:justify;" [innerHtml]="news_title_contains"></p>
                                    <a class="lire_suite_car" routerLink="news/{{news_id}}">Lire la suite...</a>
                        </div>
                        
    `
})
export class Angular2Carousel implements OnInit{
    //The time to show the next photo
    public NextPhotoInterval:number = 2800;
    //Looping or not
    public noLoopSlides:boolean = false;
    //Photos
    public slides = [];

    constructor(private route: ActivatedRoute,private router: Router, private config:ConfigService) {
        this.route.params.subscribe();
        this.addNewSlide();
    }

    ngOnInit() {
        this.config.httpGET("news/last","").subscribe(res=>
        {
            let tmp = [res['data'][0],res['data'][1],res['data'][2],res['data'][3]];
            this.slides = tmp;
        });
    }


    self = this;

    list_of_news = this.slides;
    news_type = "";
    news_title = "";
    news_title_contains ="";
    news_id = "";

    private addNewSlide() {
        this.slides = this.list_of_news;
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}