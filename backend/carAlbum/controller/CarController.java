package com.reis.carAlbum.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reis.carAlbum.car.Car;
import com.reis.carAlbum.car.CarRepository;
import com.reis.carAlbum.car.CarRequestDTO;
import com.reis.carAlbum.car.CarResponseDTO;

@RestController
@RequestMapping("cars")
public class CarController {

    @Autowired
    private CarRepository repository;

    @CrossOrigin(origins = "x", allowedHeaders = "*")
    @PostMapping
    public void saveCar(@RequestBody CarRequestDTO data){
        Car carData = new Car(data);
        repository.save(carData);
        return;
    }
    
    @CrossOrigin(origins = "x", allowedHeaders = "*")
    @GetMapping
    public List<CarResponseDTO> getAll(){

        List<CarResponseDTO> cars = repository.findAll().stream().map(CarResponseDTO::new).toList();

        return cars;
    }
}
