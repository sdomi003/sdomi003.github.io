<%--
  Created by IntelliJ IDEA.
  User: samueldominguez
  Date: 12/12/19
  Time: 11:57 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>TweetViewer</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body style="background-color:#3EB9BB">
  <br>
  <h1 style="color:#FFFFFF; margin: auto; padding: 10px; text-align: center;">WELCOME! TYPE IN A QUERY</h1>
  <form name="queryForm" method="POST" action="query" style="align-content: center">
    Query:
    <label>
    <input type="text" name="q"/>
    </label>
    <input type="submit" value="query"/>
  </form>
  <div id="map"></div>
  <script>
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.9806, lng: -117.3755},
        zoom: 8
      });
    }
  </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQhB5NnYeGlf16Q47nsL07-YDLTS90Sjc&callback=initMap"
          async defer></script>


  </body>
</html>
