drop table watches;

CREATE DATABASE watchstore;


create table brand(
	brand_id varchar(6) primary key,
	brand_name varchar(255)

);
insert into brand(brand_id, brand_name) values ('cas', 'Casio');
insert into brand(brand_id, brand_name) values ('rol', 'Rolex');

create table model(
	model_id varchar(6) primary key,
	model_name varchar(255),
	brand_id varchar(6),
	constraint fk_brand foreign key (brand_id) references brand(brand_id)
	
);
insert into model(model_id, model_name, brand_id) values('1', 'model 1', 'cas');
insert into model(model_id, model_name, brand_id) values('2', 'model 2', 'cas');
insert into model(model_id, model_name, brand_id) values('3', 'model 3', 'cas');
insert into model(model_id, model_name, brand_id) values('a', 'model a', 'rol');
insert into model(model_id, model_name, brand_id) values('b', 'model b', 'rol');
insert into model(model_id, model_name, brand_id) values('c', 'model c', 'rol');
insert into model(model_id, model_name, brand_id) values('d', 'model d', 'rol');





CREATE TABLE watches(
    watch_serial SERIAL PRIMARY KEY,
    year_created TIMESTAMP,
    water_resit VARCHAR(255),
    color VARCHAR(255),
    size VARCHAR(255),
    quantity INTEGER,
    review INTEGER,
    model_id VARCHAR(6),
    brand_id VARCHAR(6),
	constraint fk_model foreign key (model_id) references model(model_id),
	constraint fk_brand foreign key (brand_id) references brand(brand_id)
	
);

insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0001','01-01-2015','30ATM','red','40x40mm',4,5,'1','cas');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0002','01-01-2013','30ATM','blue','40x50mm',440,2,'2','cas');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0003','01-01-2016','30ATM','red','40x40mm',132,4,'3','cas');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0004','01-01-2013','30ATM','yellow','20x40mm',420,5,'3','cas');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0005','01-01-2018','30ATM','teal','40x30mm',10,5,'a','rol');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0006','01-01-2019','30ATM','white','40x40mm',40,3,'b','rol');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0007','01-01-2012','30ATM','white','40x70mm',450,2,'c','rol');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0008','01-01-2010','30ATM','black','40x20mm',30,5,'d','rol');
insert into watches(watch_serial, year_created, water_resit, color, size, quantity, review, model_id, brand_id) values('0009','01-01-2011','30ATM','red','40x45mm',20,1,'d','rol');

--delete brand

-- add brand
insert into brand(brand_id, brand_name) values ('cas', 'Casio');
