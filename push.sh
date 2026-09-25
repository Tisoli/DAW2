#!/bin/bash
cd "$(dirname "$0")"
git add .
git commit -m "cualqier"
git push origin main
echo "=== listo ==="