@echo off

start cmd /k "cd myskin && php artisan db:wipe"

start cmd /k "cd myskin && php artisan migrate:fresh --seed"
