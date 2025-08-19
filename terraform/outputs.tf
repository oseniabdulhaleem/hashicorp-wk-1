output "site_url" {
  value       = "https://wk-1-challenge.netlify.app"  # Replace with your actual site URL
  description = "Live site URL"
}

output "site_name" {
  value       = "wk-1-challenge"  # Replace with your actual site name
  description = "Site name"
}

output "daily_question_index" {
  value       = random_integer.daily_seed.result
  description = "Today's question index (for debugging)"
}

output "netlify_site_id" {
  value       = var.netlify_site_id
  description = "Netlify site ID"
  sensitive   = true
}

output "config_file_generated" {
  value       = local_file.site_config.filename
  description = "Path to generated config file"
}