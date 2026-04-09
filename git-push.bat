@echo off
cd /d "%~dp0"
if exist ".git\index.lock" del /f ".git\index.lock"
if exist ".git\index.lock.old" del /f ".git\index.lock.old"
git reset HEAD
git add .
git commit -m "Root session closure 2026-04-09_1800: Keziah Okanga full intelligence profile + Karen market analysis + competitive landscape + strategic positioning"
git push origin main
echo.
echo === DONE === Press any key to close ===
pause >nul
