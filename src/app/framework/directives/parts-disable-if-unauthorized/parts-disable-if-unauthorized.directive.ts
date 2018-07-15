import { OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { ActionCode } from '../../models/authorization.types';

@Directive({
    selector: '[pnDisableIfUnauthorized]'
})
export class PartsDisableIfUnauthorizedDirective implements OnInit {
    @Input('pnDisableIfUnauthorized') permission: ActionCode;

    constructor(private el: ElementRef, private authorizationService: AuthorizationService) {
    }

    ngOnInit() {
        if (!this.authorizationService.hasPermission(this.permission)) {
            this.el.nativeElement.disabled = true;
        }
    }
}