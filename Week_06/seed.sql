-- Insert sample books
INSERT INTO Books (title, author)
VALUES
  ('To Kill a Mockingbird', 'Harper Lee'),
  ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams'),
  ('Dune', 'Frank Herbert'),
  ('The Great Gatsby', 'F. Scott Fitzgerald');


-- Step 3: Insert sample users
INSERT INTO Users (username, email)
VALUES
  ('user1', 'user1@example.com'),
  ('user2', 'user2@example.com'),
  ('user3', 'user3@example.com');


  SET IDENTITY_INSERT UserBooks OFF;
-- Step 6: Insert relationships between users and books
INSERT INTO UserBooks (user_id, book_id)
VALUES
(1, 5),   
  (1, 6),   
  (1, 7),   
  (2, 8),   
  (2, 6),  
  (3, 7),  
  (3, 8);


  SELECT * FROM UserBooks;
  SELECT * FROM Users;
  SELECT * FROM Books;