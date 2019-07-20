3.times do
  email = "test@test.com"
  nickname = "nickname1"
  password = "password" 
  password_confirmation = "password"
  u = User.create(email: email, nickname: nickname, password: password, password_confirmation: password)
    6.times do 
      title = Faker::Book.title
      duration = "3"
      genre = Faker::Book.genre
      description = Faker::Movie.quote
      trailer = Faker::Internet.url
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      body = Faker::Marketing.buzzwords
      Comment.create(body: body, video_id: v.id, user_id: u.id)
    end
  end
end


puts "User + 6 videos + 6 comments"