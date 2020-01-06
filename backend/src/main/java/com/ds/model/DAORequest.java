package com.ds.model;

import javax.persistence.*;


@Entity
@Table(name = "request")
public class DAORequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "income")
    private int income;
    @Column(name = "not_job")
    private int notJob;
    @Column(name = "brothers_same_city")
    private int brothersSameCity;
    @Column(name = "brothers_another_city")
    private int brothersAnotherCity;
    @Column(name = "year_home")
    private int yearHome;
    @Column(name = "year_study")
    private int yearStudy;
    @Column(name = "final_point")
    private int finalPoint;
    @Column(name = "approve")
    private boolean approve;
    @Column(name = "department")
    private String department;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getFinalPoint() {
        return finalPoint;
    }

    public void setFinalPoint(int finalPoint) {
        this.finalPoint = finalPoint;
    }

    public boolean isApprove() {
        return approve;
    }

    public void setApprove(boolean approve) {
        this.approve = approve;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }

    public int getNotJob() {
        return notJob;
    }

    public void setNotJob(int notJob) {
        this.notJob = notJob;
    }

    public int getBrothersSameCity() {
        return brothersSameCity;
    }

    public void setBrothersSameCity(int brothersSameCity) {
        this.brothersSameCity = brothersSameCity;
    }

    public int getBrothersAnotherCity() {
        return brothersAnotherCity;
    }

    public void setBrothersAnotherCity(int brothersAnotherCity) {
        this.brothersAnotherCity = brothersAnotherCity;
    }

    public int getYearHome() {
        return yearHome;
    }

    public void setYearHome(int yearHome) {
        this.yearHome = yearHome;
    }

    public int getYearStudy() {
        return yearStudy;
    }

    public void setYearStudy(int yearStudy) {
        this.yearStudy = yearStudy;
    }
}