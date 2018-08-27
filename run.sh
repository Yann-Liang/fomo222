#!/bin/bash
git pull
pm2 delete f3d
NETWORK=3 pm2 start --name f3d server/server.js
npm install
npm run build