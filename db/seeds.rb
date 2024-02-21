# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
first_greeting = Greeting.create(message: "Hey there! 

Thanks for joining. We’re thrilled to have you. 

Welcome! Get ready for some amazing deals and updates right here. 😊");

second_greeting = Greeting.create(message: "Exciting times ahead: exclusive offers, insider tips, and much more, are all coming your way.

Stay tuned! 😊");

third_greeting = Greeting.create(message: "Super excited you’re with us!

Need help or got questions? I’m just a text away.😊")

fourth_greeting = Greeting.create(message: "Congrats! You’ve just unlocked special member perks 🎉

Stay tuned for personalized deals and insider info")

fifth_greeting = Greeting.create(message: "Welcome to the family 😊.

Keep watching your inbox for exclusive members-only events, and discounts.

Thanks again.")