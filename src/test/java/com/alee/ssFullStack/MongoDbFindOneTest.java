package com.alee.ssFullStack;

import static com.alee.ssFullStack.TestUtil.setupMockData;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import com.alee.ssFullStack.domain.Product;
import com.alee.ssFullStack.repository.ProductRepository;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MongoDbFindOneTest {

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    ProductRepository repo;

    @Before
    public void setupDB() {
        List<Product> productList = new ArrayList<Product>();
        productList = setupMockData();

        // save products
        for (Product p : productList) {
            repo.save(p);
        }
    }
    
    @After
    public void after() {
        repo.deleteAll();
    }

    @Test
    public void mongoDbRepositoryFindOneTest() {
        // query for product and assert
        
        List<Product> products = repo.findByName("The Best Hand Sanitizer");
        System.out.println("``````````````````````````````````````````````````````````````````````");
        System.out.println(products.toString());
        System.out.println("``````````````````````````````````````````````````````````````````````");

        assertTrue(products.get(0).getName().equals("The Best Hand Sanitizer"));
        assertTrue(products.size() == 1);
    }
}