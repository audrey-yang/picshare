# picshare

Sharing pictures served up on a Raspberry Pi–a simple solution for short-term file sharing with friends.

## Server

### Network

To get the server to the internet, here is what I did:

1. Set up an A record with my DNS provider
1. Set up a cronjob for the [porkbun-ddns](https://github.com/luxeon/porkbun-ddns) script in order to keep the A record up-to-date
1. Generated SSL files through my DNS provider and placed them on the Pi (at /etc/ssl)
1. Port-forwarded port 443 through my router

### Nginx

At `/etc/nginx/sites-available`, replace the `default` file with [these contents](./server/default).

### Files

To reduce the time to display pictures, I generated smaller preview images and set up pagination.

## Frontend

The project is generated from the Vite, React, and TypeScript template. To run, use `npm run dev`. The application will be running at [localhost:5173/picshare](http://localhost:5173/picshare).

## Other notes

Future improvements can be made especially with security. Please use with caution.
