CREATE TRIGGER update_customers_log
BEFORE UPDATE ON customers_log
FOR EACH ROW
EXECUTE PROCEDURE log_customers_change();

CREATE TRIGGER customers_insert
BEFORE INSERT ON customers_log
FOR EACH STATEMENT
EXECUTE PROCEDURE log_customers_change();


INSERT INTO customers
VALUES ('Jeffrey','Cook','Jeffrey.Cook@example.com','202-555-0398','Jersey city','New Jersey',66);
INSERT INTO customers
VALUES ('Audrey','Sook','audrey.sook@example.com','202-555-0398','Carson city','New Hampshire',36);
INSERT INTO customers
VALUES ('Rey','Rodrigues','rey.ro@example.com','202-555-0398','Mex city','New Mexico',46);