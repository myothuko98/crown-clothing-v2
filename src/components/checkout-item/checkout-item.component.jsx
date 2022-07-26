import { useContext } from "react";
import "./checkout-item.styles.jsx";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItem));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItem));
  };
  const addItemToCartHandler = () => {
    dispatch(addItemToCart(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan as="span">{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>$ {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
