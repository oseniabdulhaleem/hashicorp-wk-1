terraform {
  cloud {
    organization = "Oseni"
    workspaces {
      name = "daily-dev-motivation"
    }
  }
  
  required_version = ">= 1.5"
  
  required_providers {
    netlify = {
      source  = "AegirHealth/netlify"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.4"
    }
    time = {
      source  = "hashicorp/time"
      version = "~> 0.9"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.4"
    }
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}