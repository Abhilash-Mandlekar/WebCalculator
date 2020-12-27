# Calculator Web Application
 
## The web application logs calculations with everyone connected to the website

For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

## Link for the calculator web application

#### https://mysterious-wildwood-40261.herokuapp.com/

### Please check output folder for screenshots of application

### The last 10 calculations are shown descending from most recent to oldest

## Here is how to run on localhost

Please run server.js to start the server. By default, it will use port 8081 on the localhost. Index.html page will be served first. It uses node.js modules. It will ask for user name and then it will navigate you to main calculator application. It is required to uncomment the line var connection = new WebSocket("ws://localhost:8081/websocket"); (in WebSocket.js) if running on localhost.
