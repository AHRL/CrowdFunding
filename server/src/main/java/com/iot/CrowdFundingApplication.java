package com.iot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by xiongxiaoyu
 * Data:2018/4/27
 * Time:20:31
 */

@SpringBootApplication
@EnableAutoConfiguration
public class CrowdFundingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrowdFundingApplication.class);
	}
}
