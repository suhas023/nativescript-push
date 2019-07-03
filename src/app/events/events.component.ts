import { Component, OnInit } from '@angular/core';
import { cleverTap } from "nativescript-clevertap";

@Component({
  selector: 'ns-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  moduleId: module.id,
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("events component loaded");
  }

  onTapProductSearch() {
    cleverTap.pushEvent("product_search", {
      search: "Marax"
    });
    console.log("event triggered");
    alert("Product seaarched");
  }

  onTapPromotionViewed() {
    cleverTap.pushEvent("promotion_viewed", {
      promotion_id: "123"
    });
    console.log("event triggered");
    alert("promotion seaarched");
  }

  onTapPromotionClicked() {
    cleverTap.pushEvent("promotion_clicked", {
      promotion_id: "123"
    });
    console.log("event triggered");
  }

  onTapProductViewed() {
    cleverTap.pushEvent("product_viewed", {
      price: "123",
      quantity: "2"
    });
  }

  onTapCheckoutStarted() {
    cleverTap.pushEvent("checkout_Started", {
      value: "123",
      discount: "2",
      coupon: "2"
    });
  }

  onTapCheckoutStepViewed() {
    cleverTap.pushEvent("checkout_step_viewed", {
      payment_method: "MONEYY",
    });
  }

  onTapCheckoutStepCompleted() {
    cleverTap.pushEvent("checkout_step_completed", {
      payment_method: "MONEYY",
    });
  }

  onTapOrderCompleted() {
    cleverTap.pushEvent("order_completed", {
      value: "23",
      discount: "23",
      coupon: "23",
    });
  }

  onTapOrderCancelled() {
    cleverTap.pushEvent("order_cancelled", {
      value: "23",
      discount: "23",
      coupon: "23",
    });
  }

  onTapCouponEntered() {
    cleverTap.pushEvent("coupon_entered", {
      cart_id: "23",
      coupon: "23",
    });
  }

  onTapCouponApplied() {
    cleverTap.pushEvent("coupon_applied", {
      coupon_name: "23",
      discount: "23",
      coupon_id: "23"
    });
  }

  onTapCouponDenied() {
    cleverTap.pushEvent("coupon_denied", {
      coupon_name: "23",
      reason: "23",
      coupon_id: "23"
    });
  }

  onTapProductReviewed() {
    cleverTap.pushEvent("product_reviewed", {
      rating: "23"
    });
  }
}
