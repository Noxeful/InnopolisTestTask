import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BeerData} from "../../entities/beer-info/beerData";
import {ActivatedRoute} from "@angular/router";
import {BeerService} from "../../services/beer.service";
import {IBeerData} from "../../interfaces/IBeerData";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerDetailsComponent implements OnInit {
  public beerItem: BeerData;

  constructor(private activatedRoute: ActivatedRoute, private beer: BeerService, private cdRef: ChangeDetectorRef, private ls: LocalStorageService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe( params => {
        const id = +params.get('id').replace(':', '');
        if (id) {
          this.getBeerById(id);
        }
      });
  }

  public getBeerById(id: number): void {
    let favorites: number[] = this.ls.get('beerFavorites');
    this.beer.getById(id)
      .subscribe((data: IBeerData[]) => {
        if (data) {
          data[0].isFavorite = favorites?.includes(data[0].id) || false;
          this.beerItem = BeerData.fromServer(data[0]);
          this.cdRef.markForCheck();
        }
      }, error => console.log(error));
  }

  public setToFavoriteById(id: number): void {
    this.beer.setToFavoriteById(id);
    this.beerItem.isFavorite = !this.beerItem.isFavorite;
    this.cdRef.markForCheck();
  }

}
