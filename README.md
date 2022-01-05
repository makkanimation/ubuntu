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


Install Ispconfig with Mysql8
https://git.ispconfig.org/ispconfig/ispconfig3/-/issues/5418

https://www.eninsoft.com/instalacion-de-ispconfig-3-x-en-debian-9-mysql8-version-optimizada/


# Copy to other Folder
cp -r /path/to/directory /path/to/location/new-name

# Change permissions to a specific user  
https://askubuntu.com/questions/607149/change-permissions-to-a-specific-user-in-ubuntu-12-04

 If you want to change the permissions use this command (755 will grant the owner of the file read, write and execute permissions and read and execute permissions to group and other users ):

   sudo chmod -R 755 directory
 If you want to change ownership of a folder and it's subfolders and files

   sudo chown -R username:usergroup directory
 If the owner of a file or directory is let's say the user jofrey you want to grant him read and write permissions:

   sudo chmod -R u+rw directory
