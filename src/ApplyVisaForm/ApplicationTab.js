import { useState } from "react";
import './VisaApplyForm.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function ApplicationTabPage({ applyKeys }) {

  const emailApplyMember = applyKeys[0]
  const applyBy = applyKeys[1]
  // console.log(applyBy)

  const nevigate = useNavigate();
  const [profileImg, setProfileImg] = useState();
  const [passportImgFront, setpassportImgFront] = useState();
  const [passportImgBack, setpassportImgBack] = useState();
  const [error, setError] = useState({});

  const [addAdult, setAddAdult] = useState(1);
  const [addChild, setAddChild] = useState(0);

  const handleClick = () => {
    setAddAdult(addAdult + 1);
  };
  const deleteMore = () => {
    setAddAdult(addAdult - 1);
  };
  const handleClickMoreChild = () => {
    setAddChild(addChild + 1);
  };
  const deleteMoreChild = () => {
    setAddChild(addChild - 1);
  };

  const [firstStepFormData, setfirstStepFormData] = useState({
    profileImage: "",
    passportImageFront: "",
    passportImageBack: "",
    titleadult1: "", titleadult2: "", titleadult3: "", titleadult4: "", titleadult5: "", titleadult6: "", titleadult7: "", titleadult8: "", titleadult9: "",
    firstnameadult1: "", firstnameadult2: "", firstnameadult3: "", firstnameadult4: "", firstnameadult5: "", firstnameadult6: "", firstnameadult7: "", firstnameadult8: "", firstnameadult9: "",
    lastnameadult1: "", lastnameadult2: "", lastnameadult3: "", lastnameadult4: "", lastnameadult5: "", lastnameadult6: "", lastnameadult7: "", lastnameadult8: "", lastnameadult9: "",
    dobadult1: "", dobadult2: "", dobadult3: "", dobadult4: "", dobadult5: "", dobadult6: "", dobadult7: "", dobadult8: "", dobadult9: "",
    nationalityadult1: "", nationalityadult2: "", nationalityadult3: "", nationalityadult4: "", nationalityadult5: "", nationalityadult6: "", nationalityadult7: "", nationalityadult8: "", nationalityadult9: "",
    genderadult1: "", genderadult2: "", genderadult3: "", genderadult4: "", genderadult5: "", genderadult6: "", genderadult7: "", genderadult8: "", genderadult9: "",
    phonenumberadult1: "", phonenumberadult2: "", phonenumberadult3: "", phonenumberadult4: "", phonenumberadult4: "", phonenumberadult6: "", phonenumberadult7: "", phonenumberadult8: "", phonenumberadult9: "",
    emailadult1: "", emailadult2: "", emailadult3: "", emailadult4: "", emailadult5: "", emailadult6: "", emailadult7: "", emailadult8: "", emailadult9: "",
    passportnumberadult1: "", passportnumberadult2: "", passportnumberadult3: "", passportnumberadult4: "", passportnumberadult5: "", passportnumberadult6: "", passportnumberadult7: "", passportnumberadult8: "", passportnumberadult9: "",
    titlechild1: "", titlechild2: "", titlechild3: "", titlechild4: "", titlechild5: "", titlechild6: "", titlechild7: "", titlechild8: "",
    firstnamechild1: "", firstnamechild2: "", firstnamechild3: "", firstnamechild4: "", firstnamechild5: "", firstnamechild6: "", firstnamechild7: "", firstnamechild8: "",
    lastnamechild1: "", lastnamechild2: "", lastnamechild3: "", lastnamechild4: "", lastnamechild5: "", lastnamechild6: "", lastnamechild7: "", lastnamechild8: "",
    dobchild1: "", dobchild2: "", dobchild3: "", dobchild4: "", dobchild5: "", dobchild6: "", dobchild7: "", dobchild8: "",
    nationalitychild1: "", nationalitychild2: "", nationalitychild3: "", nationalitychild4: "", nationalitychild5: "", nationalitychild6: "", nationalitychild7: "", nationalitychild8: "",
    genderchild1: "", genderchild2: "", genderchild3: "", genderchild4: "", genderchild5: "", genderchild6: "", genderchild7: "", genderchild8: "",
    phonenumberchild1: "", phonenumberchild2: "", phonenumberchild3: "", phonenumberchild4: "", phonenumberchild5: "", phonenumberchild6: "", phonenumberchild7: "", phonenumberchild8: "",
    emailchild1: "", emailchild2: "", emailchild3: "", emailchild4: "", emailchild5: "", emailchild6: "", emailchild7: "", emailchild8: "",
    passportnumberchild1: "", passportnumberchild2: "", passportnumberchild3: "", passportnumberchild4: "", passportnumberchild5: "", passportnumberchild6: "", passportnumberchild7: "", passportnumberchild8: "",
    visaType: "",
    purposeOfVisa: "",
    travellDocs: "",
    documentNumbers: "",
    placeOfIssue: "",
    previoousDocNumber: "",
    passportIssuenceDate: "",
    passportInquiryDate: "",
    addressTo: "",
    postCodeTo: "",
    cityTo: "",
    addressFrom: "",
    postCodeFrom: "",
    cityFrom: "",
    province: "",
    currentcountry: "",
    flightTicketsDocs: "",
    accommadationDocs: "",
    otherDocs: "",
    entryExistDocs: "",
    applyBy: applyBy,
    emailApplyMember:emailApplyMember,
    status:"Panding"
  });

  function handleChange(e) {
    const files = e.target.files[0];
    setProfileImg(URL.createObjectURL(e.target.files[0]));
    setfirstStepFormData({ ...firstStepFormData, profileImage: files })
  }
  function handleChangePassportFront(e) {
    const files = e.target.files[0];
    setpassportImgFront(URL.createObjectURL(e.target.files[0]));
    setfirstStepFormData({ ...firstStepFormData, passportImageFront: files })
  }
  function handleChangePassportBack(e) {
    const files = e.target.files[0];
    setpassportImgBack(URL.createObjectURL(e.target.files[0]));
    setfirstStepFormData({ ...firstStepFormData, passportImageBack: files })
  }

  const subMitFirstStepForm = (e) => {
    e.preventDefault();
    localStorage.setItem("firstStepAuth", "true");
    handleValidate(firstStepFormData);

  };

  const handleValidate = (value) => {
    let error = {}
    if (!value.titleadult + addAdult) {
      error.titleadult = "name required"
    }
    if (!value.firstnameadult + addAdult) {
      error.firstnameadult = "first name required"
    }
    if (!value.lastnameadult + addAdult) {
      error.lastnameadult = "last name required"
    }
    if (!value.dobadult + addAdult) {
      error.dobadult = "date of birth required"
    }
    if (!value.nationalityadult + addAdult) {
      error.nationalityadult = "nationality required"
    }

    if (!value.genderadult + addAdult) {
      error.genderadult = "gender required"
    }
    if (!value.phonenumberadult + addAdult) {
      error.phonenumberadult = "phone number required"
    }
    if (!value.emailadult + addAdult) {
      error.emailadult = "email required"
    }
    if (!value.passportnumberadult + addAdult) {
      error.passportnumberadult = "passport number required"
    }
    if (!value.titlechild + addChild) {
      error.titlechild = "title required"
    }
    if (!value.firstnamechild + addChild) {
      error.firstnamechild = "first name required"
    }
    if (!value.lastnamechild + addChild) {
      error.lastnamechild = "last name required"
    }
    if (!value.dobchild + addChild) {
      error.dobchild = "date of birth required"
    }
    if (!value.nationalitychild + addChild) {
      error.nationalitychild = "nationality required"
    }
    if (!value.genderchild + addChild) {
      error.genderchild = "gender required"
    }
    if (!value.phonenumberchild + addChild) {
      error.phonenumberchild = "phone number required"
    }
    if (!value.emailchild + addChild) {
      error.emailchild = "email required"
    }
    if (!value.passportnumberchild + addChild) {
      error.passportnumberchild = "passport number required"
    }
    if (!value.visaType) {
      error.visaType = "visa type required"
    }
    if (!value.purposeOfVisa) {
      error.purposeOfVisa = "purpose of stay required"
    }
    if (!value.travellDocs) {
      error.travellDocs = "travell doccument required"
    }
    if (!value.documentNumbers) {
      error.documentNumbers = "doccument number required"
    }
    if (!value.placeOfIssue) {
      error.placeOfIssue = "place of issue required"
    }
    if (!value.previoousDocNumber) {
      error.previoousDocNumber = "previous doccument number required"
    }
    if (!value.passportIssuenceDate) {
      error.passportIssuenceDate = "passport issue date required"
    }
    if (!value.passportInquiryDate) {
      error.passportInquiryDate = "passport inquiry required"
    }
    if (!value.addressTo) {
      error.addressTo = "address required"
    }
    if (!value.postCodeTo) {
      error.postCodeTo = "post code required"
    }
    if (!value.cityTo) {
      error.cityTo = "city required"
    }
    if (!value.addressFrom) {
      error.addressFrom = "address required"
    }
    if (!value.postCodeFrom) {
      error.postCodeFrom = "post code required"
    }
    if (!value.cityFrom) {
      error.cityFrom = "city required"
    }
    if (!value.province) {
      error.province = "province/state required"
    }
    if (!value.currentcountry) {
      error.currentcountry = "country required"
    }
    if (!value.cityTo) {
      error.cityTo = "city required"
    } else {
      DataPostApi();
    }
    setError(error)


  }

  const firstStepHandle = (e) => {
    const { name, value } = e.target;
    setfirstStepFormData(
      { ...firstStepFormData, [name]: value });
  };
  const firstStepHandlePdf1 = (e) => {
    const files = e.target.files[0];
    setfirstStepFormData({ ...firstStepFormData, flightTicketsDocs: files })
  }
  const firstStepHandlePdf2 = (e) => {
    const files = e.target.files[0];
    setfirstStepFormData({ ...firstStepFormData, accommadationDocs: files })
  }
  const firstStepHandlePdf3 = (e) => {
    const files = e.target.files[0];
    setfirstStepFormData({ ...firstStepFormData, otherDocs: files })
  }
  const firstStepHandlePdf4 = (e) => {
    const files = e.target.files[0];
    setfirstStepFormData({ ...firstStepFormData, entryExistDocs: files })
  }
  
  const DataPostApi = () => {

    const formData = new FormData();
    formData.append('applyBy', firstStepFormData.applyBy);
    formData.append('emailApplyMember', firstStepFormData.emailApplyMember);
    formData.append('status', firstStepFormData.status);
    formData.append('profilephoto', firstStepFormData.profileImage);
    formData.append('passportImgFront', firstStepFormData.passportImageFront);
    formData.append("passportImgBack", firstStepFormData.passportImageBack);
    formData.append("titleadult1", firstStepFormData.titleadult1);
    formData.append("titleadult2", firstStepFormData.titleadult2);
    formData.append("titleadult3", firstStepFormData.titleadult3);
    formData.append("titleadult4", firstStepFormData.titleadult4);
    formData.append("titleadult5", firstStepFormData.titleadult5);
    formData.append("titleadult6", firstStepFormData.titleadult6);
    formData.append("titleadult7", firstStepFormData.titleadult7);
    formData.append("titleadult8", firstStepFormData.titleadult8);
    formData.append("titleadult9", firstStepFormData.titleadult9);
    formData.append("firstnameadult1", firstStepFormData.firstnameadult1);
    formData.append("firstnameadult2", firstStepFormData.firstnameadult2);
    formData.append("firstnameadult3", firstStepFormData.firstnameadult3);
    formData.append("firstnameadult4", firstStepFormData.firstnameadult4);
    formData.append("firstnameadult5", firstStepFormData.firstnameadult5);
    formData.append("firstnameadult6", firstStepFormData.firstnameadult6);
    formData.append("firstnameadult7", firstStepFormData.firstnameadult7);
    formData.append("firstnameadult8", firstStepFormData.firstnameadult8);
    formData.append("firstnameadult9", firstStepFormData.firstnameadult9);
    formData.append("lastnameadult1", firstStepFormData.lastnameadult1);
    formData.append("lastnameadult2", firstStepFormData.lastnameadult2);
    formData.append("lastnameadult3", firstStepFormData.lastnameadult3);
    formData.append("lastnameadult4", firstStepFormData.lastnameadult4);
    formData.append("lastnameadult5", firstStepFormData.lastnameadult5);
    formData.append("lastnameadult6", firstStepFormData.lastnameadult6);
    formData.append("lastnameadult7", firstStepFormData.lastnameadult7);
    formData.append("lastnameadult8", firstStepFormData.lastnameadult8);
    formData.append("lastnameadult9", firstStepFormData.lastnameadult9);
    formData.append("dobadult1", firstStepFormData.dobadult1);
    formData.append("dobadult2", firstStepFormData.dobadult2);
    formData.append("dobadult3", firstStepFormData.dobadult3);
    formData.append("dobadult4", firstStepFormData.dobadult4);
    formData.append("dobadult5", firstStepFormData.dobadult5);
    formData.append("dobadult6", firstStepFormData.dobadult6);
    formData.append("dobadult7", firstStepFormData.dobadult7);
    formData.append("dobadult8", firstStepFormData.dobadult8);
    formData.append("dobadult9", firstStepFormData.dobadult9);
    formData.append("nationalityadult1", firstStepFormData.nationalityadult1);
    formData.append("nationalityadult2", firstStepFormData.nationalityadult2);
    formData.append("nationalityadult3", firstStepFormData.nationalityadult3);
    formData.append("nationalityadult4", firstStepFormData.nationalityadult4);
    formData.append("nationalityadult5", firstStepFormData.nationalityadult5);
    formData.append("nationalityadult6", firstStepFormData.nationalityadult6);
    formData.append("nationalityadult7", firstStepFormData.nationalityadult7);
    formData.append("nationalityadult8", firstStepFormData.nationalityadult8);
    formData.append("nationalityadult9", firstStepFormData.nationalityadult9);
    formData.append("genderadult1", firstStepFormData.genderadult1);
    formData.append("genderadult2", firstStepFormData.genderadult2);
    formData.append("genderadult3", firstStepFormData.genderadult3);
    formData.append("genderadult4", firstStepFormData.genderadult4);
    formData.append("genderadult5", firstStepFormData.genderadult5);
    formData.append("genderadult6", firstStepFormData.genderadult6);
    formData.append("genderadult7", firstStepFormData.genderadult7);
    formData.append("genderadult8", firstStepFormData.genderadult8);
    formData.append("genderadult9", firstStepFormData.genderadult9);
    formData.append("phonenumberadult1", firstStepFormData.phonenumberadult1);
    formData.append("phonenumberadult2", firstStepFormData.phonenumberadult2);
    formData.append("phonenumberadult3", firstStepFormData.phonenumberadult3);
    formData.append("phonenumberadult4", firstStepFormData.phonenumberadult4);
    formData.append("phonenumberadult5", firstStepFormData.phonenumberadult5);
    formData.append("phonenumberadult6", firstStepFormData.phonenumberadult6);
    formData.append("phonenumberadult7", firstStepFormData.phonenumberadult7);
    formData.append("phonenumberadult8", firstStepFormData.phonenumberadult8);
    formData.append("phonenumberadult9", firstStepFormData.phonenumberadult9);
    formData.append("emailadult1", firstStepFormData.emailadult1);
    formData.append("emailadult2", firstStepFormData.emailadult2);
    formData.append("emailadult3", firstStepFormData.emailadult3);
    formData.append("emailadult4", firstStepFormData.emailadult4);
    formData.append("emailadult5", firstStepFormData.emailadult5);
    formData.append("emailadult6", firstStepFormData.emailadult6);
    formData.append("emailadult7", firstStepFormData.emailadult7);
    formData.append("emailadult8", firstStepFormData.emailadult8);
    formData.append("emailadult9", firstStepFormData.emailadult9);
    formData.append("passportnumberadult1", firstStepFormData.passportnumberadult1);
    formData.append("passportnumberadult2", firstStepFormData.passportnumberadult2);
    formData.append("passportnumberadult3", firstStepFormData.passportnumberadult3);
    formData.append("passportnumberadult4", firstStepFormData.passportnumberadult4);
    formData.append("passportnumberadult5", firstStepFormData.passportnumberadult5);
    formData.append("passportnumberadult6", firstStepFormData.passportnumberadult6);
    formData.append("passportnumberadult7", firstStepFormData.passportnumberadult7);
    formData.append("passportnumberadult8", firstStepFormData.passportnumberadult8);
    formData.append("passportnumberadult9", firstStepFormData.passportnumberadult9);
    formData.append("titlechild1", firstStepFormData.titlechild1);
    formData.append("titlechild2", firstStepFormData.titlechild2);
    formData.append("titlechild3", firstStepFormData.titlechild3);
    formData.append("titlechild4", firstStepFormData.titlechild4);
    formData.append("titlechild5", firstStepFormData.titlechild5);
    formData.append("titlechild6", firstStepFormData.titlechild6);
    formData.append("titlechild7", firstStepFormData.titlechild7);
    formData.append("titlechild8", firstStepFormData.titlechild8);
    formData.append("firstnamechild1", firstStepFormData.firstnamechild1);
    formData.append("firstnamechild2", firstStepFormData.firstnamechild2);
    formData.append("firstnamechild3", firstStepFormData.firstnamechild3);
    formData.append("firstnamechild4", firstStepFormData.firstnamechild4);
    formData.append("firstnamechild5", firstStepFormData.firstnamechild5);
    formData.append("firstnamechild6", firstStepFormData.firstnamechild6);
    formData.append("firstnamechild7", firstStepFormData.firstnamechild7);
    formData.append("firstnamechild8", firstStepFormData.firstnamechild8);
    formData.append("lastnamechild1", firstStepFormData.lastnamechild1);
    formData.append("lastnamechild2", firstStepFormData.lastnamechild2);
    formData.append("lastnamechild3", firstStepFormData.lastnamechild3);
    formData.append("lastnamechild4", firstStepFormData.lastnamechild4);
    formData.append("lastnamechild5", firstStepFormData.lastnamechild5);
    formData.append("lastnamechild6", firstStepFormData.lastnamechild6);
    formData.append("lastnamechild7", firstStepFormData.lastnamechild7);
    formData.append("lastnamechild8", firstStepFormData.lastnamechild8);
    formData.append("dobchild1", firstStepFormData.dobchild1);
    formData.append("dobchild2", firstStepFormData.dobchild2);
    formData.append("dobchild3", firstStepFormData.dobchild3);
    formData.append("dobchild4", firstStepFormData.dobchild4);
    formData.append("dobchild5", firstStepFormData.dobchild5);
    formData.append("dobchild6", firstStepFormData.dobchild6);
    formData.append("dobchild7", firstStepFormData.dobchild7);
    formData.append("dobchild8", firstStepFormData.dobchild8);
    formData.append("nationalitychild1", firstStepFormData.nationalitychild1);
    formData.append("nationalitychild2", firstStepFormData.nationalitychild2);
    formData.append("nationalitychild3", firstStepFormData.nationalitychild3);
    formData.append("nationalitychild4", firstStepFormData.nationalitychild4);
    formData.append("nationalitychild5", firstStepFormData.nationalitychild5);
    formData.append("nationalitychild6", firstStepFormData.nationalitychild6);
    formData.append("nationalitychild7", firstStepFormData.nationalitychild7);
    formData.append("nationalitychild8", firstStepFormData.nationalitychild8);
    formData.append("genderchild1", firstStepFormData.genderchild1);
    formData.append("genderchild2", firstStepFormData.genderchild2);
    formData.append("genderchild3", firstStepFormData.genderchild3);
    formData.append("genderchild4", firstStepFormData.genderchild4);
    formData.append("genderchild5", firstStepFormData.genderchild5);
    formData.append("genderchild6", firstStepFormData.genderchild6);
    formData.append("genderchild7", firstStepFormData.genderchild7);
    formData.append("genderchild8", firstStepFormData.genderchild8);
    formData.append("phonenumberchild1", firstStepFormData.phonenumberchild1);
    formData.append("phonenumberchild2", firstStepFormData.phonenumberchild2);
    formData.append("phonenumberchild3", firstStepFormData.phonenumberchild3);
    formData.append("phonenumberchild4", firstStepFormData.phonenumberchild4);
    formData.append("phonenumberchild5", firstStepFormData.phonenumberchild5);
    formData.append("phonenumberchild6", firstStepFormData.phonenumberchild6);
    formData.append("phonenumberchild7", firstStepFormData.phonenumberchild7);
    formData.append("phonenumberchild8", firstStepFormData.phonenumberchild8);
    formData.append("emailchild1", firstStepFormData.emailchild1);
    formData.append("emailchild2", firstStepFormData.emailchild2);
    formData.append("emailchild3", firstStepFormData.emailchild3);
    formData.append("emailchild4", firstStepFormData.emailchild4);
    formData.append("emailchild5", firstStepFormData.emailchild5);
    formData.append("emailchild6", firstStepFormData.emailchild6);
    formData.append("emailchild7", firstStepFormData.emailchild7);
    formData.append("emailchild8", firstStepFormData.emailchild8);
    formData.append("passportnumberchild1", firstStepFormData.passportnumberchild1);
    formData.append("passportnumberchild2", firstStepFormData.passportnumberchild2);
    formData.append("passportnumberchild3", firstStepFormData.passportnumberchild3);
    formData.append("passportnumberchild4", firstStepFormData.passportnumberchild4);
    formData.append("passportnumberchild5", firstStepFormData.passportnumberchild5);
    formData.append("passportnumberchild6", firstStepFormData.passportnumberchild6);
    formData.append("passportnumberchild7", firstStepFormData.passportnumberchild7);
    formData.append("passportnumberchild9", firstStepFormData.passportnumberchild8);
    formData.append('visaType', firstStepFormData.visaType);
    formData.append("purposeOfVisa", firstStepFormData.purposeOfVisa);
    formData.append('travellDocs', firstStepFormData.travellDocs);
    formData.append('documentNumbers', firstStepFormData.documentNumbers);
    formData.append("placeOfIssue", firstStepFormData.placeOfIssue);
    formData.append("previoousDocNumber", firstStepFormData.previoousDocNumber);
    formData.append('passportIssuenceDate', firstStepFormData.passportIssuenceDate);
    formData.append('passportInquiryDate', firstStepFormData.passportInquiryDate);
    formData.append("addressTo", firstStepFormData.addressTo);
    formData.append('postCodeTo', firstStepFormData.postCodeTo);
    formData.append('cityTo', firstStepFormData.cityTo);
    formData.append("addressFrom", firstStepFormData.addressFrom);
    formData.append('postCodeFrom', firstStepFormData.postCodeFrom);
    formData.append('cityFrom', firstStepFormData.cityFrom);
    formData.append("province", firstStepFormData.province);
    formData.append('country', firstStepFormData.country);
    formData.append('currentcountry', firstStepFormData.currentcountry);
    formData.append('flightTicketsDocs', firstStepFormData.flightTicketsDocs);
    formData.append("accommadationDocs", firstStepFormData.accommadationDocs);
    formData.append("otherDocs", firstStepFormData.otherDocs);
    formData.append('entryExistDocs', firstStepFormData.entryExistDocs);


    axios.post("http://localhost:4000/api/visaapply", formData).then((res) => {

      const { message, success, result } = res.data
      if (success) {
        Swal.fire(
          message
        )
      } else {
        alert(message)
      }
    })

  }


  return (
    <form>
      <div className="row">
        <div className="col-md-12">
          <p className="text-left mt-3 text-primary">
            PARTICULRS OF APPLICATIONS-656588/HJYTR
          </p>
          <hr className="mt-0" />
        </div>
        <div className="col-md-12 pb-2">
          <p className="text-warning">PARTICULRS OF PHOTO</p>
          <hr className="mt-0" />
        </div>
        <div className="col-md-6">
          <div className="profile-container">
            <div className="text-center">
              {profileImg == undefined ? (
                <i class="fas fa-user-large fa-6x profile"></i>
              ) : profileImg.split(",").length === 0 ? (
                ""
              ) : (
                <img src={profileImg} className="w-50 h-50" />
              )}
            </div>
          </div>
          <div class="file mt-4 text-center">
            <label htmlFor="input-file">
              <i class="fas fa-arrow-up-from-bracket text-primary"></i>
              &nbsp;Select photo
            </label>
            <input id="input-file"type="file"name="profilephoto"accept="image/png, image/jpeg"onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-container">
            <div className="text-center">
              {passportImgFront == undefined ? (
                <i class="fas fa-file-arrow-up fa-6x passport"></i>
              ) : passportImgFront.split(",").length === 0 ? (
                ""
              ) : (
                <img src={passportImgFront} className="w-50 h-50" />
              )}
            </div>
          </div>
          <div class="passport-file mt-4 text-center">
            <label htmlFor="passport-input-file">
              <i class="fas fa-arrow-up-from-bracket text-primary"></i>
              &nbsp;Select passport Front Side
            </label>
            <input id="passport-input-file"type="file"accept="image/png, image/jpeg"name="passportImgFront"onChange={handleChangePassportFront}/>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="profile-container">
            <div className="text-center">
              {passportImgBack == undefined ? (
                <i class="fas fa-file-arrow-up fa-6x passport"></i>
              ) : passportImgBack.split(",").length === 0 ? (
                ""
              ) : (
                <img src={passportImgBack} className="w-50 h-50" />
              )}
            </div>
          </div>
          <div class="passport-file mt-4 text-center">
            <label htmlFor="passportback-input-file">
              <i class="fas fa-arrow-up-from-bracket text-primary"></i>
              &nbsp;Select passport Back Side
            </label>
            <input id="passportback-input-file"type="file"accept="image/png, image/jpeg"name="passportImgBack"onChange={handleChangePassportBack}
            />
          </div>
        </div>

        <div className="col-md-12 mt-5 pb-2">
          <hr className="mt-0" />
          <p className="text-warning">PARTICULRS OF APPLICANT</p>
          <hr className="mt-0 my-hr" />

          <div className="row">
            {Array.from(Array(addAdult)).map((c, index) => {
              return (
                <div key={c} className="col-md-12">
                  <hr className="mt-3" />
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Title <span className="text-danger">*</span>
                      </strong>
                      <select name={["titleadult" + addAdult]} onChange={firstStepHandle} className="form-control">
                        <option>Title</option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                      </select>
                      <p className="error">{error.titleadult}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        First Name <span className="text-danger">*</span>
                      </strong>
                      <input type="text" placeholder="First Name" className="form-control" name={["firstnameadult" + addAdult]} onChange={firstStepHandle} />
                      <p className="error">{error.firstnameadult}</p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Last Name <span className="text-danger">*</span>
                      </strong>
                      <input type="text" placeholder="Last Name" className="form-control" name={["lastnameadult" + addAdult]} onChange={firstStepHandle} />
                      <p className="error">{error.lastnameadult}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Date of birth <span className="text-danger">*</span>
                      </strong>
                      <input type="date" placeholder="date of birth" className="form-control" name={["dobadult" + addAdult]} onChange={firstStepHandle} />
                      <p className="error">{error.dobadult}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Nationality <span className="text-danger">*</span>
                      </strong>
                      <select id="" className="form-control" name={["nationalityadult" + addAdult]} onChange={firstStepHandle}>
                        <option value="">Select Nationality</option>
                        <option value="Indian" >Indian</option>
                        <option value="Canadian" >Canadian </option>
                      </select>
                      <p className="error">{error.nationalityadult}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Gender <span className="text-danger">*</span>
                      </strong>
                      <select name={["genderadult" + addAdult]} className="form-control" onChange={firstStepHandle}>
                        <option value="">Please Select</option>
                        <option value="Male">male </option>
                        <option value="Fenmale">female</option>
                        <option value="Others">Others</option>
                      </select>
                      <p className="error">{error.genderadult}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Phone number <span className="text-danger">*</span>
                      </strong>
                      <input type="number" className="form-control" placeholder="Phone number" name={["phonenumberadult" + addAdult]} onChange={firstStepHandle} />
                      <p className="error">{error.phonenumberadult}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Email<span className="text-danger">*</span>
                      </strong>
                      <input type="Email" className="form-control" placeholder="Email" name={["emailadult" + addAdult]} onChange={firstStepHandle} />
                      <p className="error">{error.emailadult}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Passport Number<span className="text-danger">*</span>
                      </strong>
                      <input type="text" className="form-control" placeholder="Passport Number" name={["passportnumberadult" + addAdult]} onChange={firstStepHandle} />
                      <p className="error">{error.passportnumberadult}</p>
                    </div>
                    <div className="col-md-6 delete-more-btn mt-4">
                      {addAdult == 1 ? (
                        ""
                      ) : (
                        <i
                          key={index}
                          className="far fa-trash-can fa-2x close-more-button text-danger p-1 cursor-pointer"
                          title="Delete the Item"
                          onClick={(addAdult) => {
                            deleteMore(addAdult);
                          }}
                        ></i>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {addAdult < 9 ? (
            <div className="row col-md-12 pb-2 mt-1">
              <div className="text-end add-more-button">
                <button
                  type="button"
                  className="btn btn-success border-0"
                  onClick={handleClick}
                >
                  <i className="fas fa-user-plus"></i>&nbsp;
                  <small>Add Adult</small>
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="row">
            {Array.from(Array(addChild)).map((c, index) => {
              return (
                <div key={c} className="col-md-12">
                  <hr className="mt-3" />
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Title <span className="text-danger">*</span>
                      </strong>
                      <select name={["titlechild" + addChild]} onChange={firstStepHandle} className="form-control">
                        <option>Title</option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                      </select>
                      <p className="error">{error.titlechild}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        First Name <span className="text-danger">*</span>
                      </strong>
                      <input type="text" placeholder="First Name" className="form-control" name={["firstnamechild" + addChild]} onChange={firstStepHandle} />
                      <p className="error">{error.firstnamechild}</p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Last Name <span className="text-danger">*</span>
                      </strong>
                      <input type="text" placeholder="Last Name" name={["lastnamechild" + addChild]} className="form-control" onChange={firstStepHandle} />
                      <p className="error">{error.lastnamechild}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Date of birth <span className="text-danger">*</span>
                      </strong>
                      <input type="date" placeholder="date of birth" className="form-control" name={["dobchild" + addChild]} onChange={firstStepHandle} />
                      <p className="error">{error.childdob}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Nationality <span className="text-danger">*</span>
                      </strong>
                      <select className="form-control" name={["nationalitychild" + addChild]} onChange={firstStepHandle}>
                        <option value="">Select nationality</option>
                        <option value="Indian" >Indian</option>
                        <option value="Canadian" >Canadian</option>
                      </select>
                      <p className="error">{error.childnationality}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Gender <span className="text-danger">*</span>
                      </strong>
                      <select name={["genderchild" + addChild]} className="form-control" onChange={firstStepHandle} >
                        <option value="">Please Select</option>
                        <option value="Male">male </option>
                        <option value="Fenmale">female</option>
                        <option value="Others">Others</option>
                      </select>
                      <p className="error">{error.genderchild}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Phone number <span className="text-danger">*</span>
                      </strong>
                      <input type="number" className="form-control" placeholder="Phone number" name={["phonenumberchild" + addChild]} onChange={firstStepHandle} />
                      <p className="error">{error.phonenumberchild}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Email<span className="text-danger">*</span>
                      </strong>
                      <input type="Email" className="form-control" placeholder="Email" name={["emailchild" + addChild]} onChange={firstStepHandle} />
                      <p className="error">{error.emailchild}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong htmlFor="">
                        Passport Number<span className="text-danger">*</span>
                      </strong>
                      <input type="text" className="form-control" placeholder="Passport Number" name={["passportnumberchild" + addChild]} onChange={firstStepHandle} />
                      <p className="error">{error.passportnumberchild}</p>
                    </div>
                    <div className="col-md-6 delete-more-btn mt-4">
                      {addChild == 0 ? (
                        ""
                      ) : (
                        <i key={index} className="far fa-trash-can fa-2x close-more-button text-danger p-1 cursor-pointer" title="Delete the Item" onClick={(addChild) => { deleteMoreChild(addChild) }}></i>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="mt-2 my-hr" />
          {
            addChild < 8 ?
              <div className="row col-md-12 pb-2 mt-1">
                <div className="text-end add-more-button">
                  <button type="button" className="btn btn-success border-0" onClick={handleClickMoreChild}>
                    <i className="fas fa-user-plus"></i>&nbsp;
                    <small>Add Child</small>
                  </button>
                </div>
              </div>
              :
              ""
          }
          <div className="col-md-12 mt-3 pb-4">
            <hr className="mt-0" />
            <p className="text-warning">
              VISA DETAILS <span className="text-danger">*</span>
            </p>
            <hr className="mt-0 my-hr" />
            <div className="row">
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  VISA Type <span className="text-danger">*</span>
                </strong>
                <select className="form-control" name="visaType" onChange={firstStepHandle}>
                  <option value="">Please Select</option>
                  <option value="Tourist Visa">Tourist Visa </option>
                  <option value="Business Visa">Business Visa </option>
                  <option value="Work Visa">Work Visa </option>
                  <option value="Transit Visa">Transit Visa </option>
                </select>
                <p className="error">{error.visaType}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Purpose Of Stay/Category{" "}
                  <span className="text-danger">*</span>
                </strong>
                <select className="form-control" name="purposeOfVisa" onChange={firstStepHandle}>
                  <option value="">Please Select</option>
                  <option value="Business">Business </option>
                  <option value="Tourist">Tourist </option>
                </select>
                <p className="error">{error.purposeOfVisa}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 pb-4">
            <hr className="mt-0" />
            <p className="text-warning">
              PARTICULARS OF PASSPORT/TRAVELL DOCUMENT
            </p>
            <hr className="mt-0 my-hr" />
            <div className="row">
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Travell Documents <span className="text-danger">*</span>
                </strong>
                <select className="form-control" name="travellDocs" value={firstStepFormData.travellDocs} onChange={firstStepHandle} >
                  <option value="">Please Select</option>
                  <option value="Documents">Documents </option>
                </select>
                <p className="error">{error.travellDocs}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Document Number <span className="text-danger">*</span>
                </strong>
                <input type="number" className="form-control" name="documentNumbers" value={firstStepFormData.documentNumbers} onChange={firstStepHandle} />
                <p className="error">{error.documentNumbers}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Place/Country Of Issue <span className="text-danger">*</span>
                </strong>
                <select name="placeOfIssue" className="form-control" onChange={firstStepHandle}>
                  <option value="">Please Select</option>
                  <option value="India">India </option>
                </select>
                <p className="error">{error.placeOfIssue}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Previous Document Number
                  <small>
                    (Please fill your current passport if don't have an old
                    passport number) <span className="text-danger">*</span>
                  </small>
                </strong>
                <input type="number" className="form-control" name="previoousDocNumber" value={firstStepFormData.previoousDocNumber} onChange={firstStepHandle} />
                <p className="error">{error.previoousDocNumber}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Passport Issueance Date <span className="text-danger">*</span>
                </strong>
                <input type="date" className="form-control" name="passportIssuenceDate" onChange={firstStepHandle} />
                <p className="error">{error.passportIssuenceDate}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Passport Inquiry Date <span className="text-danger">*</span>
                </strong>
                <input type="date" className="form-control" name="passportInquiryDate" onChange={firstStepHandle} />
                <p className="error">{error.passportInquiryDate}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 pb-4">
            <hr className="mt-0" />
            <p className="text-warning">ADDRESS IN MALAYSIA</p>
            <hr className="mt-0 my-hr" />
            <div className="row">
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Address <span className="text-danger">*</span>
                </strong>
                <textarea className="form-control" rows="1" name="addressTo" onChange={firstStepHandle}></textarea>
                <p className="error">{error.addressTo}</p>
              </div>

              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  PostCode <span className="text-danger">*</span>
                </strong>
                <input type="number" className="form-control" name="postCodeTo" onChange={firstStepHandle} />
                <p className="error">{error.postCodeTo}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  City <span className="text-danger">*</span>
                </strong>
                <input type="text" className="form-control" name="cityTo" onChange={firstStepHandle} />
                <p className="error">{error.cityTo}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 pb-4">
            <hr className="mt-0" />
            <p className="text-warning">CURRENT LOCAL ADDRESS</p>
            <hr className="mt-0 my-hr" />
            <div className="row">
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Address <span className="text-danger">*</span>
                </strong>
                <textarea className="form-control" rows="1" name="addressFrom" value={firstStepFormData.addressFrom} onChange={firstStepHandle}></textarea>
                <p className="error">{error.addressFrom}</p>
              </div>

              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  PostCode <span className="text-danger">*</span>
                </strong>
                <input type="number" className="form-control" name="postCodeFrom" onChange={firstStepHandle} />
                <p className="error">{error.postCodeFrom}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  City <span className="text-danger">*</span>
                </strong>
                <input type="text" className="form-control" name="cityFrom" value={firstStepFormData.cityFrom} onChange={firstStepHandle} />
                <p className="error">{error.cityFrom}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong htmlFor="">
                  Province/State <span className="text-danger">*</span>
                </strong>
                <select name="province" className="form-control" value={firstStepFormData.province} onChange={firstStepHandle}>
                  <option value="">Please Select</option>
                  <option value="State">State </option>
                </select>
                <p className="error">{error.province}</p>
              </div>
              <div className="col-md-6 mb-3">
                <strong >
                  Country <span className="text-danger">*</span>
                </strong>
                <select name="currentcountry" className="form-control" onChange={firstStepHandle}>
                  <option >Please Select</option>
                  <option value="India">India </option>
                </select>
                <p className="error">{error.currentcountry}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <hr className="mt-0" />
            <p className="text-warning pb-0 mb-1">UPLOAD DOCUMENTS</p>
            <i class="fas fa-circle-exclamation text-success mb-3"></i>
            <small className="text-success">
              {" "}
              &nbsp;Please ensure that your document's name does not have
              special charatcter and spacing.{" "}
            </small>
            <hr className="mt-0 my-hr" />
            <div className="row pdf-file-doc">
              <div className="col-md-6 mb-5 text-center">
                <p className="bg-light p-2">
                  <i class="far fa-file"></i>
                  &nbsp;Flight Ticket
                </p>

                <div class=" mt-4">
                  <p>
                    Round Trip Flight Ticket{" "}
                    <span className="text-danger">*</span>
                  </p>
                  <input className="" type="file" accept="application/pdf" name="flightTicketsDocs" onChange={firstStepHandlePdf1} />
                </div>
              </div>

              <div className="col-md-6 mb-5 text-center">
                <p className="bg-light p-2 text-center">
                  <i class="far fa-file"></i>
                  &nbsp;Accommodation
                </p>
                <div class=" mt-4">
                  <p>
                    Accommadation Docs(".pdf"){" "}
                    <span className="text-danger">*</span>
                  </p>
                  <input className="" type="file" accept="application/pdf" name="accommadationDocs" onChange={firstStepHandlePdf2} />
                </div>
              </div>
              <div className="col-md-6 mb-5 text-center">
                <p className="bg-light p-2 text-center">
                  <i class="far fa-file"></i>&nbsp;Other
                </p>
                <div class=" mt-4">
                  <p>
                    Other Docs(".pdf") <span className="text-danger">*</span>
                  </p>
                  <input type="file" accept="application/pdf" name="accommadation" onChange={firstStepHandlePdf3} />
                </div>
              </div>
              <div className="col-md-6 mb-5 text-center">
                <p className="bg-light p-2 text-center">
                  <i class="far fa-file"></i>&nbsp;Last Visit Country
                </p>
                <div class="mt-4">
                  <p>
                    Entry and Exist Stamp(".pdf"){" "}
                    <span className="text-danger">*</span>
                  </p>
                  <input type="file" accept="application/pdf" name="entryExistDocs" onChange={firstStepHandlePdf4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-0" />
      </div>
      <div className="row mt-1 pb-3 d-flex justify-content-end">
        <div className="col-md-2 gx-1">
          <button className="btn multisteFooter-Button" onClick={() => { nevigate('/') }}>
            {" "}
            <i class="fas fa-house fa-sm"></i>&nbsp;Home
          </button>
        </div>
        <div className="col-md-2">
          <button
            className=" btn multisteFooter-Button bg-primary text-white"
            type="submit"
            onClick={subMitFirstStepForm}
          >
            Next <i class="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
