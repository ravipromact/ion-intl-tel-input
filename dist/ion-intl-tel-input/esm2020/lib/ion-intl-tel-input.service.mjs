import { Injectable } from '@angular/core';
import { countries } from './data/countries';
import * as i0 from "@angular/core";
export class IonIntlTelInputService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24taW50bC10ZWwtaW5wdXQvc3JjL2xpYi9pb24taW50bC10ZWwtaW5wdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQztRQUZBLGdCQUFXLEdBQWUsU0FBUyxDQUFDO0lBRXBCLENBQUM7SUFFakIsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzswSkFSVSxzQkFBc0I7OEpBQXRCLHNCQUFzQixjQUZyQixNQUFNOzRGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb3VudHJ5SSB9IGZyb20gJy4vbW9kZWxzL2NvdW50cnkubW9kZWwnO1xyXG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tICcuL2RhdGEvY291bnRyaWVzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFNlcnZpY2Uge1xyXG5cclxuICBjb3VudHJ5TGlzdDogQ291bnRyeUlbXSA9IGNvdW50cmllcztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2V0TGlzdE9mQ291bnRyaWVzKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb3VudHJ5TGlzdDtcclxuICB9XHJcbn1cclxuIl19