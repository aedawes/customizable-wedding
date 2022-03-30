CREATE TABLE "accounts" (
  "account_id" varchar(36) NOT NULL,
  "username" varchar(40) NOT NULL,
  "password"  varchar(80) NOT NULL,
  PRIMARY KEY ("account_id")
);

-- CREATE INDEX "accounts_username" ON "accounts" ("username");

ALTER TABLE "accounts"
ADD CONSTRAINT "accounts_username" UNIQUE ("username");

-- Session

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
CREATE INDEX "IDX_session_expire" ON "session" ("expire");


-- Replicate database into a test database

CREATE TABLE "forms" (
  userid varchar(36) NOT NULL,
  coupleName varchar NOT NULL,
  addressOne varchar NOT NULL,
  addressTwo varchar,
  addRegistryLink varchar NOT NULL,
  PRIMARY KEY (coupleName),
  CONSTRAINT fk_list FOREIGN KEY (userid) REFERENCES accounts(account_id) ON DELETE CASCADE;
);