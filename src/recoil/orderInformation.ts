import { selector } from "recoil";
import { cartItems } from "./cartItems";
import { cartItemQuantity } from "./cartItemQuantity";
import { selectedCartItems } from "./selectedCardItems";

import { CART_FEE } from "@/constants/cart";

export const totalOrderPriceSelector = selector({
  key: "totalOrderPriceSelector",
  get: ({ get }) => {
    const cartItemList = get(cartItems);

    const totalPrice = [...cartItemList].reduce((accPrice, currItem) => {
      const currentQuantity = get(cartItemQuantity(currItem.id));
      const isSelected = get(selectedCartItems(currItem.id));

      accPrice += isSelected ? currentQuantity * currItem.product.price : 0;

      return accPrice;
    }, 0);

    return totalPrice;
  },
});

export const shippingFeeSelector = selector({
  key: "shippingFeeSelector",
  get: ({ get }) => {
    const totalOrderPrice = get(totalOrderPriceSelector);
    return totalOrderPrice >= CART_FEE.shippingFeeThreshold
      ? 0
      : CART_FEE.shippingFee;
  },
});

export const totalItemLengthSelector = selector({
  key: "totalItemLengthSelector",
  get: ({ get }) => {
    const cartItemList = get(cartItems);

    return cartItemList.length;
  },
});

export const finalOrderItemCountSelector = selector({
  key: "finalOrderItemCountSelector",

  get: ({ get }) => {
    const cardItemList = get(cartItems);

    const finalOrderItemCount = cardItemList.reduce(
      (acc, cur) => {
        const itemQuantity = get(cartItemQuantity(cur.id));
        const isSelected = get(selectedCartItems(cur.id));

        return {
          typeLength: isSelected ? (acc.typeLength += 1) : acc.typeLength,
          totalCount: isSelected
            ? (acc.totalCount += itemQuantity)
            : acc.totalCount,
        };
      },
      {
        typeLength: 0,
        totalCount: 0,
      }
    );

    return finalOrderItemCount;
  },
});
