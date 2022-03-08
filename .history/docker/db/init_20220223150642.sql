CREATE TABLE "accounts" (
  "account_id" character(36) NOT NULL,
  "username" character varying(40) NOT NULL,
  "password" character varying(80) NOT NULL,
  PRIMARY KEY ("account_id")
);
CREATE INDEX "accounts_username" ON "accounts" ("username");

-- Replicate database into a test database