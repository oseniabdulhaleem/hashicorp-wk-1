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
  max = 3650  # Your question count - 1
  keepers = {
    # This value is stable for the entire day
    day = time_static.today.id
  }
}

# Motivational quote seed
resource "random_integer" "quote_seed" {
  min = 1
  max = 100
  keepers = {
    # This is also stable for the day
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
    # Use a stable weekly value
    week = formatdate("YYYY-WW", time_static.today.rfc3339)
  }
}

# Create the Netlify site
resource "netlify_site" "motivation_site" {
  name = random_pet.site_name.id
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

# Deploy the site using netlify_deploy resource
resource "netlify_deploy" "motivation_deploy" {
  site_id = netlify_site.motivation_site.id
  dir     = abspath("${path.module}/../site")
  
  # Ensure config.js is created before deployment
  depends_on = [
    local_file.site_config
  ]
}