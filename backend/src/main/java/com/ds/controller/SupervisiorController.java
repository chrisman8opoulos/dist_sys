package com.ds.controller;

import com.ds.model.DAORequest;
import com.ds.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supervisior")
@CrossOrigin(origins = "http://localhost:4200")
public class SupervisiorController {

    @Autowired
    private ApplicationService applicationService;

    @RequestMapping(value = "/getrequest/{webpageId}", method = RequestMethod.GET)
    public List<DAORequest> getRequest(@PathVariable String webpageId) throws Exception {
        return applicationService.getRequest(webpageId);
    }

    @RequestMapping(value = "/activaterequest", method = RequestMethod.POST)
    public DAORequest activateUser(@RequestBody DAORequest req) throws Exception {
        return applicationService.getActivate(req);
    }

    @RequestMapping(value = "/dactivaterequest", method = RequestMethod.POST)
    public DAORequest dactivateUser(@RequestBody DAORequest req) throws Exception {
        return applicationService.getDactivate(req);
    }


}
