REM npm run build
rmdir /Q /S %CD%\docs
mkdir %CD%\docs
xcopy /E/Y %CD%\build %CD%\docs
xcopy /F/Y %CD%\CNAME %CD%\docs