variable "netlify_token" {
  description = "Netlify Personal Access Token"
  type        = string
  sensitive   = true
}

variable "github_token" {
  description = "GitHub Personal Access Token"
  type        = string
  sensitive   = true
}

variable "site_name_prefix" {
  description = "Prefix for the site name"
  type        = string
  default     = "daily-dev-motivation"
}

variable "github_username" {
  description = "Your GitHub username"
  type        = string
}

variable "github_repo_name" {
  description = "Your GitHub repository name"
  type        = string
  default     = "hashicorp-wk-1"
}

variable "production_branch" {
  description = "Branch to deploy from"
  type        = string
  default     = "main"
}

variable "personal_name" {
  description = "Your name for the site"
  type        = string
  default     = "Developer"
}

variable "linkedin_url" {
  description = "Your LinkedIn profile URL"
  type        = string
  default     = ""
}

variable "twitter_username" {
  description = "Your Twitter username (without @)"
  type        = string
  default     = ""
}

variable "custom_domain" {
  description = "Custom domain for the site (optional)"
  type        = string
  default     = ""
}