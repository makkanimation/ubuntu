# ubuntu

# Change Cron Time Zone
https://askubuntu.com/questions/54364/how-do-you-set-the-timezone-for-crontab

sudo dpkg-reconfigure tzdata - follow the instructions to select Region/Country

sudo service cron restart

timedatectl - Verify your date settings

After setting the time zone, you can type date at the command line to confirm that the date is correct as per your expectation

check Cron Job or Add 
https://phoenixnap.com/kb/how-to-list-display-view-all-cron-jobs-linux
 
To edit the crons: type the following in the console of the server:
crontab -e
and this will open an editor. Type the following code*/2 0-8 * * 0-4 cd /root && /usr/bin/python3 /root/scrape_yahoo.py >> test.out
