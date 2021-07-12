# ubuntu

# Change Cron Time Zone
https://askubuntu.com/questions/54364/how-do-you-set-the-timezone-for-crontab

sudo dpkg-reconfigure tzdata - follow the instructions to select Region/Country

sudo service cron restart

timedatectl - Verify your date settings

After setting the time zone, you can type date at the command line to confirm that the date is correct as per your expectation
