import { supabase } from "../supabaseClient";

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

export async function createOrg(name) {
  return insertTable("organizations", { name: name });
}

export async function updateOrg(name, data) {
  return updateTable("organizations", { name: name }, data);
}

export async function getOrgs(query = undefined) {
  return getTable("orgs", query);
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

// signup: wisc email, korean name, us phone number, pw, personal email, major, student number

// login

// org: signup, edit,

// Events
