import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  // Liste des résidences
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpeg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
  ];

  // Variable pour stocker l'adresse recherchée
  searchAddress: string = '';

  // Fonction pour filtrer les résidences en fonction de l'adresse recherchée
  filterResidences(): Residence[] {
    return this.listResidences.filter(residence => 
      residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }

  // Méthode pour afficher l'adresse de la résidence
  showLocation(residence: Residence): void {
    if (residence.address === 'inconnu') {
      alert(`L'adresse de ${residence.name} est inconnue`);
    } else {
      alert(`L'adresse de ${residence.name} est ${residence.address}`);
    }
  }

  // Liste des favoris
  favorites: Residence[] = [];

  // Fonction pour ajouter ou supprimer une résidence des favoris
  toggleFavorite(residence: Residence): void {
    const index = this.favorites.indexOf(residence);
    if (index > -1) {
      this.favorites.splice(index, 1); // Retirer des favoris
    } else {
      this.favorites.push(residence); // Ajouter aux favoris
    }
  }
}
