import React, { useEffect, useState } from "react";
//import here
// import { useCourseList } from "apicache";
import * as api from "../../apicache/api";
import { orgAPIs } from "../../apicache/api";
import { loginAPIs } from "../../apicache/api";
const BackendTest = () => {
  api.getOrgs().then((res) => console.log(JSON.stringify(res)));
  const create = () => {
    loginAPIs.signUp("mkim525@wisc.edu", "12341234", {
      korean_name: "김민창",
      kakaotalk_id: "galbros",
      phone_number: "60812341234",
      standing: "senior",
      wisc_id: "galbros",
    });
  };
  // const [orgs, setOrgs] = useState([]);
  // useEffect(() => {
  //   orgAPIs.getOrgs().then((res) => {
  //     setOrgs(res);
  //   });
  // }, []);

  //console.log(JSON.stringify(user));

  //example for using queries
  // const {
  //   data: { results: courseList, count: courseNumber },
  // } = useCourseList(page, coursePerPage);
  return (
    <div>
      BackendTest
      {/* you can replace the courseList,course.CourseName to test data that come as alist */}
      {/* {courseList.map((course, i) => (
        <div key={i}>{course.CourseName}</div>
      ))} */}
      {/* <div onClick={create}>fdsafsdfaasdf</div> */}
    </div>
  );
};

export default BackendTest;
