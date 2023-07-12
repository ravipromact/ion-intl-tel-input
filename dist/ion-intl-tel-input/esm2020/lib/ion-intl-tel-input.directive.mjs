import { Directive } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
import * as i0 from "@angular/core";
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
export class IonIntlTelInputValidators {
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
export class IonIntlTelInputValidatorDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBRUwsYUFBYSxHQUtkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUNLO0FBRUwsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQXdCO1FBQ25DLE1BQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksV0FBd0IsQ0FBQztRQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSTtZQUNGLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3RCLENBQUM7U0FDSDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsSUFDRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FDbkQsV0FBVyxFQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUN0QixFQUNEO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7Q0FDRjtBQWFELE1BQU0sT0FBTyxpQ0FBaUM7SUFDNUMsUUFBUSxDQUFDLE9BQXdCO1FBQy9CLE9BQU8seUJBQXlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7O3FLQUhVLGlDQUFpQzt5SkFBakMsaUNBQWlDLGlEQVJqQztRQUNUO1lBQ0UsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7NEZBRVUsaUNBQWlDO2tCQVg3QyxTQUFTO21CQUFDO29CQUNULCtDQUErQztvQkFDL0MsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLG1DQUFtQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBWYWxpZGF0b3JGbixcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIFZhbGlkYXRvcixcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQaG9uZU51bWJlciwgUGhvbmVOdW1iZXJVdGlsIH0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcclxuXHJcbi8qIGNvbnN0IHZhbGlkYXRlSW5wdXQ6IFZhbGlkYXRvckZuID0gKFxyXG4gIGNvbnRyb2w6IEZvcm1Hcm91cFxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSB7IGluVmFsaWQ6IHRydWUgfTtcclxuICBjb25zdCBpc1JlcXVpcmVkID0gY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnMucmVxdWlyZWQ7XHJcbiAgbGV0IHBob25lTnVtYmVyOiBQaG9uZU51bWJlcjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXHJcbiAgICAgIGNvbnRyb2wudmFsdWUubnVtYmVyLFxyXG4gICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKCFpc1JlcXVpcmVkKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjb250cm9sLnZhbHVlKSB7XHJcbiAgICBpZiAoIXBob25lTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcclxuICAgICAgICAgIHBob25lTnVtYmVyLFxyXG4gICAgICAgICAgY29udHJvbC52YWx1ZS5pc29Db2RlXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuO1xyXG59OyAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMge1xyXG4gIHN0YXRpYyBwaG9uZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvciA9IHsgcGhvbmU6IHRydWUgfTtcclxuICAgIGxldCBwaG9uZU51bWJlcjogUGhvbmVOdW1iZXI7XHJcblxyXG4gICAgaWYgKCFjb250cm9sLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBwaG9uZU51bWJlciA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLnBhcnNlKFxyXG4gICAgICAgIGNvbnRyb2wudmFsdWUubmF0aW9uYWxOdW1iZXIsXHJcbiAgICAgICAgY29udHJvbC52YWx1ZS5pc29Db2RlXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBob25lTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcclxuICAgICAgICAgIHBob25lTnVtYmVyLFxyXG4gICAgICAgICAgY29udHJvbC52YWx1ZS5pc29Db2RlXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbaW9uSW50bFRlbElucHV0VmFsaWRdJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JzLnBob25lKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG4iXX0=