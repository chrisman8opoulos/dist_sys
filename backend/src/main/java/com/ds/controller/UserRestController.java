package com.ds.controller;

import com.ds.model.DAORequest;
import com.ds.model.RequestDTO;
import com.ds.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserRestController {

    @Autowired
    private ApplicationService applicationService;

    @RequestMapping(value = "/request", method = RequestMethod.POST)
    public String saveRequest(@RequestBody RequestDTO req) throws Exception {
        DAORequest daoRequest = applicationService.existRequest(req);
        if(daoRequest != null){
            applicationService.save(daoRequest);
        }else if(daoRequest == null){
            applicationService.saveRequest(req);
        }
        return "OK";
    }

}
