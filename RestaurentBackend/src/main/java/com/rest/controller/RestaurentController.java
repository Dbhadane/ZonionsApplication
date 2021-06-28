
package com.rest.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rest.exception.ResourceNotFoundException;
import com.rest.model.Restaurant;
import com.rest.repository.RestaurentRepository;
import com.rest.service.RestaurentService;

@RestController

@RequestMapping("/api")

@CrossOrigin(origins = "http://localhost:4200")
public class RestaurentController {

	@Autowired
	RestaurentRepository restRepository;

	@Autowired
	RestaurentService serviceRest;

	@GetMapping("/allrest")
	public List<Restaurant> getAllRestaurants() {
		List<Restaurant> r = restRepository.findAll();
		System.out.println(r);
 
		return r;
	}

	@PostMapping("/add")
	public ResponseEntity<Object> addRest(@RequestBody Restaurant newUser) {
		Date d=new Date();
		String date = d.toString();
		newUser.setLastModify(date.substring(4));
		
		Restaurant r = restRepository.save(newUser);
	
		return ResponseEntity.ok(r);
	}

	@DeleteMapping("delete/{id}")
	public ResponseEntity<Object> deleteRest(@PathVariable Long id) {

		if (restRepository.findById(id).isPresent()) {
			restRepository.deleteById(id);
			if (restRepository.findById(id).isPresent())

				return ResponseEntity.unprocessableEntity().body("Failed to Delete the specified Restaurant");
			else
				return ResponseEntity.ok().body("Successfully deleted the specified Restaturant");
		} else
			return ResponseEntity.badRequest().body("Cannot find the Restaurant specified");

	}

	@PutMapping("/rest/{id}")
	public ResponseEntity<Restaurant> updateRest(@PathVariable Long id, @RequestBody Restaurant restdetails) {
		Date d=new Date();
		String date = d.toString();
		restdetails.setLastModify(date.substring(4));
		
		Restaurant rest = restRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurent not exist with id :" + id));

		rest.setId(restdetails.getId());
		rest.setRestName(restdetails.getRestName());
		rest.setAddr(restdetails.getAddr());
		rest.setMobileNo(restdetails.getMobileNo());
		rest.setMyTimePicker(restdetails.getMyTimePicker());
		rest.setMyTimePickerc(restdetails.getMyTimePickerc());
		rest.setActive(restdetails.isActive());

		Restaurant updatedRest = restRepository.save(rest);
		return ResponseEntity.ok(updatedRest);
	}

	@GetMapping("/rest/{id}")
	public ResponseEntity<Restaurant> getRestId(@PathVariable Long id) {
		Restaurant rest = restRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		return ResponseEntity.ok(rest);
	}

	@GetMapping("/rest/statuschange/{id}")
	public ResponseEntity<Restaurant> updateStatus(@PathVariable Long id) {
		boolean flag = true;
		Restaurant rest = restRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));

		if (rest.isActive())
			flag = false;

		rest.setActive(flag);
		System.out.println("updated status " + rest);
		Restaurant updatedRest = restRepository.save(rest);
		return ResponseEntity.ok(rest);
	}

	@PutMapping("/restImg/{id}")
	public String imageUpload(@RequestParam MultipartFile file, @PathVariable long id) {
		System.out.println("i am in put ");
		return serviceRest.uploadImage(file, id);
	}

	@GetMapping("/{id}/{name}")

	public ResponseEntity<byte[]> getImageame(@PathVariable Long id, @PathVariable String name) {
		System.out.println("name=" + name + "Id=" + id);
		Optional<Restaurant> fileOptional = restRepository.findByNameAndId(name, id);
		System.out.println("fileoptional---------------" + fileOptional);
		if (fileOptional.isPresent()) {
			Restaurant file = fileOptional.get();
			return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
					.body(file.getPic());
		}

		return ResponseEntity.status(404).body(null);
	}

}
