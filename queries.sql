-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT C.CategoryName, P.ProductName
FROM "Category" AS C
JOIN "Product" AS P
ON C.Id = P.CategoryId

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT O."Id", S."CompanyName"
FROM "Order" AS O
JOIN "Shipper" AS S
ON S."Id" = O."ShipVia"
WHERE "OrderDate" < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT P."ProductName" AS "Product Name", O."Quantity" AS "Product Quantity"
FROM "Product" AS P
JOIN "OrderDetail" AS O
ON O."ProductId" = P."Id"
WHERE O."OrderId" = 10251
ORDER BY P."ProductName";

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT O."Id", C."CompanyName", E."LastName"
FROM "Customer" AS C
JOIN "Order" AS O ON C.Id = O.CustomerId
JOIN "Employee" AS E ON E.Id = O.EmployeeId;