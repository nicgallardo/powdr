DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE users (
  id serial primary key,
  firstName varchar(40),
  lastName varchar(40),
  facebookId varchar(60)
);

CREATE TABLE favorites (
  id serial primary key,
  facebook_id varchar(60),
  resort_id varchar(4)
);
