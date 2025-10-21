import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { PokemonCard } from './pokemon-card/pokemon-card';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, PokemonCard, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly pokemon = [
    '{"name":"Bulbasaur","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}',
    '{"name":"Ivysaur","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}',
    '{"name":"Venusaur","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}',
    '{"name":"Charmander","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"}',
    '{"name":"Charmeleon","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"}',
    '{"name":"Charizard","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}',
    '{"name":"Squirtle","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}',
    '{"name":"Wartortle","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"}',
    '{"name":"Blastoise","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"}',
    '{"name":"Caterpie","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}',
    '{"name":"Metapod","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"}',
    '{"name":"Butterfree","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"}',
    '{"name":"Weedle","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"}',
    '{"name":"Kakuna","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"}',
    '{"name":"Beedrill","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"}',
    '{"name":"Pidgey","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"}',
    '{"name":"Pidgeotto","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"}',
    '{"name":"Pidgeot","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"}',
    '{"name":"Rattata","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"}',
    '{"name":"Raticate","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"}',
  ];
}
