import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  imports: [MatCardModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard {
  readonly pokemonJson = input<string>();
  protected readonly pokemon = computed(() => new Pokemon(this.pokemonJson() ?? '{}'));
}
