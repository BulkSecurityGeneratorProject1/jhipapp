import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'findLanguageFromKey'})
export class FindLanguageFromKeyPipe implements PipeTransform {
    private languages: any = {
        'ar-ly': { name: 'العربية', rtl: true },
        'zh-tw': { name: '繁體中文' },
        'en': { name: 'English' },
        'de': { name: 'Deutsch' },
        'hi': { name: 'हिंदी' },
        'id': { name: 'Bahasa Indonesia' },
        'ja': { name: '日本語' },
        'ta': { name: 'தமிழ்' }
        // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    };
    transform(lang: string): string {
        return this.languages[lang].name;
    }
    isRTL(lang: string): boolean {
        return this.languages[lang].rtl;
    }
}
