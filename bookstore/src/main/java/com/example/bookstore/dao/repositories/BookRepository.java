package com.example.bookstore.dao.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.dao.entites.Book;
import com.example.bookstore.dao.entites.Category;

@Repository

public interface BookRepository  extends JpaRepository<Book, Long> {

    Optional<Category> findByCode(String code);
    // Optional<Book> findByCode(String code);
    // List<Book> findAllByOrderByPrixAsc();
    // List<Book> findByCategoryId(Long categoryId);
}
