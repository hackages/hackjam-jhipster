import { NgModule } from '@angular/core';

import { HackjamJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HackjamJhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HackjamJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HackjamJhipsterSharedCommonModule {}
