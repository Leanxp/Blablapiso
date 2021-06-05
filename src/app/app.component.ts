import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Buscar Blablapiso', url: '/blablapiso', icon: 'map' },
    { title: 'Favoritos', url: '/favorites', icon: 'heart' },
    { title: 'Nuestros clientes', url: '/custommers', icon: 'people' },
    { title: 'Denunciar un problema', url: '/problem', icon: 'warning' },
    { title: 'Pisos', url: '/listado-pisos', icon: 'people'}
  ];

  public appPages2 = [
    { title: 'Nuestro Equipo', url: '/team', icon: 'terminal' },
    { title: 'Información', url: '/informacion', icon: 'chatbox' },
    { title: 'Términos del servicio', url: '/terminos', icon: 'copy' },
    { title: 'Política de privacidad', url: '/policy', icon: 'document' },
    { title: 'Normas de la comunidad', url: '/legal', icon: 'accessibility' },

  ];  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
