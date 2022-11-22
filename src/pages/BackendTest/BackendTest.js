import React from "react";
//import here
// import { useCourseList } from "apicache";
import * as api from "../../apicache/api";

const BackendTest = () => {
  api.getUserInfo(1).then((res) => console.log(res));
  // console.log(
  //   api.signUp("ko@wisc.edu", "password12", {
  //     korean_name: "고한별",
  //     kakaotalk_id: "randomid",
  //     phone_number: "111-111-1111",
  //     standing: "senior",
  //   })
  // );
  //console.log(api.getMajors());

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
