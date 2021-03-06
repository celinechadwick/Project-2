DROP DATABASE IF EXISTS wiki_db;

CREATE DATABASE wiki_db;


\connect wiki_db;

DROP TABLE IF EXISTS articles;

CREATE TABLE articles
(id BIGSERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, post_date DATE NOT NULL DEFAULT NOW(), category VARCHAR(255), img VARCHAR(255), wiki_text TEXT);


INSERT INTO articles (title, post_date, category, img, wiki_text)
VALUES
('Ophelia',
  '3/31/17',
  'Pre-raphaelite',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg/600px-John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg',
  'Ophelia is a painting by British artist Sir John Everett Millais, completed between 1851 and 1852. It is held in the Tate Britain in London. It depicts Ophelia, a character from William Shakespeare''s play Hamlet, singing before she drowns in a river in Denmark.The work was not highly regarded when first exhibited at the Royal Academy, but has since come to be admired for its beauty and its accurate
  depiction of a natural landscape.'),

  ('Carnation, Lily, Lily, Rose',
    '5/31/17',
    'Impressionist',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/John_Singer_Sargent_-_Carnation%2C_Lily%2C_Lily%2C_Rose_-_Google_Art_Project.jpg/600px-John_Singer_Sargent_-_Carnation%2C_Lily%2C_Lily%2C_Rose_-_Google_Art_Project.jpg',
    'Carnation, Lily, Lily, Rose is an oil painting on canvas completed by the Anglo-American painter John Singer Sargent between 1885 and 1886. It depicts two small children who are lighting paper lanterns in a garden strewn with pink roses, accents of yellow carnations and tall white lilies. The work received a mixed reception at the Royal
    Academy Summer Exhibition. It is now displayed at Tate Britain.'),


    ('Portrait of Mrs Francis Stanton Blake',
      '6/15/17',
      'Portraiture',
      'https://upload.wikimedia.org/wikipedia/en/1/15/Portrait_of_Mrs._Francis_Stanton_Blake.jpg',
      'One American expatriate has painted another. Stewart was the son of the noted collector William H. Stewart, an expatriate from Philadelphia who resided in Paris. He studied with the artists his father had come to know, Jean-Léon Gérôme, Eduardo Zamacoïs, and Raimundo de Madrazo, becoming a fashionable, cosmopolitan portrait and genre painter. Stewart has posed Mrs. Blake, an American who lived in Menton on the French Riviera, against a Japanese screen.
      '),

    ('The Veil',
      '5/24/17',
      'Drawing',
        'http://www.artic.edu/aic/collections/citi/images/standard/WebLarge/WebImg_000156/8785_1689651.jpg',
        'I would love to know more about this work, if anyone knows about it, please update!');
