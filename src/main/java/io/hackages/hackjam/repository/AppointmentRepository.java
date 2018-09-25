package io.hackages.hackjam.repository;

import java.util.List;

import io.hackages.hackjam.domain.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@SuppressWarnings("unused")
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long> {
	List<Appointment> findByUserId(Long userId); 
}
