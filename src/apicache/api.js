import { supabase } from "../supabaseClient";
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

const organizations = {
  createOrg(name) {
    return insertTable("organizations", { name: name });
  },

  updateOrg(name, data) {
    return updateTable("organizations", { name: name }, data);
  },

  // danchu: query = 'short_name, full_name, short_description, id' (todo: add logo, background image)
  // bj: query = { id: id }
  getOrgs(query = undefined) {
    return getTable("orgs", query);
  },
};

export async function getMajors() {
  return getTable("majors");
}

export async function signUp(email, password, info) {
  const { korean_name, kakaotalk_id, phone_number } = info;
  if (email.slice(-8) !== "wisc.edu") {
    return;
  }
  const { user, session, signup_error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (signup_error) {
    throw signup_error;
  }

  const { insert_error } = await supabase.from("users").insert([
    {
      id: user.id,
      korean_name: korean_name,
      wisc_email: email,
      kakaotalk_id: kakaotalk_id,
      phone_number: phone_number,
    },
  ]);
  if (insert_error) {
    throw insert_error;
  }

  return { user: user, session: session };
}

export async function signIn(email, password) {
  return await supabase.auth.signIn({
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

// majors, orgs,
export async function getUserInfo(id) {
  // return getTable("users", { id: id });
  const { data, error } = await supabase.from("users").select(`org_users(id)`);
  return data;
}

export async function updateUser(id, data) {
  return updateTable("users", data, { id: id });
}

// supabase.auth.user()
//
export async function getLoggedInUserInfo() {
  return getUserInfo(supabase.auth.getUser().id);
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
