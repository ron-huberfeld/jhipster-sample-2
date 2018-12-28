import { NgModule } from '@angular/core';

import { JhipsterSample2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterSample2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterSample2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSample2SharedCommonModule {}
