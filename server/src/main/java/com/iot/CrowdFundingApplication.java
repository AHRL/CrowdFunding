package com.iot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by xiongxiaoyu
 * Data:2018/4/27
 * Time:20:31
 */

@ComponentScan
@SpringBootApplication
public class CrowdFundingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrowdFundingApplication.class);
	}
}
