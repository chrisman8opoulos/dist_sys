package com.ds.model;

public class RequestDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private Integer income;
    private Integer notJob;
    private Integer brothersSameCity;
    private Integer brothersAnotherCity;
    private Integer yearHome;
    private Integer yearStudy;
    private Integer finalPoint;
    private boolean approve;
    private String department;

    public RequestDTO(Long id, String firstName, String lastName, Integer income, Integer notJob, Integer brothersSameCity, Integer brothersAnotherCity, Integer yearHome, Integer yearStudy, Integer finalPoint, boolean approve, String department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.income = income;
        this.notJob = notJob;
        this.brothersSameCity = brothersSameCity;
        this.brothersAnotherCity = brothersAnotherCity;
        this.yearHome = yearHome;
        this.yearStudy = yearStudy;
        this.finalPoint = finalPoint;
        this.approve = approve;
        this.department = department;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isApprove() {
        return approve;
    }

    public void setApprove(boolean approve) {
        this.approve = approve;
    }

    public Integer getFinalPoint() {
        return finalPoint;
    }

    public void setFinalPoint(Integer finalPoint) {
        this.finalPoint = finalPoint;
    }

    public Boolean getApprove() {
        return approve;
    }

    public void setApprove(Boolean approve) {
        this.approve = approve;
    }


    public Integer getIncome() {
        return income;
    }

    public void setIncome(Integer income) {
        this.income = income;
    }

    public Integer getNotJob() {
        return notJob;
    }

    public void setNotJob(Integer notJob) {
        this.notJob = notJob;
    }

    public Integer getBrothersSameCity() {
        return brothersSameCity;
    }

    public void setBrothersSameCity(Integer brothersSameCity) {
        this.brothersSameCity = brothersSameCity;
    }

    public Integer getBrothersAnotherCity() {
        return brothersAnotherCity;
    }

    public void setBrothersAnotherCity(Integer brothersAnotherCity) {
        this.brothersAnotherCity = brothersAnotherCity;
    }

    public Integer getYearHome() {
        return yearHome;
    }

    public void setYearHome(Integer yearHome) {
        this.yearHome = yearHome;
    }

    public Integer getYearStudy() {
        return yearStudy;
    }

    public void setYearStudy(Integer yearStudy) {
        this.yearStudy = yearStudy;
    }
}
