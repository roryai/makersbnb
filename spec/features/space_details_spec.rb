require 'spec_helper'

feature 'space details' do

  scenario 'page displays details of one property\'s availability' do
    visit '/'
    expect(page).to have_text('Windsor Castle')
  end

end
