output "site_url" {
  value       = netlify_site.motivation_site.ssl_url
  description = "Live site URL"
}

output "site_name" {
  value       = netlify_site.motivation_site.name
  description = "Generated site name"
}

output "daily_question_index" {
  value       = random_integer.daily_seed.result
  description = "Today's question index (for debugging)"
}

output "netlify_site_id" {
  value       = netlify_site.motivation_site.id
  description = "Netlify site ID"
  sensitive   = true
}