package com.alee.ssFullStack.rest;

import java.util.List;

import com.alee.ssFullStack.domain.Product;
import com.alee.ssFullStack.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000") //allow CORS from localhost
@RestController
@RequestMapping("/products")
public class ProductController {
    
    @Autowired
    ProductService productService;

    @GetMapping
    public List<Product> getAll() {
        return productService.getAll();
    }

    @PostMapping
    public Product createNewProduct(@RequestBody Product newProduct) {
        //todo: validation, error translation, duplicates, etc
        return productService.createNewProduct(newProduct);
    }

}
