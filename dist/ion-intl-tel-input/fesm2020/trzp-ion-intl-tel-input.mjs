import * as i0 from '@angular/core';
import { Directive, Injectable, Pipe, EventEmitter, forwardRef, Component, HostBinding, Input, Output, ViewChild, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i3 from 'ionic-selectable';
import { IonicSelectableModule } from 'ionic-selectable';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';

/* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */
class IonIntlTelInputValidators {
    static phone(control) {
        const error = { phone: true };
        let phoneNumber;
        if (!control.value) {
            return error;
        }
        try {
            phoneNumber = PhoneNumberUtil.getInstance().parse(control.value.nationalNumber, control.value.isoCode);
        }
        catch (e) {
            return error;
        }
        if (!phoneNumber) {
            return error;
        }
        else {
            if (!PhoneNumberUtil.getInstance().isValidNumberForRegion(phoneNumber, control.value.isoCode)) {
                return error;
            }
        }
    }
}
class IonIntlTelInputValidatorDirective {
    validate(control) {
        return IonIntlTelInputValidators.phone(control);
    }
}
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputValidatorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputValidatorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: IonIntlTelInputValidatorDirective, selector: "[ionIntlTelInputValid]", providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: IonIntlTelInputValidatorDirective,
            multi: true,
        },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ionIntlTelInputValid]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IonIntlTelInputValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }] });

