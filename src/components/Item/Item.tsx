import React from "react";

import {
  QuantityMinusButton,
  QuantityPlusButton,
} from "../_common/QuantityButton/QuantityButton";

import Caption from "../_common/Caption/Caption";
import Title from "../_common/Title/Title";

import LoadingSpinner from "@/assets/loading-spinner.svg?react";
import Styled from "./Item.style";

const ItemHeader = ({ children }: React.PropsWithChildren) => {
  return <Styled.ItemHeader>{children}</Styled.ItemHeader>;
};

const ItemBody = ({ children }: React.PropsWithChildren) => {
  return <Styled.ItemBody>{children}</Styled.ItemBody>;
};

const ItemImage: React.FC<{ path: string }> = ({ path }) => {
  return <Styled.ItemImageBox $path={path} />;
};

const ItemDetail = ({ children }: React.PropsWithChildren) => {
  return <Styled.ItemDetailWrapper>{children}</Styled.ItemDetailWrapper>;
};

const ItemPriceTag: React.FC<{ itemName: string; price: number }> = ({
  itemName,
  price,
}) => {
  return (
    <Styled.ItemPriceTagWrapper>
      <Caption text={itemName} />
      <Title text={`${price.toLocaleString()}원`} />
    </Styled.ItemPriceTagWrapper>
  );
};

const ItemQuantityWithButton: React.FC<{
  quantity: number;
  isQuantityUpdating: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
}> = ({ quantity, isQuantityUpdating, onIncrease, onDecrease }) => {
  return (
    <Styled.ItemQuantityUpdateButtonWrapper>
      <QuantityMinusButton onClick={onDecrease} disabled={isQuantityUpdating} />
      {isQuantityUpdating ? (
        <LoadingSpinner />
      ) : (
        <Styled.ItemQuantity>{quantity}</Styled.ItemQuantity>
      )}
      <QuantityPlusButton onClick={onIncrease} disabled={isQuantityUpdating} />
    </Styled.ItemQuantityUpdateButtonWrapper>
  );
};

const Item = ({ children }: React.PropsWithChildren) => {
  return <Styled.ItemWrapper>{children}</Styled.ItemWrapper>;
};

Item.ItemHeader = ItemHeader;
Item.ItemBody = ItemBody;
Item.ItemImage = ItemImage;
Item.ItemPriceTag = ItemPriceTag;
Item.ItemDetail = ItemDetail;
Item.ItemQuantityWithButton = ItemQuantityWithButton;

export default Item;
