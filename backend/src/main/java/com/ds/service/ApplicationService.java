package com.ds.service;

import com.ds.dao.RequestDao;
import com.ds.model.DAORequest;
import com.ds.model.RequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    private RequestDao requestDao;

    public DAORequest existRequest(RequestDTO req){
        DAORequest daoRequestRet = requestDao.findByFirstNameAndLastName(req.getFirstName(),req.getLastName());
        if(daoRequestRet != null) {
            daoRequestRet.setFirstName(req.getFirstName());
            daoRequestRet.setLastName(req.getLastName());
            daoRequestRet.setYearStudy(req.getYearStudy());
            daoRequestRet.setYearHome(req.getYearHome());
            daoRequestRet.setNotJob(req.getNotJob());
            daoRequestRet.setDepartment(req.getDepartment());
            daoRequestRet.setBrothersSameCity(req.getBrothersSameCity());
            daoRequestRet.setBrothersAnotherCity(req.getBrothersAnotherCity());
            daoRequestRet.setIncome(req.getIncome());
        }
        return daoRequestRet;
    }

    public DAORequest save(DAORequest req) {
        req.setFinalPoint(calculatePoin(req));
        req.setApprove(false);
        return requestDao.save(req);
    }


    public DAORequest saveRequest(RequestDTO req) {
        DAORequest newReq= new DAORequest();
        newReq.setFirstName(req.getFirstName());
        newReq.setLastName(req.getLastName());
        newReq.setIncome(req.getIncome());
        newReq.setDepartment(req.getDepartment());
        newReq.setBrothersAnotherCity(req.getBrothersAnotherCity());
        newReq.setBrothersSameCity(req.getBrothersSameCity());
        newReq.setNotJob(req.getNotJob());
        newReq.setYearHome(req.getYearHome());
        newReq.setYearStudy(req.getYearStudy());
        newReq.setFinalPoint(calculatePoints(req));
        newReq.setApprove(false);
        return requestDao.save(newReq);
    }

    public List<DAORequest> getRequest(){
        return requestDao.findAll();
    }

    public List<DAORequest> getRequest(String departement){
        return requestDao.findByDepartment(departement);
    }

    public String activateRequest(RequestDTO req){
        DAORequest newReq = requestDao.findById(req.getId());
        newReq.setApprove(true);
        requestDao.save(newReq);
        return "update";
    }

    public DAORequest getActivate(DAORequest req){
        DAORequest newReq = requestDao.findById(req.getId());
        newReq.setApprove(true);
        return requestDao.save(newReq);
    }

    public DAORequest getDactivate(DAORequest req){
        DAORequest newReq = requestDao.findById(req.getId());
        newReq.setApprove(false);
        return requestDao.save(newReq);
    }

    public static int calculatePoints(RequestDTO req){
        int point = 0;
        if(req.getIncome() <= 0 && req.getNotJob() == 0){
            point = 1000000;
        }
        if(req.getYearStudy() >= 4){
            point = -100000000;
        }
        if(req.getIncome() <= 10000){
            point = 100;
        }else if(req.getIncome() > 10000 && req.getIncome() <= 15000){
            point = 50;
        }else if(req.getIncome() >  15000){
            point = 0;
        }
        point = point + req.getBrothersSameCity() * 20;
        point = point + req.getBrothersAnotherCity() * 50;
        point = point - req.getYearHome() * 10 ;

        return point;
    }

    public static int calculatePoin(DAORequest req){
        int point = 0;
        if(req.getIncome() <= 0 && req.getNotJob() == 0){
            point = 1000000;
        }
        if(req.getYearStudy() >= 4){
            point = -100000000;
        }
        if(req.getIncome() <= 10000){
            point = 100;
        }else if(req.getIncome() > 10000 && req.getIncome() <= 15000){
            point = 50;
        }else if(req.getIncome() >  15000){
            point = 0;
        }
        point = point + req.getBrothersSameCity() * 20;
        point = point + req.getBrothersAnotherCity() * 50;
        point = point - req.getYearHome() * 10 ;

        return point;
    }
}
