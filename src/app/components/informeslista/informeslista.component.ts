import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import { Serie } from 'src/app/Entities/Serie';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-informeslista',
  templateUrl: './informeslista.component.html',
  styleUrls: ['./informeslista.component.css']
})
export class InformeslistaComponent implements OnInit {

  serie: Serie[] = Array();
  media: number;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist('serie')
      .subscribe(data => {
        this.serie = data;
        console.log(this.serie)
      });
  }

  informe01() {
    var doc: jsPDF = new jsPDF();

    for (let i = 0; i < this.serie.length; i++) {
      var id_file =  this.serie[i].id_file;
      doc.setFontSize(30);
      doc.text("Listado de series registradas ", 35, 25);
      doc.setFontSize(12);
      doc.line(10, 30, 200, 30);
      doc.addImage('http://localhost:8082/file/' + id_file, 'JPEG', 15, 36, 50, 70);
      doc.rect(13, 33, 54, 76)
      doc.text("Nombre: " + this.serie[i].nombre.toString(), 70, 40);
      doc.text("Idioma: " + this.serie[i].idioma.toString(), 70, 50);
      doc.text("Género: " + this.serie[i].genero.nombre.toString(), 70, 60);
      doc.text("Duración media: " + this.serie[i].duracion_media.toString() + " min.", 70, 70);
      doc.text("Fecha de inicio: " + this.serie[i].fecha_inicio, 70, 80);
      doc.text("Fecha de fin: " + this.serie[i].fecha_fin, 70, 90);
      doc.text("Número de temporadas: " + this.serie[i].temporadas.toString(), 70, 100);

      doc.addPage();
  }
  
    doc.save('Informe ' + Math.floor(Math.random() * 100000))
  }


}
