CREATE table users (
	id  SERIAL PRIMARY KEY NOT NULL,
    username varchar(100) not null,
    password varchar(100) not null,
    role varchar(100) not null,
    activate BOOLEAN NOT NULL,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    department varchar(100) not null,
    address varchar(100) not null,
    phone varchar(100) not null
);

CREATE table request (
	id  SERIAL PRIMARY KEY NOT NULL,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    income int not null,
    not_job int,
    brothers_same_city int,
    brothers_another_city int,
    year_home int,
    year_study int,
    department varchar(100) not null,
    final_point int,
    approve BOOLEAN NOT NULL
);
