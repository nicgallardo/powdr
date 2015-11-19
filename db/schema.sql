DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS resorts CASCADE;
DROP TABLE IF EXISTS favorites;

CREATE TABLE users (
  id serial primary key,
  firstName varchar(40),
  lastName varchar(40),
  facebookId varchar(60)
);

CREATE TABLE resorts (
  id serial primary key,
  name varchar(80)
);

CREATE TABLE favorites (
  id serial primary key,
  user_id int references users(id) on delete cascade,
  resort_id int references resorts(id) on delete cascade
);