# Creative Theme for Jekyll

A Jekyll implementation of the [Creative Theme](http://startbootstrap.com/template-overviews/creative/) template by [Start Bootstrap](http://startbootstrap.com).

Creative is a one page Bootstrap theme for creatives, small businesses, and other multipurpose uses.
The theme includes a number of rich features and plugins that you can use as a great boilerplate for your next Jekyll project! 

See it live in action at <https://volny.github.io/creative-theme-jekyll/>

## To use the Creative Theme template in your project

- Start by adding your info in `_config.yml`
- In `_layouts/front.html` reorder or remove section as you prefer.

## Workspace setup

1. Fork this repository
2. Clone your forked repository
3. Check the [Jekyll documentation](https://jekyllrb.com/docs/) for the new workspace setup instructions.
4. Make sure you have [Ruby 3.2](https://www.ruby-lang.org/en/documentation/installation/) and [Bundler](https://bundler.io/) installed
5. cd into your project directory
6. Run `gem install jekyll bundler`
7. Run `bundle install` to install dependencies
8. Run `bundle exec jekyll serve` to start a local server
9. Open your browser and navigate to `http://localhost:4000`
10. Make your changes and commit them
11. Push your changes to your forked repository
12. Create a pull request to the original repository
13. Celebrate your contribution to open source!

## TROUBLESHOOTING
If you run into issues, verify the following:
- Jekyll works best with Ruby 2.7 – 3.2 (3.3 is still a bit problematic)
- Make sure you have the latest version of Bundler: `gem install bundler`
- Delete the `Gemfile.lock` file and run `bundle install` again
- Reinstall the google-protobuf if you encounter the error below:
  - Error: Kernel#require': cannot load such file -- google/protobuf_c (LoadError)
  - Command to reinstall google-protobuf: `gem uninstall google-protobuf` and then `
  gem install google-protobuf --platform=ruby`


