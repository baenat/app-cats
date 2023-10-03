import { Component } from '@angular/core';
import { Cat, DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listCats!: Cat[];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getCats();
  }

  async getCats() {
    await new Promise((resolve, reject)=> {
      this.dataService.getCats().subscribe((cats: Cat[]) => {
        this.listCats = cats;
        resolve(true);
      });
    });
  }

}
