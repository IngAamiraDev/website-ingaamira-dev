import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLanguage(lang: string): void {
    try {
      this.translate.use(lang);
      this.currentLanguageSubject.next(lang);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  }

  getInstantTranslation(key: string): string {
    return this.translate.instant(key);
  }

}
