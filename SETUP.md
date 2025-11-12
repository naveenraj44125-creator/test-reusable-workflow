# Setup Guide - Using Reusable Workflow

Follow these steps to deploy this example app using the reusable workflow.

## 📋 Prerequisites

1. AWS Lightsail instance running
2. Static IP attached to the instance
3. GitHub account
4. AWS credentials with Lightsail access

## 🚀 Step-by-Step Setup

### Step 1: Create New GitHub Repository

```bash
# On GitHub, create a new repository (e.g., "my-example-app")
# Then clone it locally
git clone https://github.com/YOUR-USERNAME/my-example-app.git
cd my-example-app
```

### Step 2: Copy Example Files

Copy all files from `example-app-using-reusable-workflow/` to your new repository:

```bash
# Copy all files
cp -r example-app-using-reusable-workflow/* my-example-app/
cp example-app-using-reusable-workflow/.gitignore my-example-app/
```

### Step 3: Update Configuration

Edit `deployment-generic.config.yml`:

```yaml
aws:
  region: us-east-1  # Your AWS region

lightsail:
  instance_name: your-instance-name  # Your Lightsail instance
  static_ip: YOUR.STATIC.IP.HERE     # Your static IP

application:
  name: my-example-app
  # ... rest of config
```

### Step 4: Add GitHub Secrets

Go to your repository → Settings → Secrets and variables → Actions

Add these secrets:
- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key

### Step 5: Commit and Push

```bash
git add .
git commit -m "Initial commit - using reusable workflow"
git push origin main
```

### Step 6: Watch Deployment

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Watch the "Deploy Application" workflow run
4. Wait for completion (3-5 minutes)

### Step 7: Verify Deployment

Visit your application:
```
http://YOUR.STATIC.IP.HERE/
```

## 🔧 Customization

### Change Application

Edit `app.js` to modify your application logic.

### Add Dependencies

Update `deployment-generic.config.yml` to enable/disable dependencies:

```yaml
dependencies:
  nodejs:
    enabled: true
  nginx:
    enabled: true
  redis:
    enabled: true  # Enable Redis
  # etc.
```

### Multiple Environments

Create different config files:
- `deployment-staging.config.yml`
- `deployment-production.config.yml`

Update workflow to use different configs per environment.

## 📊 Monitoring

### View Logs

```bash
# On your Lightsail instance
sudo journalctl -u your-app -f
```

### Check Health

```bash
curl http://YOUR.STATIC.IP.HERE/health
```

## 🐛 Troubleshooting

### Deployment Fails

1. Check GitHub Actions logs
2. Verify AWS credentials
3. Confirm instance name and IP are correct
4. Check instance is running

### Application Not Accessible

1. Check security group allows port 80/443
2. Verify static IP is attached
3. Check application is running on instance
4. Review deployment logs

## 📚 Additional Resources

- Main Repository: https://github.com/naveenraj44125-creator/lamp-stack-lightsail
- Reusable Workflows Guide: See REUSABLE_WORKFLOWS.md
- GitHub Actions Docs: https://docs.github.com/en/actions

## 💡 Tips

1. **Test Locally First**: Run `npm start` locally before deploying
2. **Use Environments**: Set up GitHub Environments for production
3. **Monitor Deployments**: Watch the Actions tab for deployment status
4. **Version Control**: Tag releases for easy rollback
5. **Security**: Never commit AWS credentials to git

## 🎉 Success!

Once deployed, your application will:
- ✅ Auto-deploy on every push to main
- ✅ Run tests before deployment
- ✅ Verify health after deployment
- ✅ Show deployment status in GitHub

Happy deploying! 🚀
