# ss-full-stack

A full stack Java and React app for Smarter Sorting

## Prerequisites
- Java 11

## Project Setup

`$ mvn clean install`

## Running Locally

`$ mvn spring-boot:run`

## Docker
Pull the latest Mongo Container  
`$ docker pull mongo`  

Run the Mongo Container  
`$ docker run -d -p 27017:27017 mongo`  

Build the Spring Boot Container  
`$ docker build --tag=ss-full-stack:latest .`  

Run the Spring Boot Container  
`$ docker run -p 8080:8080 ss-full-stack:latest`