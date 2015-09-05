###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

activate :blog do |blog|
  blog.layout = 'article'
  blog.permalink = '{title}.html'
end

activate :directory_indexes

# Methods defined in the helpers block are available in templates
helpers do
  GRAVATAR_URL = 'https://secure.gravatar.com/avatar/' \
                 '9ae5b4e01b73f20befe74e14bf2c9d9f?s=256'
  def gravatar(options={})
    image_tag GRAVATAR_URL, options
  end

  def article_feed
    blog.articles.sort_by {|a| a.data.published_at }.reverse
  end
end

sprockets.append_path File.join root, 'bower_components'

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
