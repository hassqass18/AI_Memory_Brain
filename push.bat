@echo off
cd /d "%~dp0"
if exist ".git\index.lock" del /f ".git\index.lock"
if exist ".git\index.lock.old" del /f ".git\index.lock.old"
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\refs\heads\main.lock" del /f ".git\refs\heads\main.lock"
git push origin main
echo.
echo === DONE === Press any key to close ===
pause >nul
