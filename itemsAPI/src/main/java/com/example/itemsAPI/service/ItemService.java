package com.example.itemsAPI.service;

import com.example.itemsAPI.repository.entity.Item;

import java.util.List;

//Create the ItemService interface with the functions needed to implement the Items CRUD
public interface ItemService {
    Item save(Item item);
    void delete(int itemId);
    List<Item> all();
    Item findById(int itemId);
}
