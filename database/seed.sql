DROP DATABASE IF EXISTS wiki_db;

CREATE DATABASE wiki_db;

\connect user_db;

CREATE TABLE IF NOT EXISTS articles
(id BIGSERIAL PRIMARY KEY, title VARCHAR(255), post_date (VARCHAR 10) wiki_text TEXT);

CREATE TABLE IF NOT EXISTS comments
(id BIGSERIAL PRIMARY KEY, comment_text TEXT, comment_id FOREIGN KEY REFERENCES articles(id));


INSERT INTO articles (title, post_date, wiki_text)
VALUES
('Things I Learned Today',
  '3/31/17',
  'Mutsu was the second of two Nagato-class dreadnought battleships built for the Imperial Japanese Navy at the end of World War I. Named after Mutsu Province, the ship was launched on 31 May 1920. In 1923, a year after commissioning, she carried supplies for the survivors of the Great Kantō earthquake. The ship was modernised in the mid 1930s with improvements to her armour and machinery, and a rebuilt superstructure in the pagoda mast style. Other than participating in the battles of Midway and the Eastern Solomons in 1942, where she saw no significant combat, Mutsu spent most of the first year of the Pacific War in training. She returned to Japan in early 1943. That June, one of her aft magazines detonated while she was at anchor, sinking the ship with the loss of 1,121 crew and visitors. The navy conducted a perfunctory investigation into the cause of her loss, concluded that it was the work of a disgruntled crewmember, and dispersed the survivors in an attempt to conceal the sinking within Japan. Much of the wreck was salvaged after the war and many of its artefacts and relics are on display in Japanese museums.'
  ');
  ('Did You Know?',
    '4/1/17',
    'Carnation, Lily, Lily, Rose is an oil painting on canvas completed by the Anglo-American painter John Singer Sargent between 1885 and 1886. It depicts two small children who are lighting paper lanterns in a garden strewn with pink roses, accents of yellow carnations and tall white lilies. The work received a mixed reception at the Royal Academy Summer Exhibition. It is now displayed at Tate Britain.
    ');


INSERT INTO comments (comment_text, comment_id)
VALUES ('I remember seeing this painting in the museum. loved it!','' );
