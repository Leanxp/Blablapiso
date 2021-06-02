import { Component } from '@angular/core';


@Component({
  templateUrl: './blablapiso.page.html',
  styleUrls: ['./blablapiso.page.scss']
})
export class BlablapisoPage {
  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
'Pisos en Almeria-Barrio Alto',
'Pisos en Almeria-Paseo de Almeria',
'Pisos en Almeria-Calle Real',
'Pisos en Almeria-Calle Terriza',
'Pisos en Cadiz',
'Pisos en Cadiz-Calle Cervantes',
'Pisos en Cadiz-Paza Viudas',
'Pisos en Cadiz-Calle Torre',
'Pisos en Cadiz-Calle Diego Arias',
'Pisos en Cordoba',
'Pisos en Cordoba-Huerta De Santa Isabel',
'Pisos en Cordoba-Arroyo del Moro',
'Pisos en Cordoba-Arruzafilla',
'Pisos en Cordoba-El Carmen',
'Pisos en Granada',
'Pisos en Granada-Pajaritos',
'Pisos en Granada-La Cruz',
'Pisos en Granada-San Francisco Javier',
'Pisos en Granada-Caseria de Montijo',
'Pisos en Huelva',
'Pisos en Huelva-Urbanizacion Villa Conchita',
'Pisos en Huelva-Urbanizacion Santa Maria Del Pilar',
'Pisos en Huelva-Reina Victoria',
'Pisos en Jaen',
'Pisos en Jaen-Urbanizacion Castillo de Jaen',
'Pisos en Jaen-Poligono Industrial Los Rosales',
'Pisos en Jaen-Calle de Ben Saprut',
'Pisos en Jaen-Avenida De Antonio Pascual Acosta',
'Pisos en Malaga',
'Pisos en Malaga-Distrito Centro',
'Pisos en Malaga- Ciudad Jardin',
'Pisos en Malaga-El Consul',
'Pisos en Malaga- Teatinos',
'Pisos en Sevilla',
'Pisos en Sevilla-Capital',
'Pisos en Sevilla-Sevilla Este',
'Pisos en Sevilla-Pueblos',
'Pisos en Sevilla-Reina Mercedes',
'Pisos en Sevilla- La Cartuja'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}