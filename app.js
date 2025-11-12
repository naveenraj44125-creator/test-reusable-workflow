const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example App - Reusable Workflow Demo</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 800px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        .badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            margin: 10px 5px;
        }
        .info {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
        .info h3 {
            color: #374151;
            margin-bottom: 10px;
        }
        .info ul {
            list-style: none;
            padding-left: 0;
        }
        .info li {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .info li:last-child {
            border-bottom: none;
        }
        .highlight {
            background: #fef3c7;
            padding: 15px;
            border-left: 4px solid #f59e0b;
            border-radius: 5px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #6b7280;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Example App</h1>
        <p style="font-size: 1.2em; color: #6b7280; margin-bottom: 20px;">
            Deployed using Reusable GitHub Actions Workflow
        </p>
        
        <div class="badge">✅ Node.js ${process.version}</div>
        <div class="badge">🔄 Reusable Workflow</div>
        <div class="badge">☁️ AWS Lightsail</div>
        
        <div class="highlight">
            <strong>🎉 Success!</strong> This application was deployed using a reusable workflow from another repository!
        </div>
        
        <div class="info">
            <h3>📋 Application Info</h3>
            <ul>
                <li><strong>Application:</strong> Example App v1.0.0</li>
                <li><strong>Runtime:</strong> Node.js ${process.version}</li>
                <li><strong>Platform:</strong> ${process.platform}</li>
                <li><strong>Uptime:</strong> ${Math.floor(process.uptime())} seconds</li>
                <li><strong>Memory:</strong> ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB</li>
                <li><strong>Deployed:</strong> ${new Date().toLocaleString()}</li>
            </ul>
        </div>
        
        <div class="info">
            <h3>🔧 Deployment Method</h3>
            <ul>
                <li><strong>Workflow:</strong> Reusable GitHub Actions</li>
                <li><strong>Source Repo:</strong> naveenraj44125-creator/lamp-stack-lightsail</li>
                <li><strong>Workflow File:</strong> deploy-generic-reusable.yml</li>
                <li><strong>Trigger:</strong> Push to main branch</li>
            </ul>
        </div>
        
        <div class="info">
            <h3>✨ Features</h3>
            <ul>
                <li>✅ Automatic deployment on push</li>
                <li>✅ Configuration-driven setup</li>
                <li>✅ Built-in testing and verification</li>
                <li>✅ Health checks after deployment</li>
                <li>✅ Multi-environment support</li>
            </ul>
        </div>
        
        <div class="footer">
            <p>&copy; 2025 Example App - Powered by Reusable Workflows</p>
        </div>
    </div>
</body>
</html>
    `);
  } else if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Example App running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
  console.log(`🔧 Deployed using reusable workflow`);
});
