import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BeerService} from "../../services/beer.service";
import {BeerData} from "../../entities/beer-info/beerData";
import {delay, map, tap} from "rxjs/operators";
import {IBeerData} from "../../interfaces/IBeerData";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  public $beerData: Observable<BeerData[]>;
  public isLoading: Boolean = false;

  constructor(private beer: BeerService, private cdRef: ChangeDetectorRef, private router: Router, private ls: LocalStorageService) { }

  ngOnInit(): void {
    this.getAll();


  }

  public getAll(): void {
    this.isLoading = true;
    let favorites: number[] = this.ls.get('beerFavorites');
    this.$beerData = this.beer.getAll()
      .pipe(
        // delay(2000), //to test spinner
        tap(() => {
          this.isLoading = false;
        }),
        map((data: IBeerData[]): BeerData[] => {
          return data.map((item) => {
            item.isFavorite = favorites?.includes(item.id) || false;
            return BeerData.fromServer(item);
          })
        })
      );
  }

  public setToFavoriteById(beer: BeerData): void {
    this.beer.setToFavoriteById(beer.id);
    event.stopPropagation();
    beer.isFavorite = !beer.isFavorite;
    this.cdRef.markForCheck();
  }

  public navigateToDetailsById(beer: BeerData) {
    this.router.navigate([`/beer_table/beer_details/:${beer.id}`]);
  }



}
