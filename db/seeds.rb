# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"



Post.destroy_all
10.times do
	name = Faker::Name.name 
	# nickname = Faker::Internet.username
	# email = Faker::Internet.email
	# image = Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "bmp", set: "set1")
	user = User.create(name: name, nickname: Faker::Internet.username, email: Faker::Internet.email,password: '123456', image: Faker::Avatar.image(slug: name, size: "50x50", format: "png", set: "set1"))

	5.times do
# 		subject = Faker::Date.between(from: 2.days.ago, to: Date.today)
		image = Faker::Name.name 
# 		body = Faker::Quote.famous_last_words
# 		image = Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "bmp", set: "set1")
		user.posts.create(subject: subject = Faker::Date.between(from: 2.days.ago, to: Date.today), body: Faker::Quote.famous_last_words, image: Faker::Avatar.image(slug: image, size: "250x250", format: "png", set: "set1"))
	end
end
