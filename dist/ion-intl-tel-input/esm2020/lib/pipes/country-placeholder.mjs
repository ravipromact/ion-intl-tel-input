import { Pipe } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import * as i0 from "@angular/core";
export class CountryPlaceholder {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL3BpcGVzL2NvdW50cnktcGxhY2Vob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUkzRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxPQUFpQixFQUFFLGdCQUF3QixFQUFFLGdCQUF5QixFQUFFLG1CQUEyQjtRQUMzRyxJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsT0FBTyxnQkFBZ0IsQ0FBQztTQUN6QjtRQUVELE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxJQUFJO1lBQ0YsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25ILElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3BCLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtxQkFBTTtvQkFDTCxPQUFPLFdBQVcsQ0FBQztpQkFDcEI7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLG1CQUFtQixDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7c0pBbkJVLGtCQUFrQjtvSkFBbEIsa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBRDlCLElBQUk7bUJBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBob25lTnVtYmVyRm9ybWF0LCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5pbXBvcnQgeyBDb3VudHJ5SSB9IGZyb20gJy4vLi4vbW9kZWxzL2NvdW50cnkubW9kZWwnO1xyXG5cclxuQFBpcGUoe25hbWU6ICdjb3VudHJ5UGxhY2Vob2xkZXInfSlcclxuZXhwb3J0IGNsYXNzIENvdW50cnlQbGFjZWhvbGRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShjb3VudHJ5OiBDb3VudHJ5SSwgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nLCBzZXBhcmF0ZURpYWxDb2RlOiBib29sZWFuLCBmYWxsYmFja1BsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGlucHV0UGxhY2Vob2xkZXIgJiYgaW5wdXRQbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dFBsYWNlaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBob25lVXRpbCA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBwaG9uZVV0aWwuZm9ybWF0KHBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnkuaXNvQ29kZSksIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpO1xyXG4gICAgICBpZiAocGxhY2Vob2xkZXIpIHtcclxuICAgICAgICBpZiAoc2VwYXJhdGVEaWFsQ29kZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyLnN1YnN0cihwbGFjZWhvbGRlci5pbmRleE9mKCcgJykgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsbGJhY2tQbGFjZWhvbGRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19