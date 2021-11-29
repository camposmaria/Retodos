/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Web;

import co.usa.ciclo4.ciclo4.Modelo.User;
import co.usa.ciclo4.ciclo4.Service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ivonne c
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class UserController {

    @Autowired
    /**
     * Metodo para llamar los metodos de los  servicios
     */
    private UserService service;

    
    /**
     * Metodo getall para traer la lista con todos los elementos de la clase user
     * @return lista de user
     */
    @GetMapping("/all")
    public List<User> getUsuarios() {

        return service.getAll();

    }
    
    /**
     * metodo para validar si un email existe
     * @param email
     * @return true or false
     */
    @GetMapping("/emailexist/{email}")
    public boolean existEmail(@PathVariable("email") String email) {

        return service.getUserByEmail(email);

    }
    
    
    /**
     * Metodo post para crear  un elemento  de la clase user si no existe
     * @param user
     * @return 
     */
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User save(@RequestBody User user){
    
    return service.save(user);
    
    }
    
    
    /**
     * metodoget para taer un elemento de la clase user por su email y password
     * @param email
     * @param password
     * @return 
     */
    @GetMapping("/{email}/{password}")
    public User existEmailPass(@PathVariable("email") String email,@PathVariable("password") String password) {

        return service.getByEmailAndPass(email,password);

    }
    
    /**
     * Metodo put para  actualizar  un elemento  de la user
     * @param user
     * @return user 
     */
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public User update(@RequestBody User user){
    
    return service.update(user);
    
    }
    /**
     * Metodo put para  eliminar  un elemento  de la clase user apartir de el id
     * @param id
     * @return 
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Integer delete(@PathVariable Integer id){
    
       return  service.deleteUserById(id);
    
    }
    
    
    
    
}
