CREATE TABLE "users" (
  "id" varchar PRIMARY KEY,
  "korean_name" varchar NOT NULL,
  "wisc_email" varchar NOT NULL,
  "personal_email" varchar NOT NULL,
  "kakaotalk_id" varchar NOT NULL,
  "phone_number" varchar NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "country_code" int 
);

CREATE TABLE "organizations" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "wisc_email" varchar NOT NULL,
  "notion_link" varchar NOT NULL,
  "phone_number" int NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "country_code" int
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "date" DATE NOT NULL,
  "signup_link" varchar,
  "description" varchar,
  "location" varchar,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "org_id" int NOT NULL,
  "is_weekly" boolean
);

CREATE TABLE "board_member" (
  "id" SERIAL PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "org_id" int NOT NULL
);

CREATE TABLE "user_majors" (
  "id" SERIAL PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "major_id" int NOT NULL
);

CREATE TABLE "org_majors" (
  "id" SERIAL PRIMARY KEY,
  "org_id" int NOT NULL,
  "major_id" int NOT NULL
);

CREATE TABLE "majors" (
  "code" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL
);

ALTER TABLE "events" ADD FOREIGN KEY ("org_id") REFERENCES "organizations" ("id");

ALTER TABLE "board_member" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "board_member" ADD FOREIGN KEY ("org_id") REFERENCES "organizations" ("id");

ALTER TABLE "user_majors" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_majors" ADD FOREIGN KEY ("major_id") REFERENCES "majors" ("code");

ALTER TABLE "org_majors" ADD FOREIGN KEY ("org_id") REFERENCES "organizations" ("id");

ALTER TABLE "org_majors" ADD FOREIGN KEY ("major_id") REFERENCES "majors" ("code");
