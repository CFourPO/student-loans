/**
 * Created by Home on 1/14/17.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Student = new Schema({
    // _id: ObjectId,
    firstName: String,
    middleName: String,
    lastName: String,
    streetAddress1: String,
    streetAddress2: String,
    city: String,
    stateCode: String,
    countryCode: String,
    zipCode: String,
    emailAddress: String,
    homePhoneCountryCode: Number,
    homePhoneNumber: String,
    homePhonePreferred: String,
    cellPhoneCountryCode: Number,
    cellPhoneNumber: String,
    cellPhonePreferred: String,
    workPhoneCountryCode: Number,
    workPhoneNumber: String,
    workPhonePreferred: String,


    FirstName: String,
    MiddleInitial: String,
    LastName: String,
    StreetAddress1: String,
    StreetAddress2: String,
    City: String,
    StateCode: String,
    CountryCode: String,
    ZipCode: String,
    EmailAddress: String,
    HomePhoneCountryCode: Number,
    HomePhoneNumber: String,
    HomePhonePreferred: String,
    CellPhoneCountryCode: Number,
    CellPhoneNumber: String,
    CellPhonePreferred: String,
    WorkPhoneCountryCode: Number,
    WorkPhoneNumber: String,
    WorkPhonePreferred: String,
    SULAMaximumEligibilityPeriod: Number,
    SULASubsidizedUsagePeriod: Number,
    SULARemainingEligibilityPeriod: Number,
    EnrollmentStatus: String,
    EnrollmentStatusEffectiveDate: Date,
    TotalAllLoansOutstandingPrincipal: Number,
    TotalAllLoansOutstandingInterest: Number,
    PellLifetimeEligibilityUsed: Number,
    TotalAllGrants: Number
});

/*
 Student First Name
 Student Middle Initial
 Student Last Name
 Student Street Address 1
 Student Street Address 2
 Student City
 Student State Code
 Student Country Code
 Student Zip Code
 Student Email Address
 Student Home Phone Country Code
 Student Home Phone Number
 Student Home Phone Preferred
 Student Cell Phone Country Code
 Student Cell Phone Number
 Student Cell Phone Preferred
 Student Work Phone Country Code
 Student Work Phone Number
 Student Work Phone Preferred
 Student SULA Maximum Eligibility Period
 Student SULA Subsidized Usage Period
 Student SULA Remaining Eligibility Period
 Student Enrollment Status
 Student Enrollment Status Effective Date
 Student Total All Loans Outstanding Principal
 Student Total All Loans Outstanding Interest
 Student Pell Lifetime Eligibility Used
 Student Total All Grants
*/


/*
FirstName
MiddleInitial
LastName
StreetAddress1
StreetAddress2
City
StateCode
CountryCode
ZipCode
EmailAddress
HomePhoneCountryCode
HomePhoneNumber
HomePhonePreferred
CellPhoneCountryCode
CellPhoneNumber
CellPhonePreferred
WorkPhoneCountryCode
WorkPhoneNumber
WorkPhonePreferred
SULAMaximumEligibilityPeriod
SULASubsidizedUsagePeriod
SULARemainingEligibilityPeriod
EnrollmentStatus
EnrollmentStatusEffectiveDate
TotalAllLoansOutstandingPrincipal
TotalAllLoansOutstandingInterest
PellLifetimeEligibilityUsed
TotalAllGrants
 */