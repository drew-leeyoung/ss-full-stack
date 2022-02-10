package com.alee.ssFullStack.repository;

import java.util.List;

import com.alee.ssFullStack.domain.Product;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<Product, String>{
    
    List<Product> findByName(String name);

}
