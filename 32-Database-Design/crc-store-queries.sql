SELECT crc_order_items.order_item_id, crc_orders.order_number, crc_products.product_name, crc_products.product_id
FROM crc_order_items
JOIN crc_products
  ON crc_order_items.product_id = crc_products.product_id
JOIN crc_orders
  ON crc_order_items.order_id = crc_orders.order_id
GROUP BY crc_orders.order_number, crc_order_items.order_item_id, crc_products.product_name,crc_products.product_id
ORDER BY crc_order_items.order_item_id ASC
LIMIT 40;
