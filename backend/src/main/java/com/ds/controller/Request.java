package com.ds.controller;

import com.ds.model.DAORequest;
import com.ds.model.RequestDTO;
import com.ds.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Request {

	@Autowired
	private ApplicationService applicationService;

	@RequestMapping({ "/hello" })
	public String firstPage() {
		return "Hello World";
	}

	@RequestMapping({"/request"})
	public String saveRequest(@RequestBody RequestDTO req) throws Exception {
        DAORequest daoRequest = applicationService.existRequest(req);
        if(daoRequest != null){
            applicationService.save(daoRequest);
        }else if(daoRequest == null){
            applicationService.saveRequest(req);
        }
		return "OK";
	}

	@RequestMapping({"/getrequest"})
	public List<DAORequest> getRequest() throws Exception {
		return applicationService.getRequest();
	}

}