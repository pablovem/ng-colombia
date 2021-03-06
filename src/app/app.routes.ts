import { PaymentPendingComponent } from './payment-pending/payment-pending.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PricingComponent } from './pricing/pricing.component';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PurchaseErrorComponent } from './purchase-error/purchase-error.component';
import { PurchaseformComponent } from './purchaseform/purchaseform.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

	{ path: '', component: MainPageComponent },
	{ path: 'purchase', component: PurchaseformComponent },
	{ path: 'response', component: PaymentResponseComponent },
	{ path: 'pending', component: PaymentPendingComponent },
	{ path: 'purchase-error', component: PurchaseErrorComponent },
	{ path: 'confirmation', component: ConfirmationComponent },
	{ path: '**', component: MainPageComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class FeatureRoutingModule { }
