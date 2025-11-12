# Quick Deploy Guide

You've completed steps 1-3! Here's what to do next:

## ✅ Completed
- [x] Step 1: Created new GitHub repository
- [x] Step 2: Copied example files
- [x] Step 3: Updated deployment-generic.config.yml

## 🔄 Next Steps

### Step 4: Add GitHub Secrets

1. Go to your new repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these two secrets:

**Secret 1:**
- Name: `AWS_ACCESS_KEY_ID`
- Value: Your AWS access key ID

**Secret 2:**
- Name: `AWS_SECRET_ACCESS_KEY`
- Value: Your AWS secret access key

### Step 5: Commit and Push (Run these commands in your new repo)

```bash
# Make sure you're in your new repository directory
cd /path/to/your/new/repo

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - using reusable workflow from lamp-stack-lightsail"

# Add remote (replace YOUR-REPO-NAME)
git remote add origin https://github.com/naveenraj44125-creator/YOUR-REPO-NAME.git

# Push to main
git branch -M main
git push -u origin main
```

### Step 6: Watch Deployment

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see "Deploy Application" workflow running
4. Click on it to watch the deployment progress

### Step 7: Verify

Once deployment completes:
- Visit: `http://YOUR-STATIC-IP/`
- You should see the example Node.js app
- It will show "Deployed using Reusable GitHub Actions Workflow"

## 🎯 What Happens When You Push?

1. GitHub Actions detects push to main
2. Calls reusable workflow from `lamp-stack-lightsail` repo
3. Loads your config from `deployment-generic.config.yml`
4. Runs tests
5. Installs Node.js and Nginx on your instance
6. Deploys your app.js
7. Verifies deployment
8. Shows success message with URL

## 🔍 Troubleshooting

### If deployment fails:

1. **Check secrets**: Make sure AWS credentials are correct
2. **Check config**: Verify instance_name and static_ip in config file
3. **Check instance**: Ensure Lightsail instance is running
4. **Check logs**: View detailed logs in GitHub Actions

### Common Issues:

- **"Instance not found"**: Check instance_name in config
- **"Permission denied"**: Check AWS credentials have Lightsail access
- **"Connection timeout"**: Check instance security group allows SSH (port 22)

## 📊 Expected Output

After successful deployment, you'll see:
- ✅ All workflow steps completed
- 🌐 Application URL in deployment summary
- 📝 Deployment details in job summary

## 🎉 Success Indicators

Your deployment is successful when:
1. All GitHub Actions jobs show green checkmarks
2. You can access the app at `http://YOUR-STATIC-IP/`
3. The app shows "Example App" with deployment info
4. Health check endpoint works: `http://YOUR-STATIC-IP/health`

## 💡 Next Steps After Success

1. **Customize the app**: Edit `app.js` and push again
2. **Add more dependencies**: Update config to enable Redis, MySQL, etc.
3. **Set up environments**: Create staging/production configs
4. **Add monitoring**: Set up health checks and alerts

## 🆘 Need Help?

- Check the main repo: https://github.com/naveenraj44125-creator/lamp-stack-lightsail
- Review REUSABLE_WORKFLOWS.md for detailed documentation
- Check GitHub Actions logs for error messages

---

**Remember**: Every push to main will trigger automatic deployment! 🚀
