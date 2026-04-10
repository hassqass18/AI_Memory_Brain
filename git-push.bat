@echo off
cd /d "%~dp0"
if exist ".git\index.lock" del /f ".git\index.lock"
if exist ".git\index.lock.old" del /f ".git\index.lock.old"
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
git reset HEAD
git add .
git commit -m "Root session closure 2026-04-11: LifeOS staged (all 3 docs complete), Q2 OKRs seeded, action queue 15 active items, launch Apr 12"
git push origin main
echo.
echo === DONE === Press any key to close ===
pause >nul
