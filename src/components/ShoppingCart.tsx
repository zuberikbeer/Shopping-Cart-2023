import React, { useEffect, useState } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import "./ShoppingCart.css";

type ShoppingCartProps = {
  isOpen: boolean;
};

type CartItemData = {
  id: number;
  quantity: number;
};

const TAX_RATE = 0.08; // 8% sales tax rate.

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, handleCheckout } = useShoppingCart();

  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    setHasItems(cartItems.length > 0);
  }, [cartItems]);

  const subtotal = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const salesTax = subtotal * TAX_RATE;
  const total = subtotal + salesTax;

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {hasItems ? (
          <Stack gap={3}>
            {cartItems.map((item: CartItemData) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Stack gap={3} className="cart-summary">
              <div className="bg-light border summary-item">
                <span>Item Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="bg-light border summary-item">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="bg-light border summary-item">
                <span>Estimated Sales Tax</span>
                <span>{formatCurrency(salesTax)}</span>
              </div>
            </Stack>
            <div className="ms-auto fw-bold fs-5">
              Total {formatCurrency(total)}
            </div>
            <Button onClick={handleCheckout}>Checkout</Button>
          </Stack>
        ) : (
          <div>
            <p>
              Your cart is empty. Why did you have to remove everything from the
              cart? I highly recommend you add something back.
            </p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
