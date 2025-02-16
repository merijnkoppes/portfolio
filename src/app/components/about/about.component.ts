import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(private firebaseStorageService: FirebaseStorageService) {}
  werkgevers = [
    // {
    //   naam: 'Isvisoft',
    //   img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e9a65.appspot.com/o/about%2Fisvisoft.png?alt=media&token=77c3ca53-2db4-475c-9fde-f08f09d824be',
    //   text: 'Tijdens mijn stage bij Isvisoft in Spanje heb ik voornamelijk aan human resource management applicaties gewerkt. Deze applicaties zijn met Angular en Nestjs gemaakt.',
    //   datum: '',
    // },
    // {
    //   naam: 'blikoponline',
    //   img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e9a65.appspot.com/o/about%2Fblikoponline-liemers.png?alt=media&token=69d02e5d-2f45-47ff-b71c-f547f2e155fe',
    //   text: 'Tijdens mijn stage bij BlikOpOnline (Pascal Lindeman) heb ik gewerkt met het verbeteren van WordPress webshops. Hiervoor heb SEO uitgevoerd, een keuzehulp gemaakt met Javascript en CSS geschreven om de websites er beter uit te laten zien.',
    // },
    {
      naam: 'alround',
      img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e9a65.appspot.com/o/about%2Falround.png?alt=media&token=46b12e90-4a2e-48d5-a649-f53cb34111cc',
      text: 'Als onderdeel van de bediening van Alround heb ik onder andere bestellingen opgenomen en uitgenomen, verjaardagen begeleid en prijsuitrijkingen verzorgd.',
      datum: '',
    },
    {
      naam: 'albert heijn',
      img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e9a65.appspot.com/o/about%2Falbert-heijn.png?alt=media&token=8ab6fd62-d8ba-411c-baab-a4057405d5ca',
      text: 'Als medewerker op de AGF afdeling van de Albert Heijn heb ik de groenteafdeling voorzien van producten en klanten geholpen.',
      datum: '',
    },
    {
      naam: 'mrsushi',
      img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e9a65.appspot.com/o/about%2Flogo-mrsushi.png?alt=media&token=197f3347-e8b6-4107-91f2-5f22fe9265d8',
      text: 'Tijdens mijn eerste bijbaan bij MrSushi heb ik op de E-bike bestellingen bezorgd.',
      datum: '',
    },
  ];
  projecten = [
    {
      titel: 'HorasClaras',
      text: 'Ik heb meegewerkt aan de ontwikkeling van HorasClaras, een gratis app voor tijdregistratie en verlofbeheer voor het bedrijf Isvisoft. Deze app stelt bedrijven in staat om de werktijden en vakanties van hun werknemers eenvoudig en efficiënt te beheren. Met functies zoals snelle in- en uitklokking, geautomatiseerde meldingen, gedetailleerde rapportages en geavanceerde beveiligingsmaatregelen, helpt HorasClaras bedrijven om hun administratieve lasten te verminderen en de operationele efficiëntie te verhogen.',
      img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e9a65.appspot.com/o/about%2Fhorasclaras.png?alt=media&token=8a36a696-2505-48bd-80a5-02a009c5eb27',
      link: 'https://isvisoft.com/app-control-horario-gratis/',
    },
  ];
}
