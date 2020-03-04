import { ArfuaService } from "./core/arfua.service";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
    public title = "arufa-module";

    constructor(public arufaService: ArfuaService) {}

    public ngOnInit() {
        this.arufaService.init();
    }

    public ngOnDestroy() {
        this.arufaService.destroy();
    }
}