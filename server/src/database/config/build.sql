BEGIN;
DROP TABLE IF EXISTS users,parcel,route CASCADE;


CREATE TABLE users(
id SERIAL PRIMARY KEY,
phoneNumber text UNIQUE NOT NULL,
name VARCHAR(400) NOT NULL,
password VARCHAR (400) NOT NULL,
lng FLOAT NOT NULL,
lat FLOAT NOT NULL,
image TEXT NOT NULL,
isSeller BOOLEAN 
);

CREATE TABLE parcel(
id SERIAL PRIMARY KEY,
name VARCHAR(400) NOT NULL,   
deliveryPrice FLOAT,
price FLOAT,
status VARCHAR(200),
client_number text REFERENCES users(phoneNumber) ON DELETE CASCADE ON UPDATE CASCADE,
seller_number text REFERENCES users(phoneNumber) ON DELETE CASCADE ON UPDATE CASCADE  
);

CREATE TABLE route(
id SERIAL PRIMARY KEY,
distance FLOAT,
time text,
coordinates JSON,
parcel_id INT REFERENCES parcel(id) ON DELETE CASCADE ON UPDATE CASCADE    
);

COMMIT;