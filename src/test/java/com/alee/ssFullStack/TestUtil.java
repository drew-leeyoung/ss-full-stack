package com.alee.ssFullStack;

import java.util.ArrayList;
import java.util.List;

import com.alee.ssFullStack.domain.Product;

public class TestUtil {
    
    public static List<Product> setupMockData() {
        // setup test products 1
        List<String> ingredients = new ArrayList<String>() {
            {
                add("ethyl alcohol");
                add("isopropyl alcohol");
                add("water");
                add("dimethyl siloxane");
                add("copper gluconate");
            }
        };
        Product testProduct = new Product();
        testProduct.setName("The Best Hand Sanitizer");
        testProduct.setIngredients(ingredients);

        // setup test product 2
        List<String> ingredients2 = new ArrayList<String>() {
            {
                add("water");
            }
        };
        Product testProduct2 = new Product();
        testProduct2.setName("The Best Water");
        testProduct2.setIngredients(ingredients2);

        List<Product> productList = new ArrayList<Product>();
        productList.add(testProduct);
        productList.add(testProduct2);
        return productList;
    }

}
