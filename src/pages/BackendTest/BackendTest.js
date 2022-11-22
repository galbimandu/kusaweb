import React, { useEffect, useState } from "react";
//import here
// import { useCourseList } from "apicache";
import * as api from "../../apicache/api";
import { orgAPIs } from "../../apicache/api";
const BackendTest = () => {
  api.getUserInfo("11111-11111-11111-11111").then((res) => console.log(res));
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
    </div>
  );
};

export default BackendTest;
