# Portfolio in Angular

## Múltiples Idiomas con ngx-translate
- `npm install @ngx-translate/core --save`
- `npm install @ngx-translate/http-loader --save`
- Agregar al `AppModule` el `TranslateModule`

```TypeScript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Recursos Adicionales
- [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation)
- [Creating an Angular Portfolio Website](https://www.youtube.com/playlist?list=PLN0Th-4WgKrUVQlqa14mUDeymTW1luznW)
- [Portfolio Template](https://github.com/StyvenSoft/portfolio-template)
- [App con múltiples idiomas usando ngx-translate con Angular / Ionic](https://www.youtube.com/watch?v=bVIH8f0Oyv0)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=ingaamira&layout=compact&show_icons=true&text_color=ffffff&bg_color=0d1117)](https://github.com/ingaamira?tab=repositories)
