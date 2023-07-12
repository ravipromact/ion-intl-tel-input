import { Component, Input, forwardRef, Output, EventEmitter, ViewChild, ElementRef, HostBinding, } from '@angular/core';
import { NG_VALUE_ACCESSOR, } from '@angular/forms';
import { IonInput, Platform } from '@ionic/angular';
import { PhoneNumberFormat, PhoneNumberUtil, } from 'google-libphonenumber';
import { IonIntlTelInputService } from '../ion-intl-tel-input.service';
// import { ionIntlTelInputValidator } from '../ion-intl-tel-input.directive';
import { raf } from '../util/util';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "../ion-intl-tel-input.service";
import * as i3 from "ionic-selectable";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "../pipes/country-placeholder";
/**
 * @ignore
 */
/**
 * @author Azzam Asghar <azzam.asghar@interstellus.com>
 */
export class IonIntlTelInputComponent {
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
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputComponent, deps: [{ token: i0.ElementRef }, { token: i1.Platform }, { token: i2.IonIntlTelInputService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ IonIntlTelInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: IonIntlTelInputComponent, selector: "ion-intl-tel-input", inputs: { isEnabled: "isEnabled", defaultCountryiso: "defaultCountryiso", dialCodePrefix: "dialCodePrefix", enableAutoCountrySelect: "enableAutoCountrySelect", enablePlaceholder: "enablePlaceholder", fallbackPlaceholder: "fallbackPlaceholder", inputPlaceholder: "inputPlaceholder", maxLength: "maxLength", modalTitle: "modalTitle", modalCssClass: "modalCssClass", modalSearchPlaceholder: "modalSearchPlaceholder", modalCloseText: "modalCloseText", modalCloseButtonSlot: "modalCloseButtonSlot", modalCanSearch: "modalCanSearch", modalShouldBackdropClose: "modalShouldBackdropClose", modalShouldFocusSearchbar: "modalShouldFocusSearchbar", modalSearchFailText: "modalSearchFailText", modalItemIconSlot: "modalItemIconSlot", onlyCountries: "onlyCountries", preferredCountries: "preferredCountries", selectFirstCountry: "selectFirstCountry", separateDialCode: "separateDialCode" }, outputs: { numberChange: "numberChange", numberBlur: "numberBlur", numberFocus: "numberFocus", numberInput: "numberInput", codeChange: "codeChange", codeOpen: "codeOpen", codeClose: "codeClose", codeSelect: "codeSelect" }, host: { properties: { "class.ion-intl-tel-input": "this.cssClass", "class.ion-intl-tel-input-ios": "this.isIos", "class.ion-intl-tel-input-md": "this.isMD", "class.has-focus": "this.hasFocus", "class.ion-intl-tel-input-has-value": "this.hasValueCssClass", "class.ion-intl-tel-input-is-enabled": "this.isEnabled" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => IonIntlTelInputComponent)),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "numberInputEl", first: true, predicate: ["numberInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ion-intl-tel-input-code\">\r\n  <ionic-selectable\r\n    #codeSelect\r\n    [(ngModel)]=\"country\"\r\n    [canSearch]=\"modalCanSearch\"\r\n    closeButtonText=\"{{modalCloseText}}\"\r\n    closeButtonSlot=\"{{modalCloseButtonSlot}}\"\r\n    [disabled] = \"disabled\"\r\n    [hasVirtualScroll]=\"true\"\r\n    itemTextField=\"name\"\r\n    [items]=\"countries\"\r\n    [itemIconSlot]=\"modalItemIconSlot\"\r\n    itemValueField=\"isoCode\"\r\n    modalCssClass=\"ionic-tel-input-modal {{modalCssClass}}\"\r\n    placeholder=\"Country\"\r\n    searchFailText=\"{{modalSearchFailText}}\"\r\n    searchPlaceholder=\"{{modalSearchPlaceholder}}\"\r\n    [shouldBackdropClose]=\"modalShouldBackdropClose\"\r\n    [shouldFocusSearchbar]=\"modalShouldFocusSearchbar\"\r\n    (onChange)=\"onCodeChange($event)\"\r\n    (onClose)=\"onCodeClose()\"\r\n    (onOpen)=\"onCodeOpen()\"\r\n    (onSearch)=\"onCodeSearchCountries($event)\"\r\n    (onSelect)=\"onCodeSelect()\"\r\n  >\r\n    <ng-template ionicSelectableTitleTemplate>\r\n      {{modalTitle}}\r\n    </ng-template>\r\n    <ng-template ionicSelectableValueTemplate let-country=\"value\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n      <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableItemTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}} ion-margin-end\"></span>\r\n        <span class=\"ion-margin-end\">{{country.name}}</span>\r\n        <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableCloseButtonTemplate>\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ng-template>\r\n    <!-- <ng-template ionicSelectableItemEndTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n    </ng-template> -->\r\n  </ionic-selectable>\r\n</div>\r\n\r\n<div class=\"ion-intl-tel-input-number\">\r\n  <ion-input\r\n    #numberInput\r\n    [(ngModel)]=\"phoneNumber\"\r\n    autocomplete=\"off\"\r\n    [disabled] = \"disabled\"\r\n    [attr.maxLength]=\"maxLength\"\r\n    type=\"tel\"\r\n    (ionBlur)=\"onIonNumberBlur()\"\r\n    (ionChange)=\"onIonNumberChange($event)\"\r\n    (ionFocus)=\"onIonNumberFocus()\"\r\n    (ionInput)=\"onIonNumberInput($event)\"\r\n    (keydown)=\"onNumberKeyDown($event)\"\r\n    (ngModelChange)=\"onNumberChange()\"\r\n    placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder}}\" >\r\n  </ion-input>\r\n</div>\r\n", styles: [":host{width:100%;display:flex;align-items:flex-end}:host .ion-intl-tel-input-code{position:relative}:host .ion-intl-tel-input-number{flex:1}:host .ionic-selectable-label-default,:host .ionic-selectable-label-fixed{max-width:100%}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-inner .ionic-selectable-value{padding-top:10px;padding-bottom:10px}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-icon-inner{top:17px}:host .fi{margin-right:5px;border-radius:3px}\n"], components: [{ type: i3.IonicSelectableComponent, selector: "ionic-selectable", inputs: ["items", "modalCssClass", "modalEnterAnimation", "modalLeaveAnimation", "isConfirmButtonEnabled", "itemValueField", "itemTextField", "groupValueField", "groupTextField", "canSearch", "hasInfiniteScroll", "hasVirtualScroll", "virtualScrollApproxItemHeight", "searchPlaceholder", "placeholder", "searchFailText", "clearButtonText", "addButtonText", "confirmButtonText", "closeButtonText", "shouldFocusSearchbar", "headerColor", "groupColor", "closeButtonSlot", "itemIconSlot", "searchDebounce", "disabledItems", "shouldStoreItemValue", "canSaveItem", "canDeleteItem", "virtualScrollHeaderFn", "isEnabled", "shouldBackdropClose", "hasConfirmButton", "isOnSearchEnabled", "canClear", "isMultiple", "canAddItem"], outputs: ["itemsChange", "onChange", "onSearch", "onSearchFail", "onSearchSuccess", "onInfiniteScroll", "onOpen", "onClose", "onSelect", "onClear", "onSaveItem", "onDeleteItem", "onAddItem"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3.IonicSelectableTitleTemplateDirective, selector: "[ionicSelectableTitleTemplate]" }, { type: i3.IonicSelectableValueTemplateDirective, selector: "[ionicSelectableValueTemplate]" }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.IonicSelectableItemTemplateDirective, selector: "[ionicSelectableItemTemplate]" }, { type: i3.IonicSelectableCloseButtonTemplateDirective, selector: "[ionicSelectableCloseButtonTemplate]" }, { type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }], pipes: { "countryPlaceholder": i6.CountryPlaceholder } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IonIntlTelInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ion-intl-tel-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => IonIntlTelInputComponent)),
                            multi: true,
                        },
                    ], template: "<div class=\"ion-intl-tel-input-code\">\r\n  <ionic-selectable\r\n    #codeSelect\r\n    [(ngModel)]=\"country\"\r\n    [canSearch]=\"modalCanSearch\"\r\n    closeButtonText=\"{{modalCloseText}}\"\r\n    closeButtonSlot=\"{{modalCloseButtonSlot}}\"\r\n    [disabled] = \"disabled\"\r\n    [hasVirtualScroll]=\"true\"\r\n    itemTextField=\"name\"\r\n    [items]=\"countries\"\r\n    [itemIconSlot]=\"modalItemIconSlot\"\r\n    itemValueField=\"isoCode\"\r\n    modalCssClass=\"ionic-tel-input-modal {{modalCssClass}}\"\r\n    placeholder=\"Country\"\r\n    searchFailText=\"{{modalSearchFailText}}\"\r\n    searchPlaceholder=\"{{modalSearchPlaceholder}}\"\r\n    [shouldBackdropClose]=\"modalShouldBackdropClose\"\r\n    [shouldFocusSearchbar]=\"modalShouldFocusSearchbar\"\r\n    (onChange)=\"onCodeChange($event)\"\r\n    (onClose)=\"onCodeClose()\"\r\n    (onOpen)=\"onCodeOpen()\"\r\n    (onSearch)=\"onCodeSearchCountries($event)\"\r\n    (onSelect)=\"onCodeSelect()\"\r\n  >\r\n    <ng-template ionicSelectableTitleTemplate>\r\n      {{modalTitle}}\r\n    </ng-template>\r\n    <ng-template ionicSelectableValueTemplate let-country=\"value\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n      <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableItemTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}} ion-margin-end\"></span>\r\n        <span class=\"ion-margin-end\">{{country.name}}</span>\r\n        <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\r\n    </ng-template>\r\n    <ng-template ionicSelectableCloseButtonTemplate>\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ng-template>\r\n    <!-- <ng-template ionicSelectableItemEndTemplate let-country=\"item\">\r\n      <span class=\"fi fi-{{country.flagClass}}\"></span>\r\n    </ng-template> -->\r\n  </ionic-selectable>\r\n</div>\r\n\r\n<div class=\"ion-intl-tel-input-number\">\r\n  <ion-input\r\n    #numberInput\r\n    [(ngModel)]=\"phoneNumber\"\r\n    autocomplete=\"off\"\r\n    [disabled] = \"disabled\"\r\n    [attr.maxLength]=\"maxLength\"\r\n    type=\"tel\"\r\n    (ionBlur)=\"onIonNumberBlur()\"\r\n    (ionChange)=\"onIonNumberChange($event)\"\r\n    (ionFocus)=\"onIonNumberFocus()\"\r\n    (ionInput)=\"onIonNumberInput($event)\"\r\n    (keydown)=\"onNumberKeyDown($event)\"\r\n    (ngModelChange)=\"onNumberChange()\"\r\n    placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder}}\" >\r\n  </ion-input>\r\n</div>\r\n", styles: [":host{width:100%;display:flex;align-items:flex-end}:host .ion-intl-tel-input-code{position:relative}:host .ion-intl-tel-input-number{flex:1}:host .ionic-selectable-label-default,:host .ionic-selectable-label-fixed{max-width:100%}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-inner .ionic-selectable-value{padding-top:10px;padding-bottom:10px}:host .ionic-selectable:not(:host .ionic-selectable-label-stacked):not(:host .ionic-selectable-label-floating) ::ng-deep .ionic-selectable-icon-inner{top:17px}:host .fi{margin-right:5px;border-radius:3px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.Platform }, { type: i2.IonIntlTelInputService }]; }, propDecorators: { cssClass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uLWludGwtdGVsLWlucHV0L3NyYy9saWIvaW9uLWludGwtdGVsLWlucHV0L2lvbi1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFHWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsaUJBQWlCLEdBR2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSx1QkFBdUIsQ0FBQztBQUkvQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSw4RUFBOEU7QUFDOUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7QUFFbkM7O0dBRUc7QUFlSDs7R0FFRztBQUNILE1BQU0sT0FBTyx3QkFBd0I7SUFnVW5DLFlBQ1UsRUFBYyxFQUNkLFFBQWtCLEVBQ2xCLHNCQUE4QztRQUY5QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBaFV4RCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBaUJoQjs7Ozs7O1dBTUc7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RGhCLEtBQUs7Z0JBWU4sYUFBYTtzQkFEWixLQUFLO2dCQVlOLGtCQUFrQjtzQkFEakIsS0FBSztnQkFXTixrQkFBa0I7c0JBRGpCLEtBQUs7Z0JBV04sZ0JBQWdCO3NCQURmLEtBQUs7Z0JBVUcsWUFBWTtzQkFEcEIsTUFBTTtnQkFVRSxVQUFVO3NCQURsQixNQUFNO2dCQVVFLFdBQVc7c0JBRG5CLE1BQU07Z0JBVUUsV0FBVztzQkFEbkIsTUFBTTtnQkFVRSxVQUFVO3NCQURsQixNQUFNO2dCQVVFLFFBQVE7c0JBRGhCLE1BQU07Z0JBVUUsU0FBUztzQkFEakIsTUFBTTtnQkFVRSxVQUFVO3NCQURsQixNQUFNO2dCQUdzQyxhQUFhO3NCQUF6RCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBOR19WQUxVRV9BQ0NFU1NPUixcclxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICBOR19WQUxJREFUT1JTLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IElvbklucHV0LCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJ2lvbmljLXNlbGVjdGFibGUnO1xyXG5pbXBvcnQge1xyXG4gIFBob25lTnVtYmVyLFxyXG4gIFBob25lTnVtYmVyRm9ybWF0LFxyXG4gIFBob25lTnVtYmVyVXRpbCxcclxufSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5cclxuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XHJcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2lvbi1pbnRsLXRlbC1pbnB1dC5tb2RlbCc7XHJcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dFNlcnZpY2UgfSBmcm9tICcuLi9pb24taW50bC10ZWwtaW5wdXQuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IGlvbkludGxUZWxJbnB1dFZhbGlkYXRvciB9IGZyb20gJy4uL2lvbi1pbnRsLXRlbC1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyByYWYgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdpb24taW50bC10ZWwtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lvbi1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uSW50bFRlbElucHV0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcblxyXG4vKipcclxuICogQGF1dGhvciBBenphbSBBc2doYXIgPGF6emFtLmFzZ2hhckBpbnRlcnN0ZWxsdXMuY29tPlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dCcpXHJcbiAgY3NzQ2xhc3MgPSB0cnVlO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWlvcycpXHJcbiAgaXNJb3M6IGJvb2xlYW47XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQtbWQnKVxyXG4gIGlzTUQ6IGJvb2xlYW47XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oYXMtZm9jdXMnKVxyXG4gIGhhc0ZvY3VzO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWhhcy12YWx1ZScpXHJcbiAgZ2V0IGhhc1ZhbHVlQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXNWYWx1ZSgpO1xyXG4gIH1cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1pcy1lbmFibGVkJylcclxuICBASW5wdXQoJ2lzRW5hYmxlZCcpXHJcbiAgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElzbyBDb2RlIG9mIGRlZmF1bHQgc2VsZWN0ZWQgQ291bnRyeS5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICcnXHJcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVmYXVsdENvdW50cnlpc28gPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHVzZSBgMDBgIG9yIGArYCBhcyBkaWFsIGNvZGUgcHJlZml4LlxyXG4gICAqIEF2YWlsYWJsZSBhdHRyaWJ1dGVzIGFyZSAnKycgfCAnMDAnLlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgK1xyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGRpYWxDb2RlUHJlZml4OiAnKycgfCAnMDAnID0gJysnO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2VsZWN0IGF1dG9tYXRpYyBjb3VudHJ5IGJhc2VkIG9uIHVzZXIgaW5wdXQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciBhbiBleGFtcGxlIG51bWJlciB3aWxsIGJlIHNob3duIGFzIGEgcGxhY2Vob2xkZXIgaW4gaW5wdXQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZW5hYmxlUGxhY2Vob2xkZXIgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBBIGZhbGxhYmFjayBwbGFjZWhvbGRlciB0byBiZSB1c2VkIGlmIG5vIGV4YW1wbGUgbnVtYmVyIGlzIGZvdW5kIGZvciBhIGNvdW50cnkuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCAnJ1xyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGZhbGxiYWNrUGxhY2Vob2xkZXIgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgYSBjdXN0b20gcGxhY2Vob2xkZXIgaXMgbmVlZGVkIGZvciBpbnB1dC5cclxuICAgKiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCBpdCB3aWxsIG92ZXJyaWRlIGBlbmFibGVQbGFjZWhvbGRlcmAgYW5kIG9ubHkgdGhpcyBwbGFjZWhvbGRlciB3aWxsIGJlIHNob3duLlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJydcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBpbnB1dFBsYWNlaG9sZGVyID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1heGltdW0gTGVuZ3RoIGZvciBpbnB1dC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICcxNSdcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBtYXhMZW5ndGggPSAnMTUnO1xyXG5cclxuICAvKipcclxuICAgKiBUaXRsZSBvZiBtb2RhbCBvcGVuZWQgdG8gc2VsZWN0IGNvdW50cnkgZGlhbCBjb2RlLlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJ1NlbGVjdCBDb3VudHJ5J1xyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIG1vZGFsVGl0bGUgPSAnU2VsZWN0IENvdW50cnknO1xyXG5cclxuICAvKipcclxuICAgKiBDU1MgY2xhc3MgdG8gYXR0YWNoIHRvIGRpYWwgY29kZSBzZWxlY3Rpb25tb2RhbC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICcnXHJcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbW9kYWxDc3NDbGFzcyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBQbGFjZWhvbGRlciBmb3IgaW5wdXQgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICdFbnRlciBjb3VudHJ5IG5hbWUnXHJcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbW9kYWxTZWFyY2hQbGFjZWhvbGRlciA9ICdFbnRlciBjb3VudHJ5IG5hbWUnO1xyXG5cclxuICAvKipcclxuICAgKiBUZXh0IGZvciBjbG9zZSBidXR0b24gaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICdDbG9zZSdcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBtb2RhbENsb3NlVGV4dCA9ICdDbG9zZSc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNsb3QgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2l0ZW0pIGFyZSBzdXBwb3J0ZWRcclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICdlbmQnXHJcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbW9kYWxDbG9zZUJ1dHRvblNsb3Q6ICdzdGFydCcgfCAnZW5kJyB8ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknID0gJ2VuZCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsIHNob3VsZCBiZSBzZWFyY2hhYmxlIG9yIG5vdC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICd0cnVlJ1xyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIG1vZGFsQ2FuU2VhcmNoID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgY2xvc2VkIG9uIGJhY2tkcm9wIGNsaWNrLlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJ3RydWUnXHJcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbW9kYWxTaG91bGRCYWNrZHJvcENsb3NlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBtb2RhbFNob3VsZEZvY3VzU2VhcmNoYmFyID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogTWVzc2FnZSB0byBzaG93IHdoZW4gbm8gY291bnRyaWVzIGFyZSBmb3VuZCBmb3Igc2VhcmNoIGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBtb2RhbFNlYXJjaEZhaWxUZXh0ID0gJ05vIGNvdW50cmllcyBmb3VuZCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEl0ZW0gaWNvbiBzbG90LlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJ3N0YXJ0J1xyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIG1vZGFsSXRlbUljb25TbG90ID0gJ3N0YXJ0JztcclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdCBvZiBpc28gY29kZXMgb2YgbWFudWFsbHkgc2VsZWN0ZWQgY291bnRyaWVzIGFzIHN0cmluZywgd2hpY2ggd2lsbCBhcHBlYXIgaW4gdGhlIGRyb3Bkb3duLlxyXG4gICAqICoqTm90ZSoqOiBgb25seUNvdW50cmllc2Agc2hvdWxkIGJlIGEgc3RyaW5nIGFycmF5IG9mIGNvdW50cnkgaXNvIGNvZGVzLlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIG9ubHlDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdCBvZiBpc28gY29kZXNuIGFzIHN0cmluZyBvZiAgY291bnRyaWVzLCB3aGljaCB3aWxsIGFwcGVhciBhdCB0aGUgdG9wIGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXHJcbiAgICogKipOb3RlKio6IGBwcmVmZXJyZWRDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwcmVmZXJyZWRDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGZpcnN0IGNvdW50cnkgc2hvdWxkIGJlIHNlbGVjdGVkIGluIGRpYWwgY29kZSBzZWxlY3Qgb3Igbm90LlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdEZpcnN0Q291bnRyeSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byB2aXN1YWxseSBzZXBhcmF0ZSBkaWFsY29kZSBpbnRvIHRoZSBkcm9wIGRvd24gZWxlbWVudC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXBhcmF0ZURpYWxDb2RlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGNoYW5nZWQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgbnVtYmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGJsdXJyZWQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgbnVtYmVyQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGZvY3VzZWQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgbnVtYmVyRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFBob25lIG51bWJlciBJbnB1dC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBudW1iZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAqIFNlZSBtb3JlIG9uLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IGNvZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgY29kZU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQuXHJcbiAgICogU2VlIG1vcmUgb24uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgY29kZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVzIHdoZW4gYSBkaWFsIGNvZGUgaXMgc2VsZWN0ZWQgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cclxuICAgKiBTZWUgbW9yZSBvbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBjb2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ251bWJlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIG51bWJlcklucHV0RWw6IElvbklucHV0O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBwcml2YXRlIF92YWx1ZTogSW9uSW50bFRlbElucHV0TW9kZWwgPSBudWxsO1xyXG5cclxuICBjb3VudHJ5OiBDb3VudHJ5STtcclxuICBwaG9uZU51bWJlciA9ICcnO1xyXG4gIGNvdW50cmllczogQ291bnRyeUlbXSA9IFtdO1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgcGhvbmVVdGlsOiBhbnkgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XHJcbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IElvbkludGxUZWxJbnB1dE1vZGVsIHwgbnVsbCkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBpb25JbnRsVGVsSW5wdXRTZXJ2aWNlOiBJb25JbnRsVGVsSW5wdXRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBnZXQgdmFsdWUoKTogSW9uSW50bFRlbElucHV0TW9kZWwgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogSW9uSW50bFRlbElucHV0TW9kZWwgfCBudWxsKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XHJcbiAgfVxyXG5cclxuICBlbWl0VmFsdWVDaGFuZ2UoY2hhbmdlOiBJb25JbnRsVGVsSW5wdXRNb2RlbCB8IG51bGwpIHtcclxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKGNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNJb3MgPSB0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKTtcclxuICAgIHRoaXMuaXNNRCA9ICF0aGlzLmlzSW9zO1xyXG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taW50ZXJhY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLmZldGNoQWxsQ291bnRyaWVzKCk7XHJcbiAgICB0aGlzLnNldFByZWZlcnJlZENvdW50cmllcygpO1xyXG5cclxuICAgIGlmICh0aGlzLm9ubHlDb3VudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5OiBDb3VudHJ5SSkgPT5cclxuICAgICAgICB0aGlzLm9ubHlDb3VudHJpZXMuaW5jbHVkZXMoY291bnRyeS5pc29Db2RlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdEZpcnN0Q291bnRyeSkge1xyXG4gICAgICBpZiAodGhpcy5kZWZhdWx0Q291bnRyeWlzbykge1xyXG4gICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5kZWZhdWx0Q291bnRyeWlzbykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgdGhpcy5wcmVmZXJyZWRDb3VudHJpZXMuaW5jbHVkZXModGhpcy5kZWZhdWx0Q291bnRyeWlzbylcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNbMF0pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuY291bnRyaWVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jb3VudHJpZXMgJiZcclxuICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUgJiZcclxuICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlICE9PVxyXG4gICAgICAgIGNoYW5nZXMuZGVmYXVseUNvdW50cnlpc29Db2RlLnByZXZpb3VzVmFsdWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldENvdW50cnkoY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG9iajogSW9uSW50bFRlbElucHV0TW9kZWwpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsbFZhbHVlcyhvYmopO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGZpbGxWYWx1ZXModmFsdWU6IElvbkludGxUZWxJbnB1dE1vZGVsKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHZhbHVlICYmXHJcbiAgICAgIHZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgIXRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSB2YWx1ZS5uYXRpb25hbE51bWJlcjtcclxuICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZSh2YWx1ZS5pc29Db2RlKSk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMudmFsdWUgJiZcclxuICAgICAgdGhpcy52YWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgIXRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMudmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5waG9uZU51bWJlciA9IHRoaXMudmFsdWUubmF0aW9uYWxOdW1iZXI7XHJcbiAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy52YWx1ZS5pc29Db2RlKSk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5vbk51bWJlckNoYW5nZSgpO1xyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBoYXNWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc051bGxPcldoaXRlU3BhY2UodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNvZGVPcGVuKCkge1xyXG4gICAgdGhpcy5jb2RlT3Blbi5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbkNvZGVDaGFuZ2UoZXZlbnQ6IHtcclxuICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50O1xyXG4gICAgdmFsdWU6IGFueTtcclxuICB9KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc051bGxPcldoaXRlU3BhY2UodGhpcy5waG9uZU51bWJlcikpIHtcclxuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UobnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBnb29nbGVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZShcclxuICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICB0aGlzLmNvdW50cnkuaXNvQ29kZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgIGNvbnN0IGludGVybmF0aW9uYWxsTm8gPSBnb29nbGVOdW1iZXJcclxuICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXHJcbiAgICAgICAgOiAnJztcclxuICAgICAgY29uc3QgbmF0aW9uYWxObyA9IGdvb2dsZU51bWJlclxyXG4gICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KGdvb2dsZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXHJcbiAgICAgICAgOiAnJztcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50ZXJuYXRpb25hbGxObykge1xyXG4gICAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSB0aGlzLnJlbW92ZURpYWxDb2RlKGludGVybmF0aW9uYWxsTm8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgZTE2NE51bWJlcjogdGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZSArIHRoaXMucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgaW50ZXJuYXRpb25hbE51bWJlcjogaW50ZXJuYXRpb25hbGxObyxcclxuICAgICAgICBuYXRpb25hbE51bWJlcjogbmF0aW9uYWxObyxcclxuICAgICAgICBpc29Db2RlOiB0aGlzLmNvdW50cnkuaXNvQ29kZSxcclxuICAgICAgICBkaWFsQ29kZTogdGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29kZUNoYW5nZS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5udW1iZXJJbnB1dEVsLnNldEZvY3VzKCk7XHJcbiAgICB9LCA0MDApO1xyXG4gIH1cclxuXHJcbiAgb25Db2RlQ2xvc2UoKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XHJcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNvZGVDbG9zZS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Db2RlU2VhcmNoQ291bnRyaWVzKGV2ZW50OiB7XHJcbiAgICBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudDtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICB9KTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGV4dC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgIGV2ZW50LmNvbXBvbmVudC5zdGFydFNlYXJjaCgpO1xyXG5cclxuICAgIGV2ZW50LmNvbXBvbmVudC5pdGVtcyA9IHRoaXMuZmlsdGVyQ291bnRyaWVzKHRleHQpO1xyXG4gICAgZXZlbnQuY29tcG9uZW50LmVuZFNlYXJjaCgpO1xyXG4gIH1cclxuXHJcbiAgb25Db2RlU2VsZWN0KCkge1xyXG4gICAgdGhpcy5jb2RlU2VsZWN0LmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uSW9uTnVtYmVyQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XHJcbiAgICB0aGlzLm51bWJlckNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uSW9uTnVtYmVyQmx1cigpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcclxuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0SXRlbUNsYXNzKHRoaXMuZWwsICdpdGVtLWhhcy1mb2N1cycsIGZhbHNlKTtcclxuICAgIHRoaXMubnVtYmVyQmx1ci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbklvbk51bWJlckZvY3VzKCkge1xyXG4gICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XHJcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCB0cnVlKTtcclxuICAgIHRoaXMubnVtYmVyRm9jdXMuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25Jb25OdW1iZXJJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5udW1iZXJJbnB1dC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBob25lTnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY291bnRyeSkge1xyXG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgZTE2NE51bWJlcjogdGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZSArIHRoaXMucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgaW50ZXJuYXRpb25hbE51bWJlcjpcclxuICAgICAgICAgIHRoaXMuZGlhbENvZGVQcmVmaXggKyB0aGlzLmNvdW50cnkuZGlhbENvZGUgKyAnICcgKyB0aGlzLnBob25lTnVtYmVyLFxyXG4gICAgICAgIG5hdGlvbmFsTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxyXG4gICAgICAgIGlzb0NvZGU6IHRoaXMuY291bnRyeS5pc29Db2RlLFxyXG4gICAgICAgIGRpYWxDb2RlOiB0aGlzLmRpYWxDb2RlUHJlZml4ICsgdGhpcy5jb3VudHJ5LmRpYWxDb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZ29vZ2xlTnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UoXHJcbiAgICAgICAgdGhpcy5waG9uZU51bWJlcixcclxuICAgICAgICB0aGlzLmNvdW50cnkuaXNvQ29kZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNvQ29kZSA9IHRoaXMuY291bnRyeSA/IHRoaXMuY291bnRyeS5pc29Db2RlIDogbnVsbDtcclxuICAgIC8vIGF1dG8gc2VsZWN0IGNvdW50cnkgYmFzZWQgb24gdGhlIGV4dGVuc2lvbiAoYW5kIGFyZWFDb2RlIGlmIG5lZWRlZCkgKGUuZyBzZWxlY3QgQ2FuYWRhIGlmIG51bWJlciBzdGFydHMgd2l0aCArMSA0MTYpXHJcbiAgICBpZiAodGhpcy5lbmFibGVBdXRvQ291bnRyeVNlbGVjdCkge1xyXG4gICAgICBpc29Db2RlID1cclxuICAgICAgICBnb29nbGVOdW1iZXIgJiYgZ29vZ2xlTnVtYmVyLmdldENvdW50cnlDb2RlKClcclxuICAgICAgICAgID8gdGhpcy5nZXRDb3VudHJ5SXNvQ29kZShnb29nbGVOdW1iZXIuZ2V0Q291bnRyeUNvZGUoKSwgZ29vZ2xlTnVtYmVyKVxyXG4gICAgICAgICAgOiB0aGlzLmNvdW50cnkuaXNvQ29kZTtcclxuICAgICAgaWYgKGlzb0NvZGUgJiYgaXNvQ29kZSAhPT0gdGhpcy5jb3VudHJ5Lmlzb0NvZGUpIHtcclxuICAgICAgICBjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChcclxuICAgICAgICAgIChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAobmV3Q291bnRyeSkge1xyXG4gICAgICAgICAgdGhpcy5jb3VudHJ5ID0gbmV3Q291bnRyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlzb0NvZGUgPSBpc29Db2RlID8gaXNvQ29kZSA6IHRoaXMuY291bnRyeSA/IHRoaXMuY291bnRyeS5pc29Db2RlIDogbnVsbDtcclxuXHJcbiAgICBpZiAoIXRoaXMucGhvbmVOdW1iZXIgfHwgIWlzb0NvZGUpIHtcclxuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UobnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbnRlcm5hdGlvbmFsbE5vID0gZ29vZ2xlTnVtYmVyXHJcbiAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxyXG4gICAgICAgIDogJyc7XHJcbiAgICAgIGNvbnN0IG5hdGlvbmFsTm8gPSBnb29nbGVOdW1iZXJcclxuICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxyXG4gICAgICAgIDogJyc7XHJcblxyXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGVybmF0aW9uYWxsTm8pIHtcclxuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgIGUxNjROdW1iZXI6IHRoaXMuZGlhbENvZGVQcmVmaXggKyB0aGlzLmNvdW50cnkuZGlhbENvZGUgKyB0aGlzLnBob25lTnVtYmVyLFxyXG4gICAgICAgIGludGVybmF0aW9uYWxOdW1iZXI6IGludGVybmF0aW9uYWxsTm8sXHJcbiAgICAgICAgbmF0aW9uYWxOdW1iZXI6IG5hdGlvbmFsTm8sXHJcbiAgICAgICAgaXNvQ29kZTogdGhpcy5jb3VudHJ5Lmlzb0NvZGUsXHJcbiAgICAgICAgZGlhbENvZGU6IHRoaXMuZGlhbENvZGVQcmVmaXggKyB0aGlzLmNvdW50cnkuZGlhbENvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25OdW1iZXJLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBjb25zdCBhbGxvd2VkQ2hhcnMgPSAvXlswLTlcXCtcXC1cXChcXClcXC5cXCBdLztcclxuICAgIGNvbnN0IGFsbG93ZWRDdHJsQ2hhcnMgPSAvW2F4Y3ZdLztcclxuICAgIGNvbnN0IGFsbG93ZWRPdGhlcktleXMgPSBbXHJcbiAgICAgICdBcnJvd0xlZnQnLFxyXG4gICAgICAnQXJyb3dVcCcsXHJcbiAgICAgICdBcnJvd1JpZ2h0JyxcclxuICAgICAgJ0Fycm93RG93bicsXHJcbiAgICAgICdIb21lJyxcclxuICAgICAgJ0VuZCcsXHJcbiAgICAgICdJbnNlcnQnLFxyXG4gICAgICAnRGVsZXRlJyxcclxuICAgICAgJ0JhY2tzcGFjZScsXHJcbiAgICAgICdUYWInLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBpc0N0cmxLZXkgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhYWxsb3dlZENoYXJzLnRlc3QoZXZlbnQua2V5KSAmJlxyXG4gICAgICAhKGlzQ3RybEtleSAmJiBhbGxvd2VkQ3RybENoYXJzLnRlc3QoZXZlbnQua2V5KSkgJiZcclxuICAgICAgIWFsbG93ZWRPdGhlcktleXMuaW5jbHVkZXMoZXZlbnQua2V5KVxyXG4gICAgKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbHRlckNvdW50cmllcyh0ZXh0OiBzdHJpbmcpOiBDb3VudHJ5SVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvdW50cmllcy5maWx0ZXIoKGNvdW50cnkpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSB8fFxyXG4gICAgICAgIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xIHx8XHJcbiAgICAgICAgY291bnRyeS5kaWFsQ29kZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcclxuICAgIGNvdW50cnlDb2RlOiBudW1iZXIsXHJcbiAgICBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyXHJcbiAgKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IHJhd051bWJlciA9IChnb29nbGVOdW1iZXIgYXMgYW55KS52YWx1ZXNfWzJdLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3QgY291bnRyaWVzID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKFxyXG4gICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuZGlhbENvZGUgPT09IGNvdW50cnlDb2RlLnRvU3RyaW5nKClcclxuICAgICk7XHJcbiAgICBjb25zdCBtYWluQ291bnRyeSA9IGNvdW50cmllcy5maW5kKFxyXG4gICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuYXJlYUNvZGVzID09PSB1bmRlZmluZWRcclxuICAgICk7XHJcbiAgICBjb25zdCBzZWNvbmRhcnlDb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKFxyXG4gICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuYXJlYUNvZGVzICE9PSB1bmRlZmluZWRcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG1hdGNoZWRDb3VudHJ5ID0gbWFpbkNvdW50cnkgPyBtYWluQ291bnRyeS5pc29Db2RlIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHNlY29uZGFyeUNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICAgIGNvdW50cnkuYXJlYUNvZGVzLmZvckVhY2goKGFyZWFDb2RlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJhd051bWJlci5zdGFydHNXaXRoKGFyZWFDb2RlKSkge1xyXG4gICAgICAgICAgbWF0Y2hlZENvdW50cnkgPSBjb3VudHJ5Lmlzb0NvZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1hdGNoZWRDb3VudHJ5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmZXRjaEFsbENvdW50cmllcygpIHtcclxuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5pb25JbnRsVGVsSW5wdXRTZXJ2aWNlLmdldExpc3RPZkNvdW50cmllcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb3VudHJ5QnlJc29Db2RlKGlzb0NvZGU6IHN0cmluZyk6IENvdW50cnlJIHtcclxuICAgIGZvciAoY29uc3QgY291bnRyeSBvZiB0aGlzLmNvdW50cmllcykge1xyXG4gICAgICBpZiAoY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50cnk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRGlhbENvZGUocGhvbmVOdW1iZXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIHBob25lTnVtYmVyKSB7XHJcbiAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIuc3Vic3RyKHBob25lTnVtYmVyLmluZGV4T2YoJyAnKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb3VudHJ5KGNvdW50cnk6IENvdW50cnlJKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgdGhpcy5jb2RlQ2hhbmdlLmVtaXQodGhpcy5jb3VudHJ5KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UHJlZmVycmVkQ291bnRyaWVzKCk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBwcmVmZXJlZENvdW50cnlJc29Db2RlIG9mIHRoaXMucHJlZmVycmVkQ291bnRyaWVzKSB7XHJcbiAgICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlCeUlzb0NvZGUocHJlZmVyZWRDb3VudHJ5SXNvQ29kZSk7XHJcbiAgICAgIGNvdW50cnkucHJpb3JpdHkgPSBjb3VudHJ5ID8gMSA6IGNvdW50cnkucHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50cmllcy5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLnByaW9yaXR5ID4gYi5wcmlvcml0eSA/IC0xIDogYS5wcmlvcml0eSA8IGIucHJpb3JpdHkgPyAxIDogMFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRzV2l0aCA9IChpbnB1dDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cigwLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2xhc3NlcyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gY2xhc3NMaXN0Lml0ZW0oaSk7XHJcbiAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIHRoaXMuc3RhcnRzV2l0aChpdGVtLCAnbmctJykpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2goYGlvbi0ke2l0ZW0uc3Vic3RyKDMpfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzZXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzZXM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcclxuICAgIFtcclxuICAgICAgJ2lvbi12YWxpZCcsXHJcbiAgICAgICdpb24taW52YWxpZCcsXHJcbiAgICAgICdpb24tdG91Y2hlZCcsXHJcbiAgICAgICdpb24tdW50b3VjaGVkJyxcclxuICAgICAgJ2lvbi1kaXJ0eScsXHJcbiAgICAgICdpb24tcHJpc3RpbmUnLFxyXG4gICAgXS5mb3JFYWNoKChjKSA9PiBjbGFzc0xpc3QucmVtb3ZlKGMpKTtcclxuXHJcbiAgICBjbGFzc2VzLmZvckVhY2goKGMpID0+IGNsYXNzTGlzdC5hZGQoYykpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2V0SW9uaWNDbGFzc2VzID0gKGVsZW1lbnQ6IEVsZW1lbnRSZWYpID0+IHtcclxuICAgIHJhZigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRDbGFzc2VzKGlucHV0KTtcclxuICAgICAgdGhpcy5zZXRDbGFzc2VzKGlucHV0LCBjbGFzc2VzKTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCdpb24taXRlbScpO1xyXG4gICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NlcyhpdGVtLCBjbGFzc2VzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzZXRJdGVtQ2xhc3MgPSAoXHJcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBhZGRDbGFzczogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpdGVtID0gaW5wdXQuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGl0ZW0uY2xhc3NMaXN0O1xyXG4gICAgICBpZiAoYWRkQ2xhc3MpIHtcclxuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiaW9uLWludGwtdGVsLWlucHV0LWNvZGVcIj5cclxuICA8aW9uaWMtc2VsZWN0YWJsZVxyXG4gICAgI2NvZGVTZWxlY3RcclxuICAgIFsobmdNb2RlbCldPVwiY291bnRyeVwiXHJcbiAgICBbY2FuU2VhcmNoXT1cIm1vZGFsQ2FuU2VhcmNoXCJcclxuICAgIGNsb3NlQnV0dG9uVGV4dD1cInt7bW9kYWxDbG9zZVRleHR9fVwiXHJcbiAgICBjbG9zZUJ1dHRvblNsb3Q9XCJ7e21vZGFsQ2xvc2VCdXR0b25TbG90fX1cIlxyXG4gICAgW2Rpc2FibGVkXSA9IFwiZGlzYWJsZWRcIlxyXG4gICAgW2hhc1ZpcnR1YWxTY3JvbGxdPVwidHJ1ZVwiXHJcbiAgICBpdGVtVGV4dEZpZWxkPVwibmFtZVwiXHJcbiAgICBbaXRlbXNdPVwiY291bnRyaWVzXCJcclxuICAgIFtpdGVtSWNvblNsb3RdPVwibW9kYWxJdGVtSWNvblNsb3RcIlxyXG4gICAgaXRlbVZhbHVlRmllbGQ9XCJpc29Db2RlXCJcclxuICAgIG1vZGFsQ3NzQ2xhc3M9XCJpb25pYy10ZWwtaW5wdXQtbW9kYWwge3ttb2RhbENzc0NsYXNzfX1cIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCJcclxuICAgIHNlYXJjaEZhaWxUZXh0PVwie3ttb2RhbFNlYXJjaEZhaWxUZXh0fX1cIlxyXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI9XCJ7e21vZGFsU2VhcmNoUGxhY2Vob2xkZXJ9fVwiXHJcbiAgICBbc2hvdWxkQmFja2Ryb3BDbG9zZV09XCJtb2RhbFNob3VsZEJhY2tkcm9wQ2xvc2VcIlxyXG4gICAgW3Nob3VsZEZvY3VzU2VhcmNoYmFyXT1cIm1vZGFsU2hvdWxkRm9jdXNTZWFyY2hiYXJcIlxyXG4gICAgKG9uQ2hhbmdlKT1cIm9uQ29kZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgIChvbkNsb3NlKT1cIm9uQ29kZUNsb3NlKClcIlxyXG4gICAgKG9uT3Blbik9XCJvbkNvZGVPcGVuKClcIlxyXG4gICAgKG9uU2VhcmNoKT1cIm9uQ29kZVNlYXJjaENvdW50cmllcygkZXZlbnQpXCJcclxuICAgIChvblNlbGVjdCk9XCJvbkNvZGVTZWxlY3QoKVwiXHJcbiAgPlxyXG4gICAgPG5nLXRlbXBsYXRlIGlvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGU+XHJcbiAgICAgIHt7bW9kYWxUaXRsZX19XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlIGlvbmljU2VsZWN0YWJsZVZhbHVlVGVtcGxhdGUgbGV0LWNvdW50cnk9XCJ2YWx1ZVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZpIGZpLXt7Y291bnRyeS5mbGFnQ2xhc3N9fVwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzZXBhcmF0ZURpYWxDb2RlXCI+e3tkaWFsQ29kZVByZWZpeH19e3tjb3VudHJ5LmRpYWxDb2RlfX08L3NwYW4+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlIGlvbmljU2VsZWN0YWJsZUl0ZW1UZW1wbGF0ZSBsZXQtY291bnRyeT1cIml0ZW1cIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmaSBmaS17e2NvdW50cnkuZmxhZ0NsYXNzfX0gaW9uLW1hcmdpbi1lbmRcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpb24tbWFyZ2luLWVuZFwiPnt7Y291bnRyeS5uYW1lfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzZXBhcmF0ZURpYWxDb2RlXCI+e3tkaWFsQ29kZVByZWZpeH19e3tjb3VudHJ5LmRpYWxDb2RlfX08L3NwYW4+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlIGlvbmljU2VsZWN0YWJsZUNsb3NlQnV0dG9uVGVtcGxhdGU+XHJcbiAgICAgIDxpb24taWNvbiBuYW1lPVwiY2xvc2Utb3V0bGluZVwiPjwvaW9uLWljb24+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPCEtLSA8bmctdGVtcGxhdGUgaW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlIGxldC1jb3VudHJ5PVwiaXRlbVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZpIGZpLXt7Y291bnRyeS5mbGFnQ2xhc3N9fVwiPjwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+IC0tPlxyXG4gIDwvaW9uaWMtc2VsZWN0YWJsZT5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiaW9uLWludGwtdGVsLWlucHV0LW51bWJlclwiPlxyXG4gIDxpb24taW5wdXRcclxuICAgICNudW1iZXJJbnB1dFxyXG4gICAgWyhuZ01vZGVsKV09XCJwaG9uZU51bWJlclwiXHJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgW2Rpc2FibGVkXSA9IFwiZGlzYWJsZWRcIlxyXG4gICAgW2F0dHIubWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXHJcbiAgICB0eXBlPVwidGVsXCJcclxuICAgIChpb25CbHVyKT1cIm9uSW9uTnVtYmVyQmx1cigpXCJcclxuICAgIChpb25DaGFuZ2UpPVwib25Jb25OdW1iZXJDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAoaW9uRm9jdXMpPVwib25Jb25OdW1iZXJGb2N1cygpXCJcclxuICAgIChpb25JbnB1dCk9XCJvbklvbk51bWJlcklucHV0KCRldmVudClcIlxyXG4gICAgKGtleWRvd24pPVwib25OdW1iZXJLZXlEb3duKCRldmVudClcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwib25OdW1iZXJDaGFuZ2UoKVwiXHJcbiAgICBwbGFjZWhvbGRlcj1cInt7Y291bnRyeSB8IGNvdW50cnlQbGFjZWhvbGRlcjogaW5wdXRQbGFjZWhvbGRlcjpzZXBhcmF0ZURpYWxDb2RlOmZhbGxiYWNrUGxhY2Vob2xkZXJ9fVwiID5cclxuICA8L2lvbi1pbnB1dD5cclxuPC9kaXY+XHJcbiJdfQ==