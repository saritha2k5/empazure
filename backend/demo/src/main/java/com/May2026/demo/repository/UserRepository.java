package com.May2026.demo.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.May2026.demo.entity.Employee;
import com.May2026.demo.entity.User;
@Repository
public interface UserRepository  extends JpaRepository<User, Integer>{


Optional<User> findByUsername(String username);
	
}
