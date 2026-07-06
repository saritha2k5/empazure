package com.May2026.demo.service;

import java.util.Collections;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.May2026.demo.entity.User;
import com.May2026.demo.repository.UserRepository;
@Service
public class CustomUserDetailsService implements UserDetailsService{

	@Autowired
	private UserRepository repo;
	
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
				
		User user=repo.findByUsername(username).orElseThrow(()->
		new UsernameNotFoundException("User Not Found"));
		
		System.out.println("user name:"+user.getUsername());
		
		System.out.println("Role:"+user.getRole());
		
		return new org.springframework.security.core.userdetails.User(
				user.getUsername(), 
				user.getPassword(), 
				Collections.singletonList(new SimpleGrantedAuthority("ROLE_"+user.getRole())));
	}


}
