output "site_url" {
  value       = "https://${netlify_site.main.name}.netlify.app"
  description = "Live site URL"
}

output "site_name" {
  value       = netlify_site.main.name
  description = "Generated site name"
}

output "site_id" {
  value       = netlify_site.main.id
  description = "Netlify site ID"
}

output "daily_question_index" {
  value       = random_integer.daily_seed.result
  description = "Today's question index (for debugging)"
}

output "netlify_admin_url" {
  value       = "https://app.netlify.com/sites/${netlify_site.main.name}"
  description = "Netlify admin URL"
}

output "deploy_key_public" {
  value       = netlify_deploy_key.key.public_key
  description = "Deploy key public part"
  sensitive   = false
}