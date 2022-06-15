import express from "express";
import StoreOrder from "../../infrastructure/OrderBC/StoreOrder/StoreOrderModel";
import StoreOrderService from "../../domain/OrderBC/StoreOrder/StoreOrderService";
import OrderService from "../../domain/OrderBC/OrderService";

const router = express.Router();

router.post("/create-order", async (req, res) => {
  const data = req.body;
  const result = await OrderService.createAnOrder(data);

  res.status(result.statusCode).json(result);
});

router.get("/pending-order", async (req, res) => {
  const result = await StoreOrderService.getPendingOrder();

  res.status(result.statusCode).json(result);
});

router.post("/create-storeorder", async (req, res) => {
  const result = await StoreOrder.create([
    {
      store_id: "6283b28f3fc679d539d9f3f1",
      ancestor_order: "6287d5837f894b147b8d6056",
      status: "pending",
      items: [
        {
          product_id: "62879482e5fc83d4bb416ec0",
          product_variation_id: "62879482e5fc83d4bb416ec9",
          quantity: 1,
          price: 480000,
          discount_id: null,
          total: 480000,
        },
      ],
    },
    {
      store_id: "6283b03d3fc679d539d9f3eb",
      ancestor_order: "6287d5837f894b147b8d6056",
      status: "pending",
      items: [
        {
          product_id: "6287869fe5fc83d4bb416eaa",
          product_variation_id: "6287869fe5fc83d4bb416ebe",
          quantity: 1,
          price: 3990000,
          discount_id: "6283a996ee556881d3d58763",
          total: 3192000,
        },
      ],
    },
    {
      store_id: "6283b03d3fc679d539d9f3eb",
      ancestor_order: "6287db387f894b147b8d6064",
      status: "pending",
      items: [
        {
          product_id: "62877c66e5fc83d4bb416dca",
          product_variation_id: "62877c66e5fc83d4bb416dea",
          quantity: 1,
          price: 30990000,
          discount_id: "6283ab1cee556881d3d58769",
          total: 21693000,
        },
        {
          product_id: "6287869fe5fc83d4bb416eaa",
          product_variation_id: "6287869fe5fc83d4bb416ebe",
          quantity: 1,
          price: 3990000,
          discount_id: null,
          total: 3990000,
        },
      ],
    },
    {
      store_id: "6283b28f3fc679d539d9f3f1",
      ancestor_order: "6287db387f894b147b8d6064",
      status: "pending",
      items: [
        {
          product_id: "62879482e5fc83d4bb416ec0",
          product_variation_id: "62879482e5fc83d4bb416ec9",
          quantity: 1,
          price: 480000,
          discount_id: null,
          total: 480000,
        },
      ],
    },
  ]);

  res.status(200).json(result);
});

export default router;
