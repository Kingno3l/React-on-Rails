class Api::V1::GreetingsController < ApplicationController
  def random_greeting
    random_greeting = Greeting.order('RANDOM()').first
    formatted_greeting = { message: random_greeting&.message }
    render json: JSON.pretty_generate(formatted_greeting)
  end
end
