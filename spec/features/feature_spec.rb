require 'spec_helper'

feature 'home page' do
  scenario 'us1 - I want to see a list of spaces' do
    visit '/'
    expect(page).to have_text('Spaces available to book right now')
  end
end

feature 'space page' do
  scenario 'us2- I want to request to book my chosen space' do
    visit '/space'
    fill_in('bookMeFrom', with: '01/02/2017')
    fill_in('bookMeTo', with: '03/04/2017')
    click_button('bookMe')
    # expect(page).to have_current_path('/user')

    # page.driver.browser.switch_to.alert.accept

      # page.accept_alert 'Hi there Bob you have booked Dandy Cock Inn' do
      # click_button('OK')
      # end
    expect(page).to have_text('01/02/201603/04/2016')
  end

  scenario 'test redirection' do
    visit '/'
    click_button('Log in')
    expect(page).to have_text(' Log in! ')
  end

end


# fill_in('First Name', :with => 'John')
