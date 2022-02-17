require 'rails_helper'

feature 'user is able to' do

    let!(:test_user) {User.create!(email: "test_user@mail.com", password: "password", first_name: "test")}
    
    scenario 'click sign up' do
        visit "/"

        click_link "Sign Up"

        expect(page).to have_content("Sign up")

    end

    scenario 'is able to sign up' do
        visit new_user_registration_path

        fill_in 'Password' , with: "password"
        fill_in 'Password confirmation' , with: "password"
        fill_in 'Email' , with: "test@mail.com"
        fill_in 'First name' , with: "New"

        click_button "Sign up"

        expect(page).to have_content("signed up successfully")
    end

    scenario 'is unable to sign up with bad info' do
        visit new_user_registration_path

        click_button "Sign up"
        expect(page).to have_content("Email can't be blank")
        expect(page).to have_content("First name can't be blank")
        expect(page).to have_content("Password can't be blank")
    end

    scenario 'is unable to use an already existing email' do
        visit new_user_registration_path

        fill_in 'First name', with: test_user.first_name
        fill_in 'Email', with: test_user.email
        fill_in 'Password' , with:  test_user.password

        click_button "Sign up"

        expect(page).to have_content("Email has already been taken")
    end

end