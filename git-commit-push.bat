@echo off
echo === ProvectaGroup Session Commit ===
echo.

cd /d "%~dp0"

echo Cleaning up git lock files...
if exist ".git\index.lock" del /f ".git\index.lock"
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\refs\heads\main.lock" del /f ".git\refs\heads\main.lock"

echo Staging all changes...
git add -A

echo.
echo Committing...
git commit -m "ProvectaGroup 2026-04-11: AI Audit 6-email nurture sequence, mobile image fixes, Zoho merge tags, standalone previews, index + session docs updated"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo === DONE === Press any key to close ===
pause
