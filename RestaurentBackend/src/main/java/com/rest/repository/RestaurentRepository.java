//package com.rest.repository;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Repository;
//
//import com.rest.model.Restaurant;
//@Repository
//public interface RestaurentRepository extends JpaRepository<Restaurant, Long> 
//{
//	@Query("select mobileNo from Restaurant r where r.restName=?1")
//	public Restaurant findByrestname(String mb);
//
//	@Query("select id from Restaurant r where r.id=?1")
//	public ResponseEntity<Object> deleteUser(Long id);
//
//
//	
//
//}
//
//
//
package com.rest.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.rest.model.Restaurant;
@Repository
public interface RestaurentRepository extends JpaRepository<Restaurant, Long> 
{
	

	@Query("select id from Restaurant r where r.id=?1")
	public ResponseEntity<Object> deleteUser(Long id);

	Optional<Restaurant> findByName(String name);
	
	
	Optional<Restaurant> findByNameAndId(String name,long id);
	
	

}



