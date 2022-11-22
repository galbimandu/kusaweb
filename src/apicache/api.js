import { supabase } from "../supabaseClient";

export const userAPIs = {
  getLoggedInUserInfo,
  updateUser,
  getUserInfo,
  getUserMajorsById,
  createBoardMember,
  createUserMajors,
  getUserOrgById,
};

export const orgAPIs = {
  createOrg,
  updateOrg,
  getOrgs,
};

export const metainfoAPIs = {
  getMajors,
};

export const loginAPIs = {
  signUp,
  signIn,
};

export const eventAPIs = {
  createEvent,
  updateEvent,
  getEvents,
};

export const uploadAPIs = {
  uploadImage,
  uploadUserProfileImage,
};

//const fs = require('fs');
export async function getTable(name, query = undefined) {
  const { data, error } = await supabase.from(name).select(query);
  if (error) {
    throw error;
  }
  return data;
}

export async function insertTable(name, data) {
  const { error } = await supabase.from(name).insert([data]);
  if (error) {
    throw error;
  }
}

export async function updateTable(name, update, match) {
  const { error } = await supabase.from(name).update(update).match(match);
  if (error) {
    throw error;
  }
}
export async function createOrg(name) {
  return insertTable("organizations", { name: name });
}
export async function updateOrg(name, data) {
  return updateTable("organizations", { name: name }, data);
}

// danchu: query = 'short_name, full_name, short_description, id' (todo: add logo, background image)
// bj: query = { id: id }
export async function getOrgs(query = undefined) {
  return getTable("organizations", query);
}

export async function getMajors() {
  return getTable("majors");
}

export async function signUp(email, password, info) {
  const { korean_name, kakaotalk_id, phone_number, standing, wisc_id } = info;
  if (email.slice(-8) !== "wisc.edu") {
    throw Error("Email must end with wisc.edu");
  }
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  }

  const insert = await supabase.from("users").insert([
    {
      id: data.user.id,
      korean_name: korean_name,
      wisc_email: email,
      kakaotalk_id: kakaotalk_id,
      phone_number: phone_number,
      standing: standing,
      wisc_id: wisc_id,
    },
  ]);
  if (insert.error) {
    throw insert.error;
  }

  return data;
}

export async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
}

export async function createEvent(data) {
  /*
      data = {
          name str, (NOT NULL)
          date DATE, (NOT NULL)
          signup_link str,
          description str,
          location" str,
          org_id int, (NOT NULL)
          is_weekly boolean
      }
      */
  return insertTable("events", data);
}

export async function updateEvent() {}

export async function getEvents(query = undefined) {
  return getTable("events", (query = undefined));
}

export async function createBoardMember(data) {
  /*
      data = {
          user_id: user_id (NOT NULL)
          org_id: org_id (NOT NULL)
      }
      */
  return insertTable("board_member", data);
}

export async function getBoardMembers(query = undefined) {
  return getTable("board_member", (query = undefined));
}

export async function createUserMajors(data) {
  return insertTable("user_majors", data);
}

export async function getUserMajors(query = undefined) {
  return getTable("user_majors", (query = undefined));
}

export async function createOrgMajors(data) {
  return insertTable("org_majors", data);
}

export async function getOrgMajors(query = undefined) {
  return getTable("org_majors", (query = undefined));
}

export async function getUserMajorsById(id) {
  const res_user_majors = await supabase
    .from("user_majors")
    .select("major_id")
    .eq("user_id", id);
  if (res_user_majors.error) {
    throw res_user_majors.error;
  }

  let user_major_ids = [];
  for (var key in res_user_majors.data) {
    user_major_ids.push(res_user_majors.data[key].major_id);
  }

  const major_res = await supabase
    .from("majors")
    .select("name")
    .in("id", user_major_ids);
  if (major_res.error) {
    throw major_res.error;
  }
  let majors = [];
  for (var key in major_res.data) {
    majors.push(major_res.data[key].name);
  }
  return majors;
}

export async function getUserOrgById(id) {
  const res_org_users = await supabase
    .from("org_users")
    .select("org_id")
    .eq("id", id);
  if (res_org_users.error) {
    throw res_org_users.error;
  }

  let user_org_ids = [];
  for (var key in res_org_users.data) {
    user_org_ids.push(res_org_users.data[key].org_id);
  }

  const org_res = await supabase
    .from("organizations")
    .select()
    .in("id", user_org_ids);
  if (org_res.error) {
    throw org_res.error;
  }
  let orgs = [];
  for (var key in org_res.data) {
    orgs.push(org_res.data[key]);
  }
  return orgs;
}

export async function getBoardOrgById(id) {
  const res_org_users = await supabase
    .from("board_member")
    .select("org_id")
    .eq("user_id", id);
  if (res_org_users.error) {
    throw res_org_users.error;
  }

  let user_org_ids = [];
  for (var key in res_org_users.data) {
    user_org_ids.push(res_org_users.data[key].org_id);
  }

  const org_res = await supabase
    .from("organizations")
    .select()
    .in("id", user_org_ids);
  if (org_res.error) {
    throw org_res.error;
  }
  let orgs = [];
  for (var key in org_res.data) {
    orgs.push(org_res.data[key]);
  }
  return orgs;
}

// majors, orgs,
export async function getUserInfo(id) {
  const { data, error } = await supabase.from("users").select().eq("id", id);
  if (error) {
    throw error;
  }
  let info = { ...data[0] };
  info.majors = await getUserMajorsById(id).then((result) => result);
  info.orgs = await getUserOrgById(id).then((result) => result);
  info.board_orgs = await getBoardOrgById(id).then((result) => result);
  return info;
}

export async function updateUser(id, data) {
  return updateTable("users", data, { id: id });
}

// supabase.auth.user()
//
export async function getLoggedInUserInfo() {
  const res = await supabase.auth.getUser();
  const userData = await getUserInfo(res.data.user.id);
  return userData[0];
}

// org list: logo, background image, short_name, full name, short_description, id

// org id

// signup: wisc email, korean name, us phone number, pw, personal email, major, student number

// login

// org: signup, edit,

// Events

//

export async function uploadImage(
  file_path,
  bucket_path,
  options = undefined,
  bucket = "kusaweb-bucket"
) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(bucket_path, file_path, options);
  if (error) {
    throw error;
  }
  return data;
}

export async function uploadUserProfileImage(file_path) {
  // TODO: make sure file is actually image + size is reasonable
  // const stat = fs.stat(file_path, (err, stats) => {
  //     if (err) {
  //         throw err;
  //     }
  // });

  // if(stat.size > 1048576) {
  //     throw Error("File is bigger than 5 megabytes.");
  // }

  //const bucket_path = `user_images/${supabase.auth.getUser().id}.${file_path.split('.').pop()}`;
  const bucket_path = `user_images/test-id12312321.${file_path
    .split(".")
    .pop()}`;

  const data = uploadImage(file_path, bucket_path, { upsert: true });
  return updateUser(supabase.auth.getUser().id, { img_url: data.path });
}
