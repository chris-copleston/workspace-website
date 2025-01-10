---
title: Security Policy
layout: ~/layouts/MarkdownLayout.astro
---

## Overview
New Wave Workspace security policy covers several aspects of security ranging from personnel security,
physical access security, secure IT infrastructure, secure relationship with cloud-based providers, etc.

New Wave Workspace leverages AWS, RDS MySQL, Office 365 and Google Apps, therefore we benefit
from the highly secure, robust and scalable solutions to add New Wave Workspace functionality to our
customers.

### 1. Personnel Background Policy
New Wave Workspace personnel with admin access to our solution have to be cleared from criminal
records in the country of origin and any other countries where they resided in the past. Our trust and
verify policy ensure that all personnel are comfortable with this approach.

### 2. Password Policy
New Wave Workspace applies a strong password policy for systems made available to its team
members. Passwords are reset and rotated automatically every six months, or immediately under a team
member departure from the company.

### 3. IT Infrastructure Policy
New Wave Workspace solutions are cloud-based services and are hosted by data centers with the
highest level of certifications including ISO27001 and SOC. For more compliance information, you can
visit AWS Security and AWS Compliance.

### 4. Data Removal
All customer data is stored on AWS services as described on their security whitepaper. Excerpt below:
“AWS uses the techniques detailed in DoD 5220.22-M (“National Industrial Security Program Operating
Manual”) to destroy data as part of the decommissioning process.” For further information on data
lifecycle, refer to New Wave Workspace Privacy Policy documentation.

### 5. Application Development
New software features, patches, bug fixes and improvements are developed based on our ticket incidents
system and our roadmap. Our development cycle relies heavily on Unit Testing, which enforces that our
development team automate the generation of bugs before fixing them and checking code back into the
library. This technique gives us the confidence that old bugs will be identified in future development. Key
security questions regarding development include:
- We rely on Unit Tests
- Only unit-test approved code can be checked back into the source library
- Production data is completed separated from development data
- All code complies with our security policy guidelines

### 6. Access Logs
New Wave Workspace maintains automatic access and security logs. All employees are required to use
strong passwords. Customer data access is only allowed to a small set of employees as required for
support and maintenance. Access is further limited to a small whitelist of IP addresses via VPN and
require public key authentication.

### 7. Authentication
Password authentication is available and prevents weak passwords. New Wave Workspace also supports
ADFS and Single Sign-On. Through your existing SSO provider, New Wave Workspace can enforce
strong password.

### 8. Patch Management
New Wave Workspace leverages Amazon Web Services Patch Manager technology for patches and
updates of its core infrastructure and database, which include rules for auto-approving patches within
days of their release, as well as a list of approved and rejected patches.
There are three patches categories:
- Minor
- Major
- Security

Minor patches are updated regularly and automatically to ensure the uptime and the healthy of our
servers. Major patches are staged in our demo environment and scheduled into an update window once
the update is approved by our Technical Director and judged suitable for the production roll-out. 

Security patches are treated with high priority to ensure ultimate reliability and benefit from a fast-track approval
process aligned with our Security Incident Management Process described on this document below.

Each customer has its own relational database. 

Automatic load balance and self-healing techniques are used for enhanced performance under AWS Elastic
Compute Cloud (EC2) – instances (servers) that are created or destroyed based on auto-scaling based on
demand and auto-repairing needs. In this architecture, the server grows with demand instead of becoming
slower and additional instances are created for a better load distribution across all instances in the pool.

### 9. Patch Policy
- **Development Environment**
    - Our development environment is patched and tested on release.
    - MacOSX. Patched on release
    - Software, development tools and libraries. Patched and tested on release
    - Software dependencies. Major, minor and point releases are patched and tested on release
- **Test Environment**
    - Our test environment is patched and tested on release.
    - Load balance instances. Created on the fly during deployment to handle load and
    self-healing eco-system
    - Linux. Up-to-date patches applied on instantiation
    - Software dependencies. Minor and point releases patched on instantiation
    - UNIT and QA tested for incompatibility
- **Production Environment**
    - Our production environment patches and point releases are applied automatically
    - Load balanced instances. Created on the fly during deployment and to handle load
    & self-healing eco-system
    - Linux. Test environment verified patches applied on instantiation
    - Software dependencies. Point releases are patched on instantiation, verified and
    added to the instance pool on success
- **Summary**
    - Operating Systems are always patched and tested on release
    - Software dependencies’ major releases are patched and tested in Development
    and Test
    - Software dependencies’ minor releases are patched and tested in Development
    and Test
    - Software dependencies’ point releases are auto installed in Development Test and
    Production. Failed production instances are not added to the load balancing pool
    and technical staff are notified
    - Instances use an immutable deployment mechanism that ensures updates for new
    patches and minor platform versions are done in a safe manner to minimize end
    user impact
    - This provides the best patching policy whilst maintaining exceptional up-time

### 10. Audit Logs
New Wave Workspace syncs all calendar data with your existing system (e.g. Office 365) and can
continue to use audit logs generated there to monitor activity between New Wave Workspace and your
system. Activity logs are available for download upon request from your New Wave Workspace
commercial contact. System availability and status updates are also available on demand.
We also leverage Amazon Web Services Cloud Trail to continuously monitor, and retain account activity
across all AWS infrastructure. Additional information on Cloud Trail can be found here.

### 11. IP Addresses for Whitelists
New Wave Workspace public-facing web service uses fixed IP addresses for calendar connection and
webhooks. You will be required to add such IP addresses to your firewall’s incoming connection whitelist.
This will make New Wave Workspace able to connect to your calendar system.

