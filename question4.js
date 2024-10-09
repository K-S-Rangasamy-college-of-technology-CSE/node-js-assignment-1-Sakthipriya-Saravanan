const dns = require('dns');

function resolveDomain(domain) {
  dns.resolve4(domain, (err, addresses) => {
    if (err) {
      console.error(`Error resolving domain ${domain}:`, err);
      return;
    }
    console.log(`IP addresses for ${domain}:`, addresses);
  });
}

function resolveMxRecords(domain) {
  dns.resolveMx(domain, (err, addresses) => {
    if (err) {
      console.error(`Error retrieving MX records for ${domain}:`, err);
      return;
    }
    console.log(`MX records for ${domain}:`, addresses);
  });
}

function reverseLookup(ip) {
  dns.reverse(ip, (err, hostnames) => {
    if (err) {
      console.error(`Error doing reverse lookup for ${ip}:`, err);
      return;
    }
    console.log(`Hostnames for IP address ${ip}:`, hostnames);
  });
}

const domain = 'google.com';
const ip = '8.8.8.8';

console.log(`Resolving domain: ${domain}`);
resolveDomain(domain);

console.log(`\nResolving MX records for: ${domain}`);
resolveMxRecords(domain);

console.log(`\nDoing reverse lookup for IP: ${ip}`);
reverseLookup(ip);
