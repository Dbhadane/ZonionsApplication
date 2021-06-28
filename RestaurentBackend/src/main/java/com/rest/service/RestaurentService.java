package com.rest.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.rest.model.Restaurant;
import com.rest.repository.RestaurentRepository;

@Service
public class RestaurentService
{
     @Autowired
	 RestaurentRepository userRepository;
	
	public String uploadImage(MultipartFile file, Long id) {

		  System.out.println("I am in upload image");
		Optional<Restaurant> restData = userRepository.findById(id);
		try {
			if (restData.isPresent()) {
				Restaurant restModel = restData.get();
				restModel.setName(file.getOriginalFilename());
				restModel.setMimetype(file.getContentType());
				restModel.setPic(file.getBytes());

				userRepository.save(restModel);

			}
			System.out.println("File uploaded successfully! -> filename = " + file.getOriginalFilename());
			return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
		} catch (Exception e) {
			return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
		}

	}
}
