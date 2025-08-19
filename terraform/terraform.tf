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
      source  = "registry.terraform.io/netlify/netlify"
    }
    random = {
      source = "hashicorp/random"
    }
    time = {
      source = "hashicorp/time"
      version = "~> 0.9"
    }
    local = {
      source = "hashicorp/local"
      version = "~> 2.4"
    }
  }
}