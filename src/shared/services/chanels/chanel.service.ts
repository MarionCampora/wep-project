/**
 * Created by user on 12/06/17.
 */


import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { URLSERVER } from "shared/constants/urls";
import {ChanelModel} from "../../models/ChannelModel";

@Injectable()
export class ChanelService {
  private url: string;

  /**
   * MessageList$ est un type d'Observable particulier appelé ReplaySubject.
   * MessageList$ est un flux d'évenements qui stock la liste des messages. A chaque fois que l'on fait une requète
   * pour récupérer la liste des messages, messageList$ va pousser cette nouvelle liste dans son flux pour permettre
   * aux composants qui l'écoutent de récupérer les messages. Pour plus d'infos sur les observables, voir le README.md du projet
   * dans lequel vous trouverez une première explication sur les observables ainsi qu'une vidéo tutoriel.
   */
  public chanelList$: ReplaySubject<ChanelModel[]>;

  constructor(private http: Http) {
    this.url = URLSERVER;
    this.chanelList$ = new ReplaySubject(1);
    this.chanelList$.next([]);
  }

}
