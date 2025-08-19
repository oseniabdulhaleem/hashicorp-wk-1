provider "netlify" {
  token = var.netlify_token
}

# Provides a stable timestamp that only changes once per day
resource "time_static" "today" {}

# Generate unique site name
resource "random_pet" "site_name" {
  prefix = var.site_name_prefix
  length = 2
}

# Daily seed for consistent question selection
resource "random_integer" "daily_seed" {
  min = 0
  max = 3650
  keepers = {
    day = time_static.today.id
  }
}

# Motivational quote seed
resource "random_integer" "quote_seed" {
  min = 1
  max = 100
  keepers = {
    day = time_static.today.id
  }
}

# Theme color seed for variety (changes weekly)
resource "random_string" "theme_color" {
  length  = 6
  upper   = false
  lower   = true
  numeric = true
  special = false
  keepers = {
    week = formatdate("YYYY-MM", time_static.today.rfc3339)
  }
}

# Create environment file for the site before deployment
resource "local_file" "site_config" {
  filename = "${path.module}/../site/config.js"
  content = <<EOF
window.CONFIG = {
  dailySeed: ${random_integer.daily_seed.result},
  quoteSeed: ${random_integer.quote_seed.result},
  themeColor: '#${random_string.theme_color.result}',
  deployDate: '${formatdate("YYYY-MM-DD", time_static.today.rfc3339)}',
  personalName: '${var.personal_name}',
  githubUsername: '${var.github_username}',
  linkedinUrl: '${var.linkedin_url}',
  twitterUsername: '${var.twitter_username}',
  totalQuestions: 3651
};
EOF
}

# Configure build settings for your existing site
resource "netlify_site_build_settings" "blog" {
  site_id           = var.netlify_site_id  # Direct reference to variable
  publish_directory = "site"
  production_branch = "main"
  build_command     = "echo 'Static site - no build needed'"
}