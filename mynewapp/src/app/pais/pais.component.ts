import { Component, OnInit } from '@angular/core';
import { Pais } from './pais';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  paises: Array<Pais> = [];
  minYear: number = Infinity;  // Se establece a Infinity para facilitar la búsqueda del mínimo

  constructor(private paisService: PaisService) { }
  selectedPais!: Pais;
  selected = false;
  onSelect(pais: Pais): void {
    this.selectedPais = pais;
    this.selected = true;
  }
  
  ngOnInit() {
    this.getPaises();
  }

  getPaises(){
    this.paisService.getPaises().subscribe(
      paises => {
        this.paises = paises;
        this.calculateMinYear();  // Se asegura de calcular el minYear después de recibir los datos
      }
    );
  }

  calculateMinYear() {
    this.minYear = this.paises.reduce((min, pais) => pais.formation_year < min ? pais.formation_year : min, Infinity);
  }
}
