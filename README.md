# Daily Dev Motivation - Terraform + Netlify + HCP Challenge 🚀

A minimalist daily coding challenge and motivation website built with **Terraform**, deployed on **Netlify**, and managed with **HCP Terraform** remote state. This project demonstrates modern infrastructure-as-code practices while delivering daily programming inspiration to developers.

## 🌟 What Makes This Unique

- **Daily Algorithm Challenges**: 16+ curated LeetCode-style problems with hints and explanations
- **Inspirational Developer Quotes**: Rotated daily to keep you motivated
- **Progress Tracking**: Local streak tracking and completion statistics
- **Infrastructure as Code**: Fully automated deployment with Terraform
- **Remote State Management**: Secure state storage in HCP Terraform

## 🔧 Prerequisites

Before you begin, ensure you have:

- **Terraform** >= 1.5 installed ([Download here](https://www.terraform.io/downloads.html))
- **Git** ([Download here](https://git-scm.com/downloads))
- **Netlify account** ([Sign up here](https://app.netlify.com/))
- **HCP Terraform account** ([Sign up here](https://app.terraform.io/))
- **GitHub account** ([Sign up here](https://github.com/))

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/oseniabdulhaleem/hashicorp-wk-1.git
cd hashicorp-wk-1
```

### 2. Set Up HCP Terraform

1. **Create an Organization** in [HCP Terraform](https://app.terraform.io/)
2. **Create a Workspace** named `daily-dev-motivation` (or update the name in `terraform/terraform.tf`)
3. **Generate a User Token** in HCP Terraform (User Settings → Tokens)
4. **Configure Terraform CLI** to use your Cloud terrraform account

### 3. Configure Netlify Authentication

1. **Get Netlify Personal Access Token**:
   - Go to [Netlify User Settings](https://app.netlify.com/user/applications)
   - Click "New access token" 
   - Copy the generated token

2. **Set Environment Variables** in HCP Terraform workspace:
   - Go to your workspace → Variables
   - Add **Environment Variables**:
     - `NETLIFY_TOKEN` = your_netlify_token (mark as sensitive)
   - Add **Terraform Variables**:
     - `TF_VAR_github_username` = your_github_username
     - `TF_VAR_github_repo_name` = hashicorp-wk-1 (or your fork name)

### 4. Set Up GitHub Integration (Optional)

If you want automatic deployments on git push:

1. **Generate GitHub Personal Access Token**:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Create token with `repo` scope

2. **Add to HCP Terraform Variables**:
   - `TF_VAR_github_token` = your_github_token (mark as sensitive)

### 5. Deploy the Infrastructure

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

**Expected outputs:**
```
site_url = "https://daily-dev-motivation-xyz.netlify.app"
site_name = "daily-dev-motivation-xyz"
netlify_admin_url = "https://app.netlify.com/sites/daily-dev-motivation-xyz"
```

## 📁 Project Structure

```
├── .gitignore                 # Excludes secrets and local state
├── README.md                  # This file
├── site/                      # Static website files
│   ├── index.html            # Main HTML file
│   ├── style.css             # Responsive CSS with dark mode
│   ├── script.js             # Interactive JavaScript
│   └── questions.json        # Coding challenge database
└── terraform/                # Infrastructure as Code
    ├── main.tf               # Main Terraform configuration
    ├── variables.tf          # Input variables
    ├── outputs.tf            # Output values
    └── terraform.tf          # HCP Terraform backend config
```

## 🔧 Configuration Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `netlify_token` | Netlify Personal Access Token | - | ✅ |
| `github_token` | GitHub Personal Access Token | - | ❌ |
| `github_username` | Your GitHub username | - | ✅ |
| `github_repo_name` | Repository name | hashicorp-wk-1 | ❌ |
| `site_name_prefix` | Prefix for site name | daily-dev-motivation | ❌ |
| `production_branch` | Branch to deploy from | main | ❌ |
| `custom_domain` | Custom domain (optional) | "" | ❌ |

## 📊 Terraform Resources Created

- **`random_pet`**: Generates unique site names
- **`netlify_site`**: Creates and configures the Netlify site
- **`netlify_deploy_key`**: Sets up GitHub integration
- **`github_repository_deploy_key`**: Adds deploy key to repo
- **`github_repository_webhook`**: Enables auto-deployment

## 🎯 Key Features

### Daily Content Rotation
- **Challenges**: Rotated based on day of year (16 questions cycle)
- **Quotes**: Randomized daily using date-based seeding
- **Progress Tracking**: Local storage for streaks and completion

### Modern Development Practices
- **Remote State**: Secure, team-ready state management
- **Version Control**: Clean separation of code and secrets
- **Reproducible Builds**: Easy setup for new team members
- **Auto-deployment**: Git push triggers new deployment

## 🔍 Troubleshooting

### Common Issues

**1. "Invalid Netlify token"**
```bash
# Verify token in HCP Terraform workspace variables
# Ensure it's marked as sensitive and environment variable
```

**2. "Workspace not found"**
```bash
# Update organization/workspace in terraform/terraform.tf
# Ensure you have access to the workspace
```

**3. "GitHub permissions error"**
```bash
# Ensure GitHub token has 'repo' scope
# Verify repository exists and you have admin access
```

**4. "Site already exists"**
```bash
terraform import netlify_site.main <site_id>
# Or change site_name_prefix variable
```

## 🚦 Next Steps

After successful deployment:

1. **Visit your live site** using the outputted URL
2. **Customize the content** in `site/` directory
3. **Push changes** to trigger auto-deployment
4. **Monitor deployments** in Netlify admin panel
5. **Scale infrastructure** by adding more resources

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/oseniabdulhaleem/hashicorp-wk-1/issues)
- **Discussions**: Join the conversation in [GitHub Discussions](https://github.com/oseniabdulhaleem/hashicorp-wk-1/discussions)
- **Community**: Connect with [HUG Ibadan](https://www.linkedin.com/company/hashicorp-user-group-ibadan/)

## 🎉 Acknowledgments

- **HashiCorp User Group Ibadan** for the challenge inspiration
- **Netlify** for excellent static site hosting
- **HCP Terraform** for robust state management
- **The Developer Community** for continuous motivation

---

**Built with ❤️ by [Abdulhaleem Oseni](https://linkedin.com/in/oseniabdulhaleem)**

*Part of the HUG Ibadan Terraform Challenge*