@echo off
title Playwright POM Setup
echo Setting up Playwright POM structure...

REM --- 1. Create Directories ---
echo Creating directories...
if not exist "pages" mkdir pages
if not exist "tests" mkdir tests
if not exist ".github\workflows" mkdir .github\workflows

REM --- 2. Create Empty Page Object Files ---
echo Creating Page Objects in pages/...
type nul > pages\LoginPage.ts
type nul > pages\HomePage.ts
type nul > pages\EditorPage.ts
type nul > pages\BasePage.ts

REM --- 3. Create Test Specification File ---
echo Creating Test file in tests/...
type nul > tests\conduit.spec.ts

REM --- 4. Create GitHub Workflow File ---
echo Creating Workflow in .github/workflows/...
type nul > .github\workflows\playwright.yml

echo.
echo ==========================================
echo  Structure created successfully! 
echo ==========================================
echo  1. Open 'pages\LoginPage.ts' and paste the Login Class code.
echo  2. Open 'pages\HomePage.ts' and paste the Home Class code.
echo  3. Open 'pages\EditorPage.ts' and paste the Editor Class code.
echo  4. Open 'tests\conduit.spec.ts' and paste the Test code.
echo  5. Open '.github\workflows\playwright.yml' and paste the YAML code.
echo ==========================================
pause