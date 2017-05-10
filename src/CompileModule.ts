
import { CompileService } from "./CompileService";
import { CompileAttribute} from "./CompileAttribute";

import { NgModule } from '@angular/core';

import { Compiler } from '@angular/core';
import {JitCompilerFactory} from '@angular/compiler';
export function createJitCompiler () {
    return new JitCompilerFactory([{useDebug: false, useJit: true}]).createCompiler();
}


// exports = component
@NgModule({
    imports: [
    ],
    declarations: [
        CompileAttribute,
    ],
    providers: [
        CompileService,
        { provide: Compiler, useFactory:  createJitCompiler},
    ],
    exports: [
        CompileAttribute,
    ],
    entryComponents: [

    ]
})
export class CompileModule {
}
