import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { MessageModel } from "../../models/MessageModel";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { URLSERVER } from "shared/constants/urls";
import {isUndefined} from "util";

@Injectable()
export class MessageService {

  /**
   * Url pour accéder aux données. L'url est commun à toutes les fonctions du service.
   * Il permet d'accéder aux channels. À partir de cet url, vous pourrez accéder aux messages.
   * La documentation des methodes du service permet d'avoir plus d'information concernant la façon d'accèder aux messages.
   */
  private url: string;
  public id: number;

  /**
   * MessageList$ est un type d'Observable particulier appelé ReplaySubject.
   * MessageList$ est un flux d'évenements qui stock la liste des messages. A chaque fois que l'on fait une requète
   * pour récupérer la liste des messages, messageList$ va pousser cette nouvelle liste dans son flux pour permettre
   * aux composants qui l'écoutent de récupérer les messages. Pour plus d'infos sur les observables, voir le README.md du projet
   * dans lequel vous trouverez une première explication sur les observables ainsi qu'une vidéo tutoriel.
   */
  public messageList$: ReplaySubject<MessageModel[]>;

  constructor(private http: Http) {
    this.url = URLSERVER;
    this.messageList$ = new ReplaySubject(1);
    this.messageList$.next([new MessageModel()]);
    this.id = 570;
  }

  /**
   * Fonction getMessage.
   * Cette fonction permet de récupérer la liste des messages pour un channel donné. Elle prend en parametre:
   * - route: La route. C'est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète.
   *          Pour l'envoie des messages la route doit avoir la structure suivante: :id/messages avec ":id" étant
   *          un nombre entier correspondant à l'identifiant (id) du channel.
   * Exemple de route: 1/messages
   * @param route
   * @returns {Observable<R>}
   */
  public getMessages(i: number) {
    const finalUrl = this.url + this.id + "/messages?page=" + i;
    this.http.get(finalUrl)
      .subscribe((response) => this.extractAndUpdateMessageList(response));
  }

  /**
   * Fonction sendMessage.
   * Cette fonction permet l'envoi d'un message. Elle prend en paramêtre:
   * - route: La route est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète. Pour
   *          l'envoie des messages la route doit avoir la structure suivante: :id/messages avec ":id" étant un nombre
   *          entier correspondant à l'identifiant (id) du channel.
   *          Exemple de route: 1/messages
   * - message: Le message à envoyer. Ce message est de type MessageModel.
   * @param route
   * @param message
   */
  public sendMessage(route: string, message: MessageModel) {
    // Je suis vide :(
    // Tu peux trouver des infos sur moi dans le README !
    const finalUrl = this.url + this.id + route;
    message.setContent(this.replaceEmots(message.content));
    this.http.post(finalUrl, message)
      .subscribe((response) => this.extractMessageAndGetMessages(response, route));
  }
  public replaceEmots(message: string): string {
    let res = message;
    res = res.replace(/:\)/gi, "🙂");
    res = res.replace(/;\)/gi, "😉");
    res = res.replace(/:'\(/gi, "😪");
    res = res.replace(/:\(/gi, "🙁");
    res = res.replace(/:D/gi, "😃");
    res = res.replace(/:p/gi, "😛");
    res = res.replace(/<3/gi, "❤️");
    res = res.replace(/:o/gi, "😮");
    return res;
  }

  /**
   * Fonction extractAndUpdateMessageList.
   * Cette fonction permet d'extraire la liste des messages de la 'response' reçue et ensuite de mettre à jour la liste
   * des message dans l'observable messageList$.
   * Elle est appelée dans la fonction getMessages et permet de directement récuperer une liste de MessageModel. Pour récupérer
   * les données de la reponse, il suffit d'appeler la fonction .json() qui retourne le body de la réponse.
   * @param response
   */
  extractAndUpdateMessageList(response: Response) {
    // Plus d'info sur Response ou sur la fonction .json()? si tu utilises Webstorm,
    // fait CTRL + Click pour voir la déclaration et la documentation
    const messageList = response.json() || []; // ExtractMessage: Si response.json() est undefined ou null,
    // messageList prendra la valeur tableau vide: [];
    this.messageList$.next(messageList); // On pousse les nouvelles données dans l'attribut messageList$
  }

  /**
   * Fonction extractMessage.
   * Cette fonction permet d'extraire les données reçues à travers les requêtes HTTP. Elle est appelée dans la fonction
   * sendMessage et permet de directement récuperer un MessageModel.
   * Elle va également faire un nouvel appel pour récupérer la liste complete des messages pour pouvoir mettre à jour la
   * liste des messages dans les composants.
   * @param response
   * @param route
   * @returns {any|{}}
   */
  private extractMessageAndGetMessages(response: Response, route: string): MessageModel {
    // Je suis vide aussi ...
    this.getMessages(0);
    return new MessageModel();
  }
  public setId(id: number) {
    this.id = id;
  }
  public checkYoutube(url: string) {
    if (isUndefined(url)) {
      return false;
    }
    const a = url.includes("youtube.com/");
    const b = url.includes("youtu.be/");
    const c = url.includes("v=");
    return (a || b) && c;
  }
  public getYoutubeId(url: string) {
    const regex = new RegExp(/(?:\?v=)([^&]+)(?:\&)*/);
    const matches = regex.exec(url);

    return matches[1];
  }
  public checkTwitter(url: string) {
    if (isUndefined(url)) {
      return false;
    }
    const a = url.includes("twitter.com/");
    const b = url.includes("/status/");
    return a && b ;
  }
  public getTwitter(url: string) {
    const regex = new RegExp(/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/([0-9]+)/);
    const matches = regex.exec(url);
    console.log(matches);
    return matches[0];
  }
  public checkInsta(url: string) {

    if (isUndefined(url)) {
      return false;
    }
    return url.includes("instagram");
  }
}