const countries = [
    {
        name: 'Afghanistan',
        isoCode: 'af',
        dialCode: '93',
        flagClass: 'af',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Albania',
        isoCode: 'al',
        dialCode: '355',
        flagClass: 'al',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Algeria',
        isoCode: 'dz',
        dialCode: '213',
        flagClass: 'dz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'AmericanSamoa',
        isoCode: 'as',
        dialCode: '1 684',
        flagClass: 'as',
        priority: 0,
        areaCodes: [
            '684'
        ],
        placeholder: ''
    },
    {
        name: 'Andorra',
        isoCode: 'ad',
        dialCode: '376',
        flagClass: 'ad',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Angola',
        isoCode: 'ao',
        dialCode: '244',
        flagClass: 'ao',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Anguilla',
        isoCode: 'ai',
        dialCode: '1 264',
        flagClass: 'ai',
        priority: 0,
        areaCodes: [
            '264'
        ],
        placeholder: ''
    },
    {
        name: 'Antigua and Barbuda',
        isoCode: 'ag',
        dialCode: '1 268',
        flagClass: 'ag',
        priority: 0,
        areaCodes: [
            '268'
        ],
        placeholder: ''
    },
    {
        name: 'Argentina',
        isoCode: 'ar',
        dialCode: '54',
        flagClass: 'ar',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Armenia',
        isoCode: 'am',
        dialCode: '374',
        flagClass: 'am',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Aruba',
        isoCode: 'aw',
        dialCode: '297',
        flagClass: 'aw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Australia',
        isoCode: 'au',
        dialCode: '61',
        flagClass: 'au',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Austria',
        isoCode: 'at',
        dialCode: '43',
        flagClass: 'at',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Azerbaijan',
        isoCode: 'az',
        dialCode: '994',
        flagClass: 'az',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bahamas',
        isoCode: 'bs',
        dialCode: '1 242',
        flagClass: 'bs',
        priority: 0,
        areaCodes: [
            '242'
        ],
        placeholder: ''
    },
    {
        name: 'Bahrain',
        isoCode: 'bh',
        dialCode: '973',
        flagClass: 'bh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bangladesh',
        isoCode: 'bd',
        dialCode: '880',
        flagClass: 'bd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Barbados',
        isoCode: 'bb',
        dialCode: '1 246',
        flagClass: 'bb',
        priority: 0,
        areaCodes: [
            '246'
        ],
        placeholder: ''
    },
    {
        name: 'Belarus',
        isoCode: 'by',
        dialCode: '375',
        flagClass: 'by',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Belgium',
        isoCode: 'be',
        dialCode: '32',
        flagClass: 'be',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Belize',
        isoCode: 'bz',
        dialCode: '501',
        flagClass: 'bz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Benin',
        isoCode: 'bj',
        dialCode: '229',
        flagClass: 'bj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bermuda',
        isoCode: 'bm',
        dialCode: '1 441',
        flagClass: 'bm',
        priority: 0,
        areaCodes: [
            '441'
        ],
        placeholder: ''
    },
    {
        name: 'Bhutan',
        isoCode: 'bt',
        dialCode: '975',
        flagClass: 'bt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bolivia, Plurinational State of',
        isoCode: 'bo',
        dialCode: '591',
        flagClass: 'bo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bosnia and Herzegovina',
        isoCode: 'ba',
        dialCode: '387',
        flagClass: 'ba',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Botswana',
        isoCode: 'bw',
        dialCode: '267',
        flagClass: 'bw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Brazil',
        isoCode: 'br',
        dialCode: '55',
        flagClass: 'br',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'British Indian Ocean Territory',
        isoCode: 'io',
        dialCode: '246',
        flagClass: 'io',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Virgin Islands, British',
        isoCode: 'vg',
        dialCode: '1 284',
        flagClass: 'vg',
        priority: 0,
        areaCodes: [
            '284'
        ],
        placeholder: ''
    },
    {
        name: 'Brunei Darussalam',
        isoCode: 'bn',
        dialCode: '673',
        flagClass: 'bn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bulgaria',
        isoCode: 'bg',
        dialCode: '359',
        flagClass: 'bg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Burkina Faso',
        isoCode: 'bf',
        dialCode: '226',
        flagClass: 'bf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Burundi',
        isoCode: 'bi',
        dialCode: '257',
        flagClass: 'bi',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cambodia',
        isoCode: 'kh',
        dialCode: '855',
        flagClass: 'kh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cameroon',
        isoCode: 'cm',
        dialCode: '237',
        flagClass: 'cm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Canada',
        isoCode: 'ca',
        dialCode: '1',
        flagClass: 'ca',
        priority: 0,
        areaCodes: [
            '204',
            '226',
            '236',
            '249',
            '250',
            '289',
            '306',
            '343',
            '365',
            '387',
            '403',
            '416',
            '418',
            '431',
            '437',
            '438',
            '450',
            '506',
            '514',
            '519',
            '548',
            '579',
            '581',
            '587',
            '604',
            '613',
            '639',
            '647',
            '672',
            '705',
            '709',
            '742',
            '778',
            '780',
            '782',
            '807',
            '819',
            '825',
            '867',
            '873',
            '902',
            '905'
        ],
        placeholder: ''
    },
    {
        name: 'Cape Verde',
        isoCode: 'cv',
        dialCode: '238',
        flagClass: 'cv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cayman Islands',
        isoCode: 'ky',
        dialCode: ' 345',
        flagClass: 'ky',
        priority: 0,
        areaCodes: [
            '345'
        ],
        placeholder: ''
    },
    {
        name: 'Central African Republic',
        isoCode: 'cf',
        dialCode: '236',
        flagClass: 'cf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Chad',
        isoCode: 'td',
        dialCode: '235',
        flagClass: 'td',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Chile',
        isoCode: 'cl',
        dialCode: '56',
        flagClass: 'cl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'China',
        isoCode: 'cn',
        dialCode: '86',
        flagClass: 'cn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Christmas Island',
        isoCode: 'cx',
        dialCode: '61',
        flagClass: 'cx',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cocos (Keeling) Islands',
        isoCode: 'cc',
        dialCode: '61',
        flagClass: 'cc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Colombia',
        isoCode: 'co',
        dialCode: '57',
        flagClass: 'co',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Comoros',
        isoCode: 'km',
        dialCode: '269',
        flagClass: 'km',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Congo, The Democratic Republic of the Congo',
        isoCode: 'cd',
        dialCode: '243',
        flagClass: 'cd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Congo',
        isoCode: 'cg',
        dialCode: '242',
        flagClass: 'cg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cook Islands',
        isoCode: 'ck',
        dialCode: '682',
        flagClass: 'ck',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Costa Rica',
        isoCode: 'cr',
        dialCode: '506',
        flagClass: 'cr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cote d\'Ivoire',
        isoCode: 'ci',
        dialCode: '225',
        flagClass: 'ci',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Croatia',
        isoCode: 'hr',
        dialCode: '385',
        flagClass: 'hr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cuba',
        isoCode: 'cu',
        dialCode: '53',
        flagClass: 'cu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cyprus',
        isoCode: 'cy',
        dialCode: '357',
        flagClass: 'cy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Czech Republic',
        isoCode: 'cz',
        dialCode: '420',
        flagClass: 'cz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Denmark',
        isoCode: 'dk',
        dialCode: '45',
        flagClass: 'dk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Djibouti',
        isoCode: 'dj',
        dialCode: '253',
        flagClass: 'dj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Dominica',
        isoCode: 'dm',
        dialCode: '1 767',
        flagClass: 'dm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Dominican Republic',
        isoCode: 'do',
        dialCode: '1 849',
        flagClass: 'do',
        priority: 0,
        areaCodes: [
            '809',
            '829',
            '849'
        ],
        placeholder: ''
    },
    {
        name: 'Ecuador',
        isoCode: 'ec',
        dialCode: '593',
        flagClass: 'ec',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Egypt',
        isoCode: 'eg',
        dialCode: '20',
        flagClass: 'eg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'El Salvador',
        isoCode: 'sv',
        dialCode: '503',
        flagClass: 'sv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Equatorial Guinea',
        isoCode: 'gq',
        dialCode: '240',
        flagClass: 'gq',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Eritrea',
        isoCode: 'er',
        dialCode: '291',
        flagClass: 'er',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Estonia',
        isoCode: 'ee',
        dialCode: '372',
        flagClass: 'ee',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ethiopia',
        isoCode: 'et',
        dialCode: '251',
        flagClass: 'et',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Falkland Islands (Malvinas)',
        isoCode: 'fk',
        dialCode: '500',
        flagClass: 'fk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Faroe Islands',
        isoCode: 'fo',
        dialCode: '298',
        flagClass: 'fo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Fiji',
        isoCode: 'fj',
        dialCode: '679',
        flagClass: 'fj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Finland',
        isoCode: 'fi',
        dialCode: '358',
        flagClass: 'fi',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'France',
        isoCode: 'fr',
        dialCode: '33',
        flagClass: 'fr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'French Guiana',
        isoCode: 'gf',
        dialCode: '594',
        flagClass: 'gf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'French Polynesia',
        isoCode: 'pf',
        dialCode: '689',
        flagClass: 'pf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Gabon',
        isoCode: 'ga',
        dialCode: '241',
        flagClass: 'ga',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Gambia',
        isoCode: 'gm',
        dialCode: '220',
        flagClass: 'gm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Georgia',
        isoCode: 'ge',
        dialCode: '995',
        flagClass: 'ge',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Germany',
        isoCode: 'de',
        dialCode: '49',
        flagClass: 'de',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ghana',
        isoCode: 'gh',
        dialCode: '233',
        flagClass: 'gh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Gibraltar',
        isoCode: 'gi',
        dialCode: '350',
        flagClass: 'gi',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Greece',
        isoCode: 'gr',
        dialCode: '30',
        flagClass: 'gr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Greenland',
        isoCode: 'gl',
        dialCode: '299',
        flagClass: 'gl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Grenada',
        isoCode: 'gd',
        dialCode: '1 473',
        flagClass: 'gd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guadeloupe',
        isoCode: 'gp',
        dialCode: '590',
        flagClass: 'gp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guam',
        isoCode: 'gu',
        dialCode: '1 671',
        flagClass: 'gu',
        priority: 0,
        areaCodes: [
            '671'
        ],
        placeholder: ''
    },
    {
        name: 'Guatemala',
        isoCode: 'gt',
        dialCode: '502',
        flagClass: 'gt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guernsey',
        isoCode: 'gg',
        dialCode: '44',
        flagClass: 'gg',
        priority: 0,
        areaCodes: [
            '1481'
        ],
        placeholder: ''
    },
    {
        name: 'Guinea',
        isoCode: 'gn',
        dialCode: '224',
        flagClass: 'gn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guinea-Bissau',
        isoCode: 'gw',
        dialCode: '245',
        flagClass: 'gw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guyana',
        isoCode: 'gy',
        dialCode: '595',
        flagClass: 'gy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Haiti',
        isoCode: 'ht',
        dialCode: '509',
        flagClass: 'ht',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Honduras',
        isoCode: 'hn',
        dialCode: '504',
        flagClass: 'hn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Hong Kong',
        isoCode: 'hk',
        dialCode: '852',
        flagClass: 'hk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Hungary',
        isoCode: 'hu',
        dialCode: '36',
        flagClass: 'hu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Iceland',
        isoCode: 'is',
        dialCode: '354',
        flagClass: 'is',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'India',
        isoCode: 'in',
        dialCode: '91',
        flagClass: 'in',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Indonesia',
        isoCode: 'id',
        dialCode: '62',
        flagClass: 'id',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Iran, Islamic Republic of Persian Gulf',
        isoCode: 'ir',
        dialCode: '98',
        flagClass: 'ir',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Iraq',
        isoCode: 'iq',
        dialCode: '964',
        flagClass: 'iq',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ireland',
        isoCode: 'ie',
        dialCode: '353',
        flagClass: 'ie',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Isle of Man',
        isoCode: 'im',
        dialCode: '44',
        flagClass: 'im',
        priority: 0,
        areaCodes: [
            '1624'
        ],
        placeholder: ''
    },
    {
        name: 'Israel',
        isoCode: 'il',
        dialCode: '972',
        flagClass: 'il',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Italy',
        isoCode: 'it',
        dialCode: '39',
        flagClass: 'it',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Jamaica',
        isoCode: 'jm',
        dialCode: '1 876',
        flagClass: 'jm',
        priority: 0,
        areaCodes: [
            '876'
        ],
        placeholder: ''
    },
    {
        name: 'Japan',
        isoCode: 'jp',
        dialCode: '81',
        flagClass: 'jp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Jersey',
        isoCode: 'je',
        dialCode: '44',
        flagClass: 'je',
        priority: 0,
        areaCodes: [
            '1534'
        ],
        placeholder: ''
    },
    {
        name: 'Jordan',
        isoCode: 'jo',
        dialCode: '962',
        flagClass: 'jo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kazakhstan',
        isoCode: 'kz',
        dialCode: '7 7',
        flagClass: 'kz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kenya',
        isoCode: 'ke',
        dialCode: '254',
        flagClass: 'ke',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kiribati',
        isoCode: 'ki',
        dialCode: '686',
        flagClass: 'ki',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kuwait',
        isoCode: 'kw',
        dialCode: '965',
        flagClass: 'kw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kyrgyzstan',
        isoCode: 'kg',
        dialCode: '996',
        flagClass: 'kg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Laos',
        isoCode: 'la',
        dialCode: '856',
        flagClass: 'la',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Latvia',
        isoCode: 'lv',
        dialCode: '371',
        flagClass: 'lv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Lebanon',
        isoCode: 'lb',
        dialCode: '961',
        flagClass: 'lb',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Lesotho',
        isoCode: 'ls',
        dialCode: '266',
        flagClass: 'ls',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Liberia',
        isoCode: 'lr',
        dialCode: '231',
        flagClass: 'lr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Libyan Arab Jamahiriya',
        isoCode: 'ly',
        dialCode: '218',
        flagClass: 'ly',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Liechtenstein',
        isoCode: 'li',
        dialCode: '423',
        flagClass: 'li',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Lithuania',
        isoCode: 'lt',
        dialCode: '370',
        flagClass: 'lt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Luxembourg',
        isoCode: 'lu',
        dialCode: '352',
        flagClass: 'lu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Macao',
        isoCode: 'mo',
        dialCode: '853',
        flagClass: 'mo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Macedonia',
        isoCode: 'mk',
        dialCode: '389',
        flagClass: 'mk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Madagascar',
        isoCode: 'mg',
        dialCode: '261',
        flagClass: 'mg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Malawi',
        isoCode: 'mw',
        dialCode: '265',
        flagClass: 'mw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Malaysia',
        isoCode: 'my',
        dialCode: '60',
        flagClass: 'my',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Maldives',
        isoCode: 'mv',
        dialCode: '960',
        flagClass: 'mv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mali',
        isoCode: 'ml',
        dialCode: '223',
        flagClass: 'ml',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Malta',
        isoCode: 'mt',
        dialCode: '356',
        flagClass: 'mt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Marshall Islands',
        isoCode: 'mh',
        dialCode: '692',
        flagClass: 'mh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Martinique',
        isoCode: 'mq',
        dialCode: '596',
        flagClass: 'mq',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mauritania',
        isoCode: 'mr',
        dialCode: '222',
        flagClass: 'mr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mauritius',
        isoCode: 'mu',
        dialCode: '230',
        flagClass: 'mu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mayotte',
        isoCode: 'yt',
        dialCode: '262',
        flagClass: 'yt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mexico',
        isoCode: 'mx',
        dialCode: '52',
        flagClass: 'mx',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Micronesia, Federated States of Micronesia',
        isoCode: 'fm',
        dialCode: '691',
        flagClass: 'fm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Moldova',
        isoCode: 'md',
        dialCode: '373',
        flagClass: 'md',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Monaco',
        isoCode: 'mc',
        dialCode: '377',
        flagClass: 'mc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mongolia',
        isoCode: 'mn',
        dialCode: '976',
        flagClass: 'mn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Montenegro',
        isoCode: 'me',
        dialCode: '382',
        flagClass: 'me',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Montserrat',
        isoCode: 'ms',
        dialCode: '1664',
        flagClass: 'ms',
        priority: 0,
        areaCodes: [
            '664'
        ],
        placeholder: ''
    },
    {
        name: 'Morocco',
        isoCode: 'ma',
        dialCode: '212',
        flagClass: 'ma',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mozambique',
        isoCode: 'mz',
        dialCode: '258',
        flagClass: 'mz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Myanmar',
        isoCode: 'mm',
        dialCode: '95',
        flagClass: 'mm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Namibia',
        isoCode: 'na',
        dialCode: '264',
        flagClass: 'na',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nauru',
        isoCode: 'nr',
        dialCode: '674',
        flagClass: 'nr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nepal',
        isoCode: 'np',
        dialCode: '977',
        flagClass: 'np',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Netherlands',
        isoCode: 'nl',
        dialCode: '31',
        flagClass: 'nl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'New Caledonia',
        isoCode: 'nc',
        dialCode: '687',
        flagClass: 'nc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'New Zealand',
        isoCode: 'nz',
        dialCode: '64',
        flagClass: 'nz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nicaragua',
        isoCode: 'ni',
        dialCode: '505',
        flagClass: 'ni',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Niger',
        isoCode: 'ne',
        dialCode: '227',
        flagClass: 'ne',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nigeria',
        isoCode: 'ng',
        dialCode: '234',
        flagClass: 'ng',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Niue',
        isoCode: 'nu',
        dialCode: '683',
        flagClass: 'nu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Norfolk Island',
        isoCode: 'nf',
        dialCode: '672',
        flagClass: 'nf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Korea, Democratic People\'s Republic of Korea',
        isoCode: 'kp',
        dialCode: '850',
        flagClass: 'kp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Northern Mariana Islands',
        isoCode: 'mp',
        dialCode: '1 670',
        flagClass: 'mp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Norway',
        isoCode: 'no',
        dialCode: '47',
        flagClass: 'no',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Oman',
        isoCode: 'om',
        dialCode: '968',
        flagClass: 'om',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Pakistan',
        isoCode: 'pk',
        dialCode: '92',
        flagClass: 'pk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Palau',
        isoCode: 'pw',
        dialCode: '680',
        flagClass: 'pw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Palestinian Territory, Occupied',
        isoCode: 'ps',
        dialCode: '970',
        flagClass: 'ps',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Panama',
        isoCode: 'pa',
        dialCode: '507',
        flagClass: 'pa',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Papua New Guinea',
        isoCode: 'pg',
        dialCode: '675',
        flagClass: 'pg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Paraguay',
        isoCode: 'py',
        dialCode: '595',
        flagClass: 'py',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Peru',
        isoCode: 'pe',
        dialCode: '51',
        flagClass: 'pe',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Philippines',
        isoCode: 'ph',
        dialCode: '63',
        flagClass: 'ph',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Poland',
        isoCode: 'pl',
        dialCode: '48',
        flagClass: 'pl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Portugal',
        isoCode: 'pt',
        dialCode: '351',
        flagClass: 'pt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Puerto Rico',
        isoCode: 'pr',
        dialCode: '1 939',
        flagClass: 'pr',
        priority: 0,
        areaCodes: [
            '787',
            '939'
        ],
        placeholder: ''
    },
    {
        name: 'Qatar',
        isoCode: 'qa',
        dialCode: '974',
        flagClass: 'qa',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Reunion',
        isoCode: 're',
        dialCode: '262',
        flagClass: 're',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Romania',
        isoCode: 'ro',
        dialCode: '40',
        flagClass: 'ro',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Russia',
        isoCode: 'ru',
        dialCode: '7',
        flagClass: 'ru',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Rwanda',
        isoCode: 'rw',
        dialCode: '250',
        flagClass: 'rw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Barthelemy',
        isoCode: 'bl',
        dialCode: '590',
        flagClass: 'bl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Helena, Ascension and Tristan Da Cunha',
        isoCode: 'sh',
        dialCode: '290',
        flagClass: 'sh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Kitts and Nevis',
        isoCode: 'kn',
        dialCode: '1 869',
        flagClass: 'kn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Lucia',
        isoCode: 'lc',
        dialCode: '1 758',
        flagClass: 'lc',
        priority: 0,
        areaCodes: [
            '758'
        ],
        placeholder: ''
    },
    {
        name: 'Saint Martin',
        isoCode: 'mf',
        dialCode: '590',
        flagClass: 'mf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Pierre and Miquelon',
        isoCode: 'pm',
        dialCode: '508',
        flagClass: 'pm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Vincent and the Grenadines',
        isoCode: 'vc',
        dialCode: '1 784',
        flagClass: 'vc',
        priority: 0,
        areaCodes: [
            '784'
        ],
        placeholder: ''
    },
    {
        name: 'Samoa',
        isoCode: 'ws',
        dialCode: '685',
        flagClass: 'ws',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'San Marino',
        isoCode: 'sm',
        dialCode: '378',
        flagClass: 'sm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sao Tome and Principe',
        isoCode: 'st',
        dialCode: '239',
        flagClass: 'st',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saudi Arabia',
        isoCode: 'sa',
        dialCode: '966',
        flagClass: 'sa',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Senegal',
        isoCode: 'sn',
        dialCode: '221',
        flagClass: 'sn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Serbia',
        isoCode: 'rs',
        dialCode: '381',
        flagClass: 'rs',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Seychelles',
        isoCode: 'sc',
        dialCode: '248',
        flagClass: 'sc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sierra Leone',
        isoCode: 'sl',
        dialCode: '232',
        flagClass: 'sl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Singapore',
        isoCode: 'sg',
        dialCode: '65',
        flagClass: 'sg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Slovakia',
        isoCode: 'sk',
        dialCode: '421',
        flagClass: 'sk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Slovenia',
        isoCode: 'si',
        dialCode: '386',
        flagClass: 'si',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Solomon Islands',
        isoCode: 'sb',
        dialCode: '677',
        flagClass: 'sb',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Somalia',
        isoCode: 'so',
        dialCode: '252',
        flagClass: 'so',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'South Africa',
        isoCode: 'za',
        dialCode: '27',
        flagClass: 'za',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Korea, Republic of South Korea',
        isoCode: 'kr',
        dialCode: '82',
        flagClass: 'kr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Spain',
        isoCode: 'es',
        dialCode: '34',
        flagClass: 'es',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sri Lanka',
        isoCode: 'lk',
        dialCode: '94',
        flagClass: 'lk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sudan',
        isoCode: 'sd',
        dialCode: '249',
        flagClass: 'sd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Suriname',
        isoCode: 'sr',
        dialCode: '597',
        flagClass: 'sr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Svalbard and Jan Mayen',
        isoCode: 'sj',
        dialCode: '47',
        flagClass: 'sj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Swaziland',
        isoCode: 'sz',
        dialCode: '268',
        flagClass: 'sz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sweden',
        isoCode: 'se',
        dialCode: '46',
        flagClass: 'se',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Switzerland',
        isoCode: 'ch',
        dialCode: '41',
        flagClass: 'ch',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Syrian Arab Republic',
        isoCode: 'sy',
        dialCode: '963',
        flagClass: 'sy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Taiwan',
        isoCode: 'tw',
        dialCode: '886',
        flagClass: 'tw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tajikistan',
        isoCode: 'tj',
        dialCode: '992',
        flagClass: 'tj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tanzania, United Republic of Tanzania',
        isoCode: 'tz',
        dialCode: '255',
        flagClass: 'tz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Thailand',
        isoCode: 'th',
        dialCode: '66',
        flagClass: 'th',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Timor-Leste',
        isoCode: 'tl',
        dialCode: '670',
        flagClass: 'tl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Togo',
        isoCode: 'tg',
        dialCode: '228',
        flagClass: 'tg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tokelau',
        isoCode: 'tk',
        dialCode: '690',
        flagClass: 'tk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tonga',
        isoCode: 'to',
        dialCode: '676',
        flagClass: 'to',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Trinidad and Tobago',
        isoCode: 'tt',
        dialCode: '1 868',
        flagClass: 'tt',
        priority: 0,
        areaCodes: [
            '868'
        ],
        placeholder: ''
    },
    {
        name: 'Tunisia',
        isoCode: 'tn',
        dialCode: '216',
        flagClass: 'tn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Turkey',
        isoCode: 'tr',
        dialCode: '90',
        flagClass: 'tr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Turkmenistan',
        isoCode: 'tm',
        dialCode: '993',
        flagClass: 'tm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Turks and Caicos Islands',
        isoCode: 'tc',
        dialCode: '1 649',
        flagClass: 'tc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tuvalu',
        isoCode: 'tv',
        dialCode: '688',
        flagClass: 'tv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Virgin Islands, U.S.',
        isoCode: 'vi',
        dialCode: '1 340',
        flagClass: 'vi',
        priority: 0,
        areaCodes: [
            '340'
        ],
        placeholder: ''
    },
    {
        name: 'Uganda',
        isoCode: 'ug',
        dialCode: '256',
        flagClass: 'ug',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ukraine',
        isoCode: 'ua',
        dialCode: '380',
        flagClass: 'ua',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'United Arab Emirates',
        isoCode: 'ae',
        dialCode: '971',
        flagClass: 'ae',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'United Kingdom',
        isoCode: 'gb',
        dialCode: '44',
        flagClass: 'gb',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'United States',
        isoCode: 'us',
        dialCode: '1',
        flagClass: 'us',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Uruguay',
        isoCode: 'uy',
        dialCode: '598',
        flagClass: 'uy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Uzbekistan',
        isoCode: 'uz',
        dialCode: '998',
        flagClass: 'uz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Vanuatu',
        isoCode: 'vu',
        dialCode: '678',
        flagClass: 'vu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Holy See (Vatican City State)',
        isoCode: 'va',
        dialCode: '379',
        flagClass: 'va',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Venezuela, Bolivarian Republic of Venezuela',
        isoCode: 've',
        dialCode: '58',
        flagClass: 've',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Vietnam',
        isoCode: 'vn',
        dialCode: '84',
        flagClass: 'vn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Wallis and Futuna',
        isoCode: 'wf',
        dialCode: '681',
        flagClass: 'wf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Yemen',
        isoCode: 'ye',
        dialCode: '967',
        flagClass: 'ye',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Zambia',
        isoCode: 'zm',
        dialCode: '260',
        flagClass: 'zm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Zimbabwe',
        isoCode: 'zw',
        dialCode: '263',
        flagClass: 'zw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Aland Islands',
        isoCode: 'ax',
        dialCode: '358',
        flagClass: 'ax',
        priority: 0,
        placeholder: ''
    }
];

