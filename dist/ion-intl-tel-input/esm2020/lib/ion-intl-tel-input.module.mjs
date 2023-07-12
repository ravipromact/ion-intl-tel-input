import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { CountryPlaceholder } from './pipes/country-placeholder';
import { IonIntlTelInputValidatorDirective } from './ion-intl-tel-input.directive';
import { IonIntlTelInputComponent } from './ion-intl-tel-input/ion-intl-tel-input.component';
import { IonIntlTelInputService } from './ion-intl-tel-input.service';
import * as i0 from "@angular/core";
export class IonIntlTelInputModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQTZCLGlDQUFpQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBc0J0RSxNQUFNLE9BQU8scUJBQXFCOzt5SkFBckIscUJBQXFCOzBKQUFyQixxQkFBcUIsaUJBbEI5QixrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLHdCQUF3QixhQUd4QixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxxQkFBcUIsYUFHckIsd0JBQXdCO1FBQ3hCLGlDQUFpQzswSkFNeEIscUJBQXFCLGFBSnJCO1FBQ1Qsc0JBQXNCO0tBQ3ZCLFlBWlE7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLFdBQVc7WUFDWCxxQkFBcUI7U0FDdEI7NEZBU1UscUJBQXFCO2tCQXBCakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixpQ0FBaUM7d0JBQ2pDLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIsaUNBQWlDO3FCQUNsQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1Qsc0JBQXNCO3FCQUN2QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZU1vZHVsZSB9IGZyb20gJ2lvbmljLXNlbGVjdGFibGUnO1xyXG5cclxuaW1wb3J0IHsgQ291bnRyeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi9waXBlcy9jb3VudHJ5LXBsYWNlaG9sZGVyJztcclxuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0VmFsaWRhdG9ycywgSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pb24taW50bC10ZWwtaW5wdXQvaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dFNlcnZpY2UgfSBmcm9tICcuL2lvbi1pbnRsLXRlbC1pbnB1dC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb3VudHJ5UGxhY2Vob2xkZXIsXHJcbiAgICBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBJb25pY1NlbGVjdGFibGVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIElvbkludGxUZWxJbnB1dENvbXBvbmVudCxcclxuICAgIElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBJb25JbnRsVGVsSW5wdXRTZXJ2aWNlXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dE1vZHVsZSB7IH1cclxuIl19