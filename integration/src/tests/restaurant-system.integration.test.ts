import { beforeEach, describe, expect, test } from "vitest";
import { ICustomer, IInvoice, IOrder, IProduct } from "../types";
import { RestaurantSystem } from "../RestaurantService";

describe('Full order process', () => {
  let system: RestaurantSystem;

  let customer: ICustomer;
  let apple: IProduct;
  let burger: IProduct;

  beforeEach(() => {
    system = new RestaurantSystem();

    customer = system.getCustomerService().createCustomer({
      name: 'alice',
      email: 'alice.doe@test.com',
      address: '123 Sesame Street',
      phone: '0123456789',
    });

    apple = system.getProductService().createProduct({
      name: 'apple',
      description: 'A fruit',
      price: 10,
      category: 'dessert',
      available: true,
      preparationTimeMinutes: 1,
    })
    burger = system.getProductService().createProduct({
      name: 'Burger',
      description: 'A tasty dish',
      price: 23,
      category: 'main',
      available: true,
      preparationTimeMinutes: 10,
    })
  });

  test('Full order process succeed', () => {
    // Make order
    const orderItems = [
      { productId: apple.id, quantity: 1 },
      { productId: burger.id, quantity: 2 }
    ];
    const result = system.processOrder(customer.id, orderItems);

    // Assert order and tab to be created
    expect(result.order).not.toBeNull();
    expect(result.invoice).not.toBeNull();

    const order = result.order as IOrder;
    const invoice = result.invoice as IInvoice;

    // Check order details
    expect(order.customerId).toBe(customer.id);
    expect(order.status).toBe('pending');
    expect(order.items.length).toBe(2);
    expect(order.totalAmount).toBe(apple.price + (burger.price * 2));

    // Check tab details
    expect(invoice.orderId).toBe(order.id);
    expect(invoice.customerId).toBe(customer.id);
    expect(invoice.totalAmount).toBe(order.totalAmount);
    expect(invoice.tax).toBe(order.totalAmount * 0.1);
    expect(invoice.paid).toBe(false);

    // Pay the tab
    const paymentResult = system.getInvoiceService().payInvoice(invoice.id, 'credit_card');
    expect(paymentResult).toBe(true);

    // Check tab status
    const updatedInvoice = system.getInvoiceService().getInvoice(invoice.id);
    expect(updatedInvoice?.paid).toBe(true);
    expect(updatedInvoice?.paymentMethod).toBe('credit_card');
    expect(updatedInvoice?.paidAt).toBeDefined();

    // Check reward points (Total tab 56, 1 point for 10 spent so 5 points earned)
    const updatedCustomer = system.getCustomerService().getCustomer(customer.id);
    expect(updatedCustomer?.loyaltyPoints).toBe(5);
  });


  test('Creating order fails if a product is unavailable', () => {
    // make apple unavailable
    system.getProductService().updateProductAvailability(apple.id, false)

    // create order
    const orderItems = [
      { productId: apple.id, quantity: 1 },
      { productId: burger.id, quantity: 2 }
    ];
    const result = system.processOrder(customer.id, orderItems);

    expect(result.order).toBe(null);
    expect(result.invoice).toBe(null);

  });

  test('Order still exists after product availability is changed', () => {
    // create order
    const orderItems = [
      { productId: apple.id, quantity: 1 }
    ];
    const result = system.processOrder(customer.id, orderItems);

    system.getProductService().updateProductAvailability(apple.id, false)

    expect(result.order).toBeDefined;
    expect(result.order).toBeDefined;
  });

  test('Default order status is "pending"', () => {
    const orderItems = [
      { productId: apple.id, quantity: 1 },
    ];
    const result = system.processOrder(customer.id, orderItems);
    const order = result.order;
    expect(result.order).toBeDefined;
    expect(order?.status).toBe('pending')

  });

  test('Manually updates order status', () => {
    const orderItems = [
      { productId: apple.id, quantity: 1 }
    ];
    const result = system.processOrder(customer.id, orderItems);
    const order = result.order;
    expect(result.order).toBeDefined;

    system.getOrderService().updateOrderStatus(order!.id, 'ready');
    expect(order?.status).toBe('ready')
  });


})