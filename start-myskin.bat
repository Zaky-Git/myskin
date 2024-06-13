@echo off

start cmd /k "cd myskin && php artisan serve"

start cmd /k "cd myskin && cd react && npm run dev"

start cmd /k "cd myskin && cd flask && python app.py"
