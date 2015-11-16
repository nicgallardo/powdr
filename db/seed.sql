DELETE FROM users;
INSERT INTO
  users
VALUES
  ( default, 'Kolbey', 'Pruitt', 'facebookIDcodeThingy'),
  ( default, 'Nic', 'gallardo', 'facebookIDcodeThingy'),
  ( default, 'Nick', 'Jones', 'facebookIDcodeThingy'),
  ( default, 'Paul', 'Siskind', 'facebookIDcodeThingy');

INSERT INTO
  resorts
VALUES
  ( default, 'Copper Mountain'),
  ( default, 'Vail'),
  ( default, 'Breckenridge'),
  ( default, 'Winter Park'),
  ( default, 'Powderhorn');


INSERT INTO
  favorites
VALUES
  ( default, (SELECT id FROM users WHERE firstName = 'Kolbey'), (SELECT id FROM resorts WHERE name = 'Copper Mountain')),
  ( default, (SELECT id FROM users WHERE firstName = 'Nic'), (SELECT id FROM resorts WHERE name = 'Vail')),
  ( default, (SELECT id FROM users WHERE firstName = 'Nick'), (SELECT id FROM resorts WHERE name = 'Breckenridge')),
  ( default, (SELECT id FROM users WHERE firstName = 'Paul'), (SELECT id FROM resorts WHERE name = 'Copper Mountain')),
  ( default, (SELECT id FROM users WHERE firstName = 'Kolbey'), (SELECT id FROM resorts WHERE name = 'Vail')),
  ( default, (SELECT id FROM users WHERE firstName = 'Nic'), (SELECT id FROM resorts WHERE name = 'Winter Park'));