### 12. Application Domains
For networks that whitelist ongoing connections, you can verify against our DNS (e.g.
*.newwaveapps.com, *.newwaveworkspace.com).

### 13. Data Collected
You can find an in-depth summary of information we collect by requiring our privacy policy.

### 14. Encryption
Customer data is encrypted when in-transit and at rest. All connections with New Wave Workspace
service are encrypted and served through SSL/TLS 1.2 or later. The service is only accessible via
HTTPS. Data is encrypted throughout its journey to and from New Wave Workspace.
- New Wave Workspace -> Amazon Web Services
- REST request -> New Wave Workspace application layer
- New Wave Workspace application layer -> Key Management Service -> RDS My SQL
session
- API response -> New Wave Workspace

When at rest, customer data is encrypted using a key management system which logs all access
automatically. Additionally, passwords are hashed using one-way encryption, which protect them even in
the unlikely event of unauthorized database access. Application credentials are stored separately from
the code base. Clients authenticate with New Wave Workspace using a token system.

Each token has specific access scopes, which can be individually revoked without impacting others on
the platform. We are also able to invalidate tokens across the entire platform in the event of a security
incident.

Our use of Amazon Web Services also leverages AWS Key Management Service to create and control
the encryption keys used to encrypt any customer data we host. The master keys created are protected
by FIPS 140-2 validated cryptographic modules.

### 15. Security Techniques
- **SSL Transmission.** Data is transmitted to and from the server via SSL (encrypted).
- **Database Isolation.** Data is stored in a separate database per customer.
- **Hashed Passwords.** Passwords are hashed using bcrypt.
- **Firewalls.** The solution works within the network firewalls rules.
- **Inter-service encryption.** The solution deploys data encryption in transit with TLS across
all services.
- **Unit Tests.** All server code and REST APIs undergo unit tests, including SQL Injection
testing to prevent common vulnerabilities.
- **User Control.** We apply admin level password reset, user removal or permission
configuration.
- **Password Strength.** Configurable password strength validation (3 levels).
- **Sessions.** Session based stateful authentication. Cookies hold expiring session IDs only.
- **Web App.** Web App solution means no data artifacts remain on the client once the browser
is closed and no data leaks into insecure client backups.
- **CORS control.** Prevention of cross origin resource sharing attacks.
- **Region Sandboxing.** Entire infrastructure can be deployed to one of 18 isolated
geographic regions.

### 16. Security Incident Management Process
A security incident includes, but it is not restricted to, the following:
- The loss or theft of data or information
- The transfer of data or information to those who are not entitled to receive that information
- Attempts (either failed or successful) to gain unauthorised access to data or information
- Changes to information or data or system hardware, firmware, or software characteristics
without the New Wave Workspace knowledge, instruction, or consent
- Unwanted disruption or denial of service to our service


#### 1.16.1 Assessing
Security incidents are assessed per phases below.
- **Identification -** Identification of the incident, analysis to ascertain its cause and
vulnerabilities it exploited
- **Restricting -** Limiting or restricting further impact of the incident
- **Containing -** Tactics for containing the incident
- **Correcting -** Corrective action to repair and prevent reoccurrence

#### 1.16.2 Communication
Security related incidents closely follow our communication protocol divided in categories below:
- **Responsible –** the person(s) responsible for investigating and raising the issue with New
Wave Workspace senior management
- **Accountable –** the person who has ultimate accountability and authority for the fix of the
security issue
- **Consulted –** the person(s) or groups to be consulted prior to final security patch
implementation or amendment
- **Informed –** the person(s) or groups to be informed throughout the security incident
lifecycle from identification, assessment, containment and corrective action phases

#### 1.16.3 AWS Security Processes
Further to our security incident process, we also leverage Amazon Web Services Security process as
described here.

#### 1.16.4 Reporting
Security incidents are reported within 48 hours to customer(s) affected along with impact and any
remedies put in place to limit, restrict, contain and correct the security incident.
Incident reports will contain the information below and more when applicable.
- Incident Number/Reference
- Title
- Date & time, time zone
- Incident summary
- Root cause, if already identified
- Resolution, if already identified
- Resolution date & time, time zone, if already identified

### 17. DDoS
A Distributed Denial of Service (DDoS) attack is a malicious attempt to make a targeted system, such as
a website or application, unavailable to end users. To achieve this, attackers use a variety of techniques
that consume network or other resources, interrupting access for legitimate end users.
We leverage Amazon Web Services flexible infrastructure to implement DDoS services. Amazon Route
53, Amazon Cloud Front, Elastic Load Balancing and AWS WAF are tools that complete the DDoS
service to prevent and defer DDoS requests.
Further information on AWS DDoS prevention can be found here.

### 18. Calendar Syncing
Once an external calendar account is connected to New Wave Workspace, our cloud service will begin to
synchronise data with the designated room calendars. In doing so, a unique identifier of your calendar
event will be in sync with New Wave Workspace.
Events booked with New Wave Workspace will similarly synchronize the data back to your calendar
service, so that New Wave Workspace and connected calendars stay consistent.
We do not store event attachments.

### 19. Disaster Recovery
Application and customer data are stored redundantly at multiple availability zones within Amazon’s data
centres. Customer data and application source code are automatically backed up daily. Backups are
retained for 30 days to recover in the event of a disaster.

### 20. Contact Information
If you have any questions about our security policy, please contact us at security@newwaveapps.com or
+44(0)800 368 7468 for the Main Office Number or +44(0)7979 828 189 for the Company Director.