class IonIntlTelInputService {
    constructor() {
        this.countryList = countries;
    }
    getListOfCountries() {
        return this.countryList;
    }
}
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const raf = (h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};

class CountryPlaceholder {
    transform(country, inputPlaceholder, separateDialCode, fallbackPlaceholder) {
        if (inputPlaceholder && inputPlaceholder.length > 0) {
            return inputPlaceholder;
        }
        const phoneUtil = PhoneNumberUtil.getInstance();
        try {
            const placeholder = phoneUtil.format(phoneUtil.getExampleNumber(country.isoCode), PhoneNumberFormat.INTERNATIONAL);
            if (placeholder) {
                if (separateDialCode) {
                    return placeholder.substr(placeholder.indexOf(' ') + 1);
                }
                else {
                    return placeholder;
                }
            }
        }
        catch (e) {
            return fallbackPlaceholder;
        }
    }
}
/** @nocollapse */ /** @nocollapse */ CountryPlaceholder.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CountryPlaceholder, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
/** @nocollapse */ /** @nocollapse */ CountryPlaceholder.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CountryPlaceholder, name: "countryPlaceholder" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CountryPlaceholder, decorators: [{
            type: Pipe,
            args: [{ name: 'countryPlaceholder' }]
        }] });

/**
 * @ignore
 */
