# Notes

## Using Service Containers ("Services")

*Problem:* Tests should not manipulate production database
*Solution:* Use a testing database in a service container
*Example:* The service container can hose a testing database. It runs inside a container (hosted by the Runner). Job steps can communicate with service containers (and the services exposed by them)
