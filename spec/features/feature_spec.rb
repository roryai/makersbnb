require 'spec_helper'

feature 'home page' do

  scenario 'us1 - I want to see a list of spaces' do
    visit '/'
    expect(page).to have_text('Spaces available to book right now')
  end

end
