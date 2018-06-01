package com.iot.configure;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by xiongxiaoyu
 * Data:2018/5/31
 * Time:22:32
 */

@Configuration
@RestController
public class WebConfiguration extends WebMvcConfigurerAdapter {

	@Value("classpath:/index.html")
//	@Value("classpath:../controller/index.html")
	private Resource indexHtml;

	@Bean
	@Order(Ordered.HIGHEST_PRECEDENCE)
	public CharacterEncodingFilter characterEncodingFilter() {
		CharacterEncodingFilter filter = new CharacterEncodingFilter("UTF-8", true);
		return filter;
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/ui/");
	}

	@Bean
	public ServletRegistrationBean apiV1ServletBean(WebApplicationContext wac) {
		DispatcherServlet servlet = new DispatcherServlet(wac);
		ServletRegistrationBean bean = new ServletRegistrationBean(servlet, "/api/v1/*");
		bean.setName("api-v1");
		return bean;
	}

	@RequestMapping("/")
	public Object index() {
		return ResponseEntity.ok().body(indexHtml);
	}
}