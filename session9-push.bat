@echo off
echo === SierraHomes Session 9 — Commit and Push ===
echo.

cd /d "%~dp0"

echo Cleaning up git lock files...
if exist ".git\index.lock" del /f ".git\index.lock"
if exist ".git\index_new.lock" del /f ".git\index_new.lock"
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\refs\heads\main.lock" del /f ".git\refs\heads\main.lock"
if exist ".git\objects\maintenance.lock" del /f ".git\objects\maintenance.lock"
echo Lock files cleaned.
echo.

echo Staging all changes...
git add -A
echo.

echo Committing...
git commit -m "Session 9 (2026-04-11): 88-unit model corrections, 12 social media posts, sales programme rebuild, Excel financial model (9 sheets, 146 formulas, ROI 91.3%) — KD-031, KD-032, KD-033"
echo.

echo Pushing to GitHub...
git push origin main
echo.

echo === DONE ===
pause