/**
 * @author Azzam Asghar <azzam.asghar@interstellus.com>
 */
class IonIntlTelInputComponent {
    constructor(el, platform, ionIntlTelInputService) {
        this.el = el;
        this.platform = platform;
        this.ionIntlTelInputService = ionIntlTelInputService;
        this.cssClass = true;
        /**
         * Iso Code of default selected Country.
         * See more on.
         *
         * @default ''
         * @memberof IonIntlTelInputComponent
         */
        this.defaultCountryiso = '';
        /**
         * Determines whether to use `00` or `+` as dial code prefix.
         * Available attributes are '+' | '00'.
         * See more on.
         *
         * @default +
         * @memberof IonIntlTelInputComponent
         */
        this.dialCodePrefix = '+';
        /**
         * Determines whether to select automatic country based on user input.
         * See more on.
         *
         * @default false
         * @memberof IonIntlTelInputComponent
         */
        this.enableAutoCountrySelect = false;
        /**
         * Determines whether an example number will be shown as a placeholder in input.
         * See more on.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.enablePlaceholder = true;
        /**
         * A fallaback placeholder to be used if no example number is found for a country.
         * See more on.
         *
         * @default ''
         * @memberof IonIntlTelInputComponent
         */
        this.fallbackPlaceholder = '';
        /**
         * If a custom placeholder is needed for input.
         * If this property is set it will override `enablePlaceholder` and only this placeholder will be shown.
         * See more on.
         *
         * @default ''
         * @memberof IonIntlTelInputComponent
         */
        this.inputPlaceholder = '';
        /**
         * Maximum Length for input.
         * See more on.
         *
         * @default '15'
         * @memberof IonIntlTelInputComponent
         */
        this.maxLength = '15';
        /**
         * Title of modal opened to select country dial code.
         * See more on.
         *
         * @default 'Select Country'
         * @memberof IonIntlTelInputComponent
         */
        this.modalTitle = 'Select Country';
        /**
         * CSS class to attach to dial code selectionmodal.
         * See more on.
         *
         * @default ''
         * @memberof IonIntlTelInputComponent
         */
        this.modalCssClass = '';
        /**
         * Placeholder for input in dial code selection modal.
         * See more on.
         *
         * @default 'Enter country name'
         * @memberof IonIntlTelInputComponent
         */
        this.modalSearchPlaceholder = 'Enter country name';
        /**
         * Text for close button in dial code selection modal.
         * See more on.
         *
         * @default 'Close'
         * @memberof IonIntlTelInputComponent
         */
        this.modalCloseText = 'Close';
        /**
         * Slot for close button in dial code selection modal. [Ionic slots](https://ionicframework.com/docs/api/item) are supported
         * See more on.
         *
         * @default 'end'
         * @memberof IonIntlTelInputComponent
         */
        this.modalCloseButtonSlot = 'end';
        /**
         * Determines whether dial code selection modal should be searchable or not.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalCanSearch = true;
        /**
         * Determines whether dial code selection modal is closed on backdrop click.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalShouldBackdropClose = true;
        /**
         * Determines whether input should be focused when dial code selection modal is opened.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalShouldFocusSearchbar = true;
        /**
         * Message to show when no countries are found for search in dial code selection modal.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalSearchFailText = 'No countries found';
        /**
         * Item icon slot.
         * See more on.
         *
         * @default 'start'
         * @memberof IonIntlTelInputComponent
         */
        this.modalItemIconSlot = 'start';
        /**
         * List of iso codes of manually selected countries as string, which will appear in the dropdown.
         * **Note**: `onlyCountries` should be a string array of country iso codes.
         * See more on.
         *
         * @default null
         * @memberof IonIntlTelInputComponent
         */
        this.onlyCountries = [];
        /**
         * List of iso codesn as string of  countries, which will appear at the top in dial code selection modal.
         * **Note**: `preferredCountries` should be a string array of country iso codes.
         * See more on.
         *
         * @default null
         * @memberof IonIntlTelInputComponent
         */
        this.preferredCountries = [];
        /**
         * Determines whether first country should be selected in dial code select or not.
         * See more on.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.selectFirstCountry = true;
        /**
         * Determines whether to visually separate dialcode into the drop down element.
         * See more on.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.separateDialCode = true;
        /**
         * Fires when the Phone number Input is changed.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberChange = new EventEmitter();
        /**
         * Fires when the Phone number Input is blurred.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberBlur = new EventEmitter();
        /**
         * Fires when the Phone number Input is focused.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberFocus = new EventEmitter();
        /**
         * Fires when the user is typing in Phone number Input.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberInput = new EventEmitter();
        /**
         * Fires when the dial code selection is changed.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeChange = new EventEmitter();
        /**
         * Fires when the dial code selection modal is opened.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeOpen = new EventEmitter();
        /**
         * Fires when the dial code selection modal is closed.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeClose = new EventEmitter();
        /**
         * Fires when a dial code is selected in dial code selection modal.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeSelect = new EventEmitter();
        // tslint:disable-next-line: variable-name
        this._value = null;
        this.phoneNumber = '';
        this.countries = [];
        this.disabled = false;
        this.phoneUtil = PhoneNumberUtil.getInstance();
        this.onTouched = () => { };
        this.propagateChange = (_) => { };
        this.startsWith = (input, search) => {
            return input.substr(0, search.length) === search;
        };
        this.getClasses = (element) => {
            const classList = element.classList;
            const classes = [];
            for (let i = 0; i < classList.length; i++) {
                const item = classList.item(i);
                if (item !== null && this.startsWith(item, 'ng-')) {
                    classes.push(`ion-${item.substr(3)}`);
                }
            }
            return classes;
        };
        this.setClasses = (element, classes) => {
            const classList = element.classList;
            [
                'ion-valid',
                'ion-invalid',
                'ion-touched',
                'ion-untouched',
                'ion-dirty',
                'ion-pristine',
            ].forEach((c) => classList.remove(c));
            classes.forEach((c) => classList.add(c));
        };
        this.setIonicClasses = (element) => {
            raf(() => {
                const input = element.nativeElement;
                const classes = this.getClasses(input);
                this.setClasses(input, classes);
                const item = input.closest('ion-item');
                if (item) {
                    this.setClasses(item, classes);
                }
            });
        };
        this.setItemClass = (element, className, addClass) => {
            const input = element.nativeElement;
            const item = input.closest('ion-item');
            if (item) {
                const classList = item.classList;
                if (addClass) {
                    classList.add(className);
                }
                else {
                    classList.remove(className);
                }
            }
        };
    }
    get hasValueCssClass() {
        return this.hasValue();
    }
    get isEnabled() {
        return !this.disabled;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.setIonicClasses(this.el);
    }
    emitValueChange(change) {
        this.propagateChange(change);
    }
    ngOnInit() {
        this.isIos = this.platform.is('ios');
        this.isMD = !this.isIos;
        this.setItemClass(this.el, 'item-interactive', true);
        this.fetchAllCountries();
        this.setPreferredCountries();
        if (this.onlyCountries.length) {
            this.countries = this.countries.filter((country) => this.onlyCountries.includes(country.isoCode));
        }
        if (this.selectFirstCountry) {
            if (this.defaultCountryiso) {
                this.setCountry(this.getCountryByIsoCode(this.defaultCountryiso));
            }
            else {
                if (this.preferredCountries.length &&
                    this.preferredCountries.includes(this.defaultCountryiso)) {
                    this.setCountry(this.getCountryByIsoCode(this.preferredCountries[0]));
                }
                else {
                    this.setCountry(this.countries[0]);
                }
            }
        }
    }
    ngOnChanges(changes) {
        if (this.countries &&
            changes.defaulyCountryisoCode &&
            changes.defaulyCountryisoCode.currentValue !==
                changes.defaulyCountryisoCode.previousValue) {
            this.setCountry(changes.defaulyCountryisoCode.currentValue);
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        this.fillValues(obj);
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    fillValues(value) {
        if (value &&
            value !== null &&
            typeof value === 'object' &&
            !this.isNullOrWhiteSpace(value)) {
            this.phoneNumber = value.nationalNumber;
            this.setCountry(this.getCountryByIsoCode(value.isoCode));
            this.value = value;
        }
        else if (this.value &&
            this.value !== null &&
            typeof this.value === 'object' &&
            !this.isNullOrWhiteSpace(this.value)) {
            this.phoneNumber = this.value.nationalNumber;
            this.setCountry(this.getCountryByIsoCode(this.value.isoCode));
        }
        setTimeout(() => {
            this.onNumberChange();
        }, 1);
    }
    hasValue() {
        return !this.isNullOrWhiteSpace(this.value);
    }
    onCodeOpen() {
        this.codeOpen.emit();
    }
    onCodeChange(event) {
        if (this.isNullOrWhiteSpace(this.phoneNumber)) {
            this.emitValueChange(null);
        }
        else {
            let googleNumber;
            try {
                googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
            }
            catch (e) { }
            const internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            const nationalNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.NATIONAL)
                : '';
            if (this.separateDialCode && internationallNo) {
                this.phoneNumber = this.removeDialCode(internationallNo);
            }
            this.emitValueChange({
                e164Number: this.dialCodePrefix + this.country.dialCode + this.phoneNumber,
                internationalNumber: internationallNo,
                nationalNumber: nationalNo,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode,
            });
            this.codeChange.emit();
        }
        setTimeout(() => {
            this.numberInputEl.setFocus();
        }, 400);
    }
    onCodeClose() {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.codeClose.emit();
    }
    onCodeSearchCountries(event) {
        const text = event.text.trim().toLowerCase();
        event.component.startSearch();
        event.component.items = this.filterCountries(text);
        event.component.endSearch();
    }
    onCodeSelect() {
        this.codeSelect.emit();
    }
    onIonNumberChange(event) {
        this.setIonicClasses(this.el);
        this.numberChange.emit(event);
    }
    onIonNumberBlur() {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.numberBlur.emit();
    }
    onIonNumberFocus() {
        this.hasFocus = true;
        this.setItemClass(this.el, 'item-has-focus', true);
        this.numberFocus.emit();
    }
    onIonNumberInput(event) {
        this.numberInput.emit(event);
    }
    onNumberChange() {
        if (!this.phoneNumber) {
            this.value = null;
            this.emitValueChange(null);
            return;
        }
        if (this.country) {
            this.emitValueChange({
                e164Number: this.dialCodePrefix + this.country.dialCode + this.phoneNumber,
                internationalNumber: this.dialCodePrefix + this.country.dialCode + ' ' + this.phoneNumber,
                nationalNumber: this.phoneNumber,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode,
            });
        }
        let googleNumber;
        try {
            googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
        }
        catch (e) {
            return;
        }
        let isoCode = this.country ? this.country.isoCode : null;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            isoCode =
                googleNumber && googleNumber.getCountryCode()
                    ? this.getCountryIsoCode(googleNumber.getCountryCode(), googleNumber)
                    : this.country.isoCode;
            if (isoCode && isoCode !== this.country.isoCode) {
                const newCountry = this.countries.find((country) => country.isoCode === isoCode);
                if (newCountry) {
                    this.country = newCountry;
                }
            }
        }
        isoCode = isoCode ? isoCode : this.country ? this.country.isoCode : null;
        if (!this.phoneNumber || !isoCode) {
            this.emitValueChange(null);
        }
        else {
            const internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            const nationalNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.NATIONAL)
                : '';
            if (this.separateDialCode && internationallNo) {
                this.phoneNumber = this.removeDialCode(internationallNo);
            }
            this.emitValueChange({
                e164Number: this.dialCodePrefix + this.country.dialCode + this.phoneNumber,
                internationalNumber: internationallNo,
                nationalNumber: nationalNo,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode,
            });
        }
    }
    onNumberKeyDown(event) {
        const allowedChars = /^[0-9\+\-\(\)\.\ ]/;
        const allowedCtrlChars = /[axcv]/;
        const allowedOtherKeys = [
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'Home',
            'End',
            'Insert',
            'Delete',
            'Backspace',
            'Tab',
        ];
        const isCtrlKey = event.ctrlKey || event.metaKey;
        if (!allowedChars.test(event.key) &&
            !(isCtrlKey && allowedCtrlChars.test(event.key)) &&
            !allowedOtherKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
    filterCountries(text) {
        return this.countries.filter((country) => {
            return (country.name.toLowerCase().indexOf(text) !== -1 ||
                country.name.toLowerCase().indexOf(text) !== -1 ||
                country.dialCode.toString().toLowerCase().indexOf(text) !== -1);
        });
    }
    getCountryIsoCode(countryCode, googleNumber) {
        const rawNumber = googleNumber.values_[2].toString();
        const countries = this.countries.filter((country) => country.dialCode === countryCode.toString());
        const mainCountry = countries.find((country) => country.areaCodes === undefined);
        const secondaryCountries = countries.filter((country) => country.areaCodes !== undefined);
        let matchedCountry = mainCountry ? mainCountry.isoCode : undefined;
        secondaryCountries.forEach((country) => {
            country.areaCodes.forEach((areaCode) => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.isoCode;
                }
            });
        });
        return matchedCountry;
    }
    fetchAllCountries() {
        this.countries = this.ionIntlTelInputService.getListOfCountries();
    }
    getCountryByIsoCode(isoCode) {
        for (const country of this.countries) {
            if (country.isoCode === isoCode) {
                return country;
            }
        }
        return;
    }
    isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof value === 'string' && value === '') {
            return true;
        }
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return true;
        }
        return false;
    }
    removeDialCode(phoneNumber) {
        if (this.separateDialCode && phoneNumber) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    }
    setCountry(country) {
        this.country = country;
        this.codeChange.emit(this.country);
    }
    setPreferredCountries() {
        for (const preferedCountryIsoCode of this.preferredCountries) {
            const country = this.getCountryByIsoCode(preferedCountryIsoCode);
            country.priority = country ? 1 : country.priority;
        }
        this.countries.sort((a, b) => a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0);
    }
}
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputComponent, deps: [{ token: i0.ElementRef }, { token: i1.Platform }, { token: IonIntlTelInputService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: IonIntlTelInputComponent, selector: "ion-intl-tel-input", inputs: { isEnabled: "isEnabled", defaultCountryiso: "defaultCountryiso", dialCodePrefix: "dialCodePrefix", enableAutoCountrySelect: "enableAutoCountrySelect", enablePlaceholder: "enablePlaceholder", fallbackPlaceholder: "fallbackPlaceholder", inputPlaceholder: "inputPlaceholder", maxLength: "maxLength", modalTitle: "modalTitle", modalCssClass: "modalCssClass", modalSearchPlaceholder: "modalSearchPlaceholder", modalCloseText: "modalCloseText", modalCloseButtonSlot: "modalCloseButtonSlot", modalCanSearch: "modalCanSearch", modalShouldBackdropClose: "modalShouldBackdropClose", modalShouldFocusSearchbar: "modalShouldFocusSearchbar", modalSearchFailText: "modalSearchFailText", modalItemIconSlot: "modalItemIconSlot", onlyCountries: "onlyCountries", preferredCountries: "preferredCountries", selectFirstCountry: "selectFirstCountry", separateDialCode: "separateDialCode" }, outputs: { numberChange: "numberChange", numberBlur: "numberBlur", numberFocus: "numberFocus", numberInput: "numberInput", codeChange: "codeChange", codeOpen: "codeOpen", codeClose: "codeClose", codeSelect: "codeSelect" }, host: { properties: { "class.ion-intl-tel-input": "this.cssClass", "class.ion-intl-tel-input-ios": "this.isIos", "class.ion-intl-tel-input-md": "this.isMD", "class.has-focus": "this.hasFocus", "class.ion-intl-tel-input-has-value": "this.hasValueCssClass", "class.ion-intl-tel-input-is-enabled": "this.isEnabled" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => IonIntlTelInputComponent)),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "numberInputEl", first: true, predicate: ["numberInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ion-intl-tel-input-code\">\r\n  <ionic-selectable\r\n    #codeSelect\r\n    [(ngModel)]=\"country\"\r\n    [canSearch]=\"modalCanSearch\"\r\n    closeButtonText=\"{{modalCloseText}}\"\r\n    closeButtonSlot=\"{{modalCloseButtonSlot}}\"\r\n    [disabled] = \"disabled\"\r\n    [hasVirtualScroll]=\"true\"\r\n    itemTextField=\"name\"\r\n    [items]=\"countries\"\r\n    [itemIconSlot]=\"modalItemIconSlot\"\r\n    itemValueField=\"isoCode\"\r\n    modalCssClass=\"ionic-tel-input-modal {{modalCssClass}}\"\r\n    placeholder=\"Country\"\r\n    searchFailText=\"{{modalSearchFailText}}\"\r\n    searchPlaceholder=\"{{modalSearchPlaceholder}}\"\r\n    [shouldBackdropClose]=\"modalShouldBackdropClose\"\r\n    [shouldFocusSearchbar]=\"modalShouldFocusSearchbar\"\r\n    (onChange)=\"onCodeChange($event)\"\r\n    (onClose)=\"onCodeClose()\"\r\n    (onOpen)=\"onCodeOpen()\"\r\n    (onSearch)=\"onCodeSearchCountries($event)\"\r\n    (onSelect)=\"onCodeSelect()\"\r\n  >\r\n    <ng-template ionicSelectableTitleTemplate>\r\n      {{modalTitle}}\r\n    </ng-template>\r\n    <ng-template ionicSelectableValueTemplate let-country=\"value\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n      <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableItemTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}} ion-margin-end\"></span>\r\n        <span class=\"ion-margin-end\">{{country.name}}</span>\r\n        <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableCloseButtonTemplate>\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ng-template>\r\n    <!-- <ng-template ionicSelectableItemEndTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n    </ng-template> -->\r\n  </ionic-selectable>\r\n</div>\r\n\r\n<div class=\"ion-intl-tel-input-number\">\r\n  <ion-input\r\n    #numberInput\r\n    [(ngModel)]=\"phoneNumber\"\r\n    autocomplete=\"off\"\r\n    [disabled] = \"disabled\"\r\n    [attr.maxLength]=\"maxLength\"\r\n    type=\"tel\"\r\n    (ionBlur)=\"onIonNumberBlur()\"\r\n    (ionChange)=\"onIonNumberChange($event)\"\r\n    (ionFocus)=\"onIonNumberFocus()\"\r\n    (ionInput)=\"onIonNumberInput($event)\"\r\n    (keydown)=\"onNumberKeyDown($event)\"\r\n    (ngModelChange)=\"onNumberChange()\"\r\n    placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder}}\" >\r\n  </ion-input>\r\n</div>\r\n", styles: [":host{width:100%;display:flex;align-items:flex-end}:host .ion-intl-tel-input-code{position:relative}:host .ion-intl-tel-input-number{flex:1}:host .ionic-selectable-label-default,:host .ionic-selectable-label-fixed{max-width:100%}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-inner .ionic-selectable-value{padding-top:10px;padding-bottom:10px}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-icon-inner{top:17px}:host .fi{margin-right:5px;border-radius:3px}\n"], components: [{ type: i3.IonicSelectableComponent, selector: "ionic-selectable", inputs: ["items", "modalCssClass", "modalEnterAnimation", "modalLeaveAnimation", "isConfirmButtonEnabled", "itemValueField", "itemTextField", "groupValueField", "groupTextField", "canSearch", "hasInfiniteScroll", "hasVirtualScroll", "virtualScrollApproxItemHeight", "searchPlaceholder", "placeholder", "searchFailText", "clearButtonText", "addButtonText", "confirmButtonText", "closeButtonText", "shouldFocusSearchbar", "headerColor", "groupColor", "closeButtonSlot", "itemIconSlot", "searchDebounce", "disabledItems", "shouldStoreItemValue", "canSaveItem", "canDeleteItem", "virtualScrollHeaderFn", "isEnabled", "shouldBackdropClose", "hasConfirmButton", "isOnSearchEnabled", "canClear", "isMultiple", "canAddItem"], outputs: ["itemsChange", "onChange", "onSearch", "onSearchFail", "onSearchSuccess", "onInfiniteScroll", "onOpen", "onClose", "onSelect", "onClear", "onSaveItem", "onDeleteItem", "onAddItem"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3.IonicSelectableTitleTemplateDirective, selector: "[ionicSelectableTitleTemplate]" }, { type: i3.IonicSelectableValueTemplateDirective, selector: "[ionicSelectableValueTemplate]" }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.IonicSelectableItemTemplateDirective, selector: "[ionicSelectableItemTemplate]" }, { type: i3.IonicSelectableCloseButtonTemplateDirective, selector: "[ionicSelectableCloseButtonTemplate]" }, { type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }], pipes: { "countryPlaceholder": CountryPlaceholder } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ion-intl-tel-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => IonIntlTelInputComponent)),
                            multi: true,
                        },
                    ], template: "<div class=\"ion-intl-tel-input-code\">\r\n  <ionic-selectable\r\n    #codeSelect\r\n    [(ngModel)]=\"country\"\r\n    [canSearch]=\"modalCanSearch\"\r\n    closeButtonText=\"{{modalCloseText}}\"\r\n    closeButtonSlot=\"{{modalCloseButtonSlot}}\"\r\n    [disabled] = \"disabled\"\r\n    [hasVirtualScroll]=\"true\"\r\n    itemTextField=\"name\"\r\n    [items]=\"countries\"\r\n    [itemIconSlot]=\"modalItemIconSlot\"\r\n    itemValueField=\"isoCode\"\r\n    modalCssClass=\"ionic-tel-input-modal {{modalCssClass}}\"\r\n    placeholder=\"Country\"\r\n    searchFailText=\"{{modalSearchFailText}}\"\r\n    searchPlaceholder=\"{{modalSearchPlaceholder}}\"\r\n    [shouldBackdropClose]=\"modalShouldBackdropClose\"\r\n    [shouldFocusSearchbar]=\"modalShouldFocusSearchbar\"\r\n    (onChange)=\"onCodeChange($event)\"\r\n    (onClose)=\"onCodeClose()\"\r\n    (onOpen)=\"onCodeOpen()\"\r\n    (onSearch)=\"onCodeSearchCountries($event)\"\r\n    (onSelect)=\"onCodeSelect()\"\r\n  >\r\n    <ng-template ionicSelectableTitleTemplate>\r\n      {{modalTitle}}\r\n    </ng-template>\r\n    <ng-template ionicSelectableValueTemplate let-country=\"value\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n      <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableItemTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}} ion-margin-end\"></span>\r\n        <span class=\"ion-margin-end\">{{country.name}}</span>\r\n        <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableCloseButtonTemplate>\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ng-template>\r\n    <!-- <ng-template ionicSelectableItemEndTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n    </ng-template> -->\r\n  </ionic-selectable>\r\n</div>\r\n\r\n<div class=\"ion-intl-tel-input-number\">\r\n  <ion-input\r\n    #numberInput\r\n    [(ngModel)]=\"phoneNumber\"\r\n    autocomplete=\"off\"\r\n    [disabled] = \"disabled\"\r\n    [attr.maxLength]=\"maxLength\"\r\n    type=\"tel\"\r\n    (ionBlur)=\"onIonNumberBlur()\"\r\n    (ionChange)=\"onIonNumberChange($event)\"\r\n    (ionFocus)=\"onIonNumberFocus()\"\r\n    (ionInput)=\"onIonNumberInput($event)\"\r\n    (keydown)=\"onNumberKeyDown($event)\"\r\n    (ngModelChange)=\"onNumberChange()\"\r\n    placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder}}\" >\r\n  </ion-input>\r\n</div>\r\n", styles: [":host{width:100%;display:flex;align-items:flex-end}:host .ion-intl-tel-input-code{position:relative}:host .ion-intl-tel-input-number{flex:1}:host .ionic-selectable-label-default,:host .ionic-selectable-label-fixed{max-width:100%}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-inner .ionic-selectable-value{padding-top:10px;padding-bottom:10px}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-icon-inner{top:17px}:host .fi{margin-right:5px;border-radius:3px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.Platform }, { type: IonIntlTelInputService }]; }, propDecorators: { cssClass: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input']
            }], isIos: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-ios']
            }], isMD: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-md']
            }], hasFocus: [{
                type: HostBinding,
                args: ['class.has-focus']
            }], hasValueCssClass: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-has-value']
            }], isEnabled: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-is-enabled']
            }, {
                type: Input,
                args: ['isEnabled']
            }], defaultCountryiso: [{
                type: Input
            }], dialCodePrefix: [{
                type: Input
            }], enableAutoCountrySelect: [{
                type: Input
            }], enablePlaceholder: [{
                type: Input
            }], fallbackPlaceholder: [{
                type: Input
            }], inputPlaceholder: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], modalTitle: [{
                type: Input
            }], modalCssClass: [{
                type: Input
            }], modalSearchPlaceholder: [{
                type: Input
            }], modalCloseText: [{
                type: Input
            }], modalCloseButtonSlot: [{
                type: Input
            }], modalCanSearch: [{
                type: Input
            }], modalShouldBackdropClose: [{
                type: Input
            }], modalShouldFocusSearchbar: [{
                type: Input
            }], modalSearchFailText: [{
                type: Input
            }], modalItemIconSlot: [{
                type: Input
            }], onlyCountries: [{
                type: Input
            }], preferredCountries: [{
                type: Input
            }], selectFirstCountry: [{
                type: Input
            }], separateDialCode: [{
                type: Input
            }], numberChange: [{
                type: Output
            }], numberBlur: [{
                type: Output
            }], numberFocus: [{
                type: Output
            }], numberInput: [{
                type: Output
            }], codeChange: [{
                type: Output
            }], codeOpen: [{
                type: Output
            }], codeClose: [{
                type: Output
            }], codeSelect: [{
                type: Output
            }], numberInputEl: [{
                type: ViewChild,
                args: ['numberInput', { static: false }]
            }] } });

class IonIntlTelInputModule {
}
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputModule, declarations: [CountryPlaceholder,
        IonIntlTelInputValidatorDirective,
        IonIntlTelInputComponent], imports: [CommonModule,
        FormsModule,
        IonicModule,
        IonicSelectableModule], exports: [IonIntlTelInputComponent,
        IonIntlTelInputValidatorDirective] });
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputModule, providers: [
        IonIntlTelInputService
    ], imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            IonicSelectableModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CountryPlaceholder,
                        IonIntlTelInputValidatorDirective,
                        IonIntlTelInputComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        IonicSelectableModule
                    ],
                    exports: [
                        IonIntlTelInputComponent,
                        IonIntlTelInputValidatorDirective
                    ],
                    providers: [
                        IonIntlTelInputService
                    ],
                }]
        }] });

/*
 * Public API Surface of ion-intl-tel-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonIntlTelInputComponent, IonIntlTelInputModule, IonIntlTelInputValidatorDirective, IonIntlTelInputValidators };
//# sourceMappingURL=trzp-ion-intl-tel-input.mjs.map
