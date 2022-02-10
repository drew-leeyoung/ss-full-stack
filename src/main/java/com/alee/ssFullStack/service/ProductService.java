package com.alee.ssFullStack.service;

import java.util.List;
import java.util.Optional;

import com.alee.ssFullStack.domain.Product;
import com.alee.ssFullStack.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    
    @Autowired
    ProductRepository repository;

    public Product createNewProduct(Product newProduct) {
        if(newProduct.getName().isEmpty()) {
            throw new RuntimeException("Product must have a name");
        }
        if(newProduct.getIngredients().size() == 0) {
            throw new RuntimeException("Product must have at least one ingredient");
        }
        return repository.save(newProduct);
    }

    public List<Product> getAll() {
        return repository.findAll();
    }

    public List<Product> getByName(String name) {
        return repository.findByName(name);
    }

    public Optional<Product> getById(String id) {
        return repository.findById(id);
    }

}
