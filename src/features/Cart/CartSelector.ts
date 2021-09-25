import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state:any) => state?.cart?.cartItems;

export const cartItemsCountSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems?.reduce((count:number, item:any) => count + item?.quantity, 0)
);

export const cartItemsTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems?.reduce((total:number, item:any) => total + item?.quantity * item?.price, 0)
);
