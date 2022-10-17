CREATE TABLE crc_addresses
(
 address_id     int NOT NULL,
 address_line_1 varchar(128 NOT NULL,
 address_line_2 varchar(128) NULL,
 city           varchar(50) NOT NULL,
 country        varchar(50) NOT NULL,
 PRIMARY KEY ( address_id )
);

CREATE TABLE crc_orders
(
 order_id        int NOT NULL,
 order_number    int NOT NULL,
 order_date      date NOT NULL,
 shipping_method varchar(50) NOT NULL,
 PRIMARY KEY ( order_id )
);

CREATE TABLE crc_users
(
 user_id  int NOT NULL,
 email    varchar(100) NOT NULL,
 order_id int NOT NULL,
 password varchar(128) NOT NULL,
 PRIMARY KEY ( user_id ),
 FOREIGN KEY ( order_id ) REFERENCES crc_orders ( order_id )
);

CREATE TABLE crc_users_addresses
(
 address_id int NOT NULL,
 user_id    int NOT NULL,
 PRIMARY KEY ( address_id, user_id ),
 FOREIGN KEY ( address_id ) REFERENCES crc_addresses ( address_id ),
 FOREIGN KEY ( user_id ) REFERENCES crc_users ( user_id )
);



CREATE TABLE crc_product_category (
    category_id integer PRIMARY KEY,
    category_name varchar(50),
    description varchar(100)
);

CREATE TABLE crc_product_discount (
    discount_id integer PRIMARY KEY,
    discount_name varchar(50),
    percentge decimal,
    is_active boolean
);

CREATE TABLE crc_products
(
 product_id          int NOT NULL,
 product_name        varchar(50) NOT NULL,
 discount_id         int NOT NULL,
 category_id         int NOT NULL,
 description         varchar(200) NOT NULL,
 product_image       varchar(200) NOT NULL,
 inventory           int NOT NULL,
 retail_price        money NOT NULL,
 promo_price         money NOT NULL,
 PRIMARY KEY ( product_id ),
 FOREIGN KEY ( category_id ) REFERENCES crc_product_category ( category_id ),
 FOREIGN KEY ( discount_id ) REFERENCES crc_product_discount ( discount_id )
);

CREATE TABLE crc_order_items
(
 order_item_id int NOT NULL,
 quantity      int NOT NULL,
 product_id    int NOT NULL,
 order_id      int NOT NULL,
 item_subtotal money NOT NULL,
 PRIMARY KEY ( order_item_id ),
 UNIQUE ( product_id ),
 FOREIGN KEY ( order_id ) REFERENCES crc_orders ( order_id ),
 FOREIGN KEY ( product_id ) REFERENCES crc_products ( product_id )
);