import { ISerie } from './../models/ISerie.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  tituloSerie = 'Série - Etec';

  listaVideosSerie: ISerie[] = [
    {
      nome: 'Falcão e o Soldado Invernal',
      lancamento: '2021',
      duracao: '50 m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oF9njYCN6lBdrsi6wfulcxTggvn.jpg',
      generos: [
        'Sci-Fi & Fantasy',
        'Action & Adventure',
        'Drama',
        'War & Politics',
      ],
    },
    {
      nome: 'WandaVision',
      lancamento: '2021',
      duracao: '36 m',
      classificacao: 84,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8QrGSyALY10MUNLMg0BDlMcdaGF.jpg',
      generos: ['Sci-Fi & Fantasy', 'Mistério', 'Drama'],
    },
    {
      nome: 'The Good Doctor: O Bom Doutor',
      lancamento: '2017',
      duracao: '42 m',
      classificacao: 86,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      generos: ['Drama'],
    },
    {
      nome: 'Game of Thrones ',
      lancamento: '2011',
      duracao: '1 h',
      classificacao: 84,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg',
      generos: ['Sci-Fi & Fantasy', 'Drama','Action & Adventure'],
    },
    {
      nome: 'Vikings',
      lancamento: '2013',
      duracao: '44 m',
      classificacao: 80,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg',
      generos: ['Action & Adventure','Drama'],
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  async exibirAlertaFavoritoSerie() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a Série ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Sim, favoritar',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adiconada aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
