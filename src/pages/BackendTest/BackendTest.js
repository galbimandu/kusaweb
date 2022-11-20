import React from "react";
//import here
// import { useCourseList } from "apicache";
import * as api from "../../apicache/api";

const BackendTest = async () => {
  const majors = await api.getMajors();
  console.log(majors);
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
