package com.ds.controller;

import com.ds.model.DAOUser;
import com.ds.model.UserDTO;
import com.ds.service.ApplicationService;
import com.ds.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
        return ResponseEntity.ok(userDetailsService.save(user));
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<?> deleteUser(@RequestBody UserDTO user) throws Exception {
        userDetailsService.delete(user);
        return ResponseEntity.ok(userDetailsService.getUsers());
    }

    @RequestMapping(value = "/modify", method = RequestMethod.POST)
    public ResponseEntity<?> modifyUser(@RequestBody UserDTO user) throws Exception {
        System.out.println(user);
        return ResponseEntity.ok(userDetailsService.update(user));
    }

    @RequestMapping(value = "/getusers", method = RequestMethod.GET)
    public List<DAOUser> getUserList() throws Exception {
        return   userDetailsService.getUsers();
    }

    @RequestMapping(value = "/getuser", method = RequestMethod.POST)
    public DAOUser getUserList(@RequestBody UserDTO user) throws Exception {
        return   userDetailsService.getUser(user.getId());
    }

}
