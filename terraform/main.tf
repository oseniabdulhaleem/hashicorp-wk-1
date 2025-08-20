provider "netlify" {
  token = var.netlify_token
}

provider "github" {
  token = var.github_token
}

# Simple random pet name for the site
resource "random_pet" "site_name" {
  prefix = var.site_name_prefix
  length = 2
}

# Create a deploy key for Netlify to access your repo
resource "netlify_deploy_key" "key" {}

# Add the deploy key to your GitHub repository
resource "github_repository_deploy_key" "netlify_key" {
  title      = "Netlify Deploy Key"
  repository = var.github_repo_name
  key        = netlify_deploy_key.key.public_key
  read_only  = false
}

# Create a webhook that triggers Netlify builds on push
resource "github_repository_webhook" "netlify_webhook" {
  repository = var.github_repo_name
  events     = ["push", "pull_request"]

  configuration {
    url          = "https://api.netlify.com/hooks/github"
    content_type = "json"
  }

  depends_on = [netlify_site.main]
}

# Create the main Netlify site
resource "netlify_site" "main" {
  name = random_pet.site_name.id

  repo {
    command       = "echo 'Static site - no build needed'"
    deploy_key_id = netlify_deploy_key.key.id
    dir           = "site"
    provider      = "github"
    repo_path     = "${var.github_username}/${var.github_repo_name}"
    repo_branch   = var.production_branch
  }

  custom_domain = var.custom_domain != "" ? var.custom_domain : null

  depends_on = [
    github_repository_deploy_key.netlify_key
  ]
}