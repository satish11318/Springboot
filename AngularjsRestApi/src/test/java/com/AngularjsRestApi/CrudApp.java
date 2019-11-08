package com.AngularjsRestApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class CrudApp {
	public static void main(String[] args) {
		SpringApplication.run(CrudApp.class, args);
	}
}