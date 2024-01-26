package com.employee.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;

@RestController
public class HomeController {
	
	@Autowired
	EmployeeRepository employeeRepository;
	@GetMapping("/")
	public ModelAndView showEmployees() {
		ModelAndView modelview=new ModelAndView();
		modelview.setViewName("HomePage");


		return modelview;
	}
	
	@GetMapping("fetch")
	public List<Employee> fetchEmployee(Model model) {
		
		return employeeRepository.findAll();
		
		
	}
	@PostMapping("/save")
	public void save(@RequestBody Employee employee) {
		employeeRepository.save(employee);
		
	
	}
	
}
