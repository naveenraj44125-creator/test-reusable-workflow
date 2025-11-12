# Example App - Using Reusable Deployment Workflow

This is an example application that demonstrates how to use the reusable deployment workflow from the `lamp-stack-lightsail` repository.

**Status:** 🚀 Ready for deployment!

## 🚀 Quick Start

1. **Create a new GitHub repository** with these files
2. **Add GitHub Secrets**:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
3. **Update** `deployment-generic.config.yml` with your instance details
4. **Push to main** - automatic deployment starts!

## 📁 Repository Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Uses reusable workflow
├── deployment-generic.config.yml  # Deployment configuration
├── app.js                      # Your application
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🔧 How It Works

This repository uses the **reusable workflow** from:
```
naveenraj44125-creator/lamp-stack-lightsail/.github/workflows/deploy-generic-reusable.yml@main
```

### Workflow Features

- ✅ Automatic deployment on push to main
- ✅ Configurable via YAML file
- ✅ Supports multiple environments
- ✅ Built-in testing and verification
- ✅ Health checks after deployment

## 📝 Configuration

Edit `deployment-generic.config.yml` to configure:
- AWS region and instance name
- Application details
- Dependencies (Node.js, PHP, Python, etc.)
- Testing preferences

## 🌐 Deployment

### Automatic Deployment
Push to `main` branch triggers automatic deployment.

### Manual Deployment
Go to Actions → Deploy Application → Run workflow

## 📊 Monitoring

View deployment status:
- GitHub Actions tab
- Deployment logs
- Application health checks

## 🔗 Links

- Main Workflow Repository: https://github.com/naveenraj44125-creator/lamp-stack-lightsail
- Reusable Workflows Documentation: See REUSABLE_WORKFLOWS.md in main repo
