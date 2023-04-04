docker network create microcommerce

docker run -d micro_products -e POSTGRES_PASSWORD=secretproducts -p 5433:5432 --network microcommerce postgres