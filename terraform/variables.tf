variable "netlify_token" {
  description = "Netlify Personal Access Token"
  type        = string
  sensitive   = true
}

variable "site_name_prefix" {
  description = "Prefix for the site name"
  type        = string
  default     = "daily-dev-motivation"
}

variable "github_repo" {
  description = "GitHub repository URL"
  type        = string
  default     = ""
}

variable "terraform_org" {
  description = "Terraform Cloud organization name"
  type        = string
}

variable "workspace_name" {
  description = "Terraform Cloud workspace name"
  type        = string
  default     = "daily-dev-motivation"
}

variable "personal_name" {
  description = "Your name for the site"
  type        = string
  default     = "Developer"
}

variable "github_username" {
  description = "Your GitHub username"
  type        = string
  default     = ""
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