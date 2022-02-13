import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personaje } from 'src/app/interfaces/Personaje';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] | undefined;
  personajesopy: Personaje[] | undefined;


  constructor(public http: HttpClient) { 
    this.getData();
  }

  async getData() {
    await this.http.get<any>(environment.apiUrl + "/characters")
    .subscribe((res) => {
      // console.table(res); ....para ver en la consola en forma de tablas
      this.personajes = res.map(({ char_id, name, nickname, img, status, occupation }: Personaje) => {
       return { 
         char_id: char_id,
         name: name,
         nickname: nickname,
         img: img,
         status: status,
         occupation: occupation,
      };
      });
      this.personajesopy = this.personajes;
    });
  }

  filter(e: any) {
    const search: string = e.target.value;
    console.log({ search }); // las llaves van para poder ver bien el valor de la variable....
    // TODO : hacer el filter
  }



}
