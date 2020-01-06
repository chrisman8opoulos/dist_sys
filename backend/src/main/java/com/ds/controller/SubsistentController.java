package com.ds.controller;

import com.ds.model.DAORequest;
import com.ds.model.DAOUser;
import com.ds.model.RequestDTO;
import com.ds.service.ApplicationService;
import com.ds.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subsistent")
@CrossOrigin(origins = "http://localhost:4200")
public class SubsistentController {

    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/getusers", method = RequestMethod.GET)
    public List<DAOUser> getUsers() throws Exception {
        return userDetailsService.getOnlyUser();
    }

    @RequestMapping(value = "/activateuser", method = RequestMethod.POST)
    public DAOUser activateUser(@RequestBody DAOUser user) throws Exception {
        return userDetailsService.getActivate(user);
    }

    @RequestMapping(value = "/dactivateuser", method = RequestMethod.POST)
    public DAOUser dactivateUser(@RequestBody DAOUser user) throws Exception {
        return userDetailsService.getDactivate(user);
    }

    @RequestMapping(value = "/getrequest", method = RequestMethod.GET)
    public List<DAORequest> getRequest() throws Exception {
        return applicationService.getRequest();
    }

    @RequestMapping(value = "/activate", method = RequestMethod.POST)
    public String activateRequest(@RequestBody RequestDTO req) throws Exception {
        return applicationService.activateRequest(req);
    }


}
