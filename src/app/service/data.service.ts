import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cat {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  imageUrl: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API = 'https://api.thecatapi.com/v1/breeds';

  constructor(
    private http: HttpClient,
  ) { }

  public getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.API}`, {
      headers: {
        'x-api-key': 'bdas3789-d59e-46cd-9bc4-2936630fde39'
      },
    });
  }

}
