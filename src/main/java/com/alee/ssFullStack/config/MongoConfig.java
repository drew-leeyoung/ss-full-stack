package com.alee.ssFullStack.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.alee.ssFullStack.repository.ProductRepository;

@Configuration
@EnableMongoRepositories(basePackageClasses = ProductRepository.class)
public class MongoConfig {}