import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona: Persona = {
    nombre: 'Daniel',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Mario Bros.' },
    ],
  };

  nuevoFavorito: string = '';

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['name']?.invalid &&
      this.miFormulario?.controls['name']?.touched
    );
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

  agregar() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito,
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoFavorito = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
