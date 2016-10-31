require 'spec_helper'

feature 'index ' do

  scenario 'page displays an address' do
    visit '/'
    expect(page).to have_text('Windsor Castle')
  end

end
