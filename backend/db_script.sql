CREATE DATABASE citybikeapp;

USE citybikeapp;

CREATE TABLE journeys (
    journey_id INT PRIMARY KEY AUTO_INCREMENT,
    departure_time DATETIME,
    return_time DATETIME,
    departure_station_id VARCHAR(3) NOT NULL,
    departure_station_name VARCHAR(50) NOT NULL,
    return_station_id VARCHAR(3) NOT NULL,
    return_station_name VARCHAR(50) NOT NULL,
    distance_meters INT NOT NULL,
    duration_seconds INT NOT NULL
);

CREATE TABLE stations (
    fid INT PRIMARY KEY AUTO_INCREMENT,
    id INT NOT NULL,
    name_finnish VARCHAR(50),
    name_swedish VARCHAR(50),
    name_english VARCHAR(50),
    address_finnish VARCHAR(50),
    address_swedish VARCHAR(50),
    city_finnish VARCHAR(50),
    city_swedish VARCHAR(50),
    operator VARCHAR(50),
    capacity INT,
    x_coordinate FLOAT,
    y_coordinate FLOAT
);