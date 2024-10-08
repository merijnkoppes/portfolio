import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(private firebaseStorageService: FirebaseStorageService) {}
  werkgevers = [
    {
      naam: 'Isvisoft',
      img: 'isvisoft.png',
      text: 'Tijdens mijn stage bij Isvisoft in Spanje heb ik voornamelijk aan human resource management applicaties gewerkt. Deze applicaties zijn met Angular en Nestjs gemaakt.',
      datum: '',
    },
    {
      naam: 'blikoponline',
      img: 'blikoponline-liemers.png',
      text: 'Tijdens mijn stage bij BlikOpOnline (Pascal Lindeman) heb ik gewerkt met het verbeteren van WordPress webshops. Hiervoor heb SEO uitgevoerd, een keuzehulp gemaakt met Javascript en CSS geschreven om de websites er beter uit te laten zien.',
    },
    {
      naam: 'alround',
      img: 'alround.png',
      text: 'Als onderdeel van de bediening van Alround heb ik onder andere bestellingen opgenomen en uitgenomen, verjaardagen begeleid en prijsuitrijkingen verzorgd.',
      datum: '',
    },
    {
      naam: 'albert heijn',
      img: 'albert-heijn.png',
      text: 'Als medewerker op de AGF afdeling van de Albert Heijn heb ik de groenteafdeling voorzien van producten en klanten geholpen.',
      datum: '',
    },
    {
      naam: 'mrsushi',
      img: 'logo-mrsushi.png',
      text: 'Tijdens mijn eerste bijbaan bij MrSushi heb ik op de E-bike bestellingen bezorgd.',
      datum: '',
    },
  ];
}
