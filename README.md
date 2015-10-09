# team-SDEP-GIS
Note: This is a draft deliverable.</br>
All changes to this file should be considered temporary until 12:00PM on Friday, October 9th.
## Inspiration

The intent of the San Diego Emergency Participatory Geospatial Information System (SDEP-GIS) is to provide real time information sharing, which allows for reliable community-based data submission to enhance the information flow during the disaster response process. The inspiration came from an understanding that disaster response and cleanup can be a community-driven and open-sourced effort that also maintains data integrity and adds a verifiability measure.

## What it does

SDEP-GIS consists of three components: 1. The online/mobile data collection and viewer application accessible by the public, and 2. A data service (ArcGIS/REST Feature Service) to host the data collected in the field. 3. The Emergency Operation Center (EOC) data feed that consumes the data service rapid display of publically submitted information to disaster response planners, officials, and others in the disaster response community.

**Mobile-Ready Component**

![Alt text](http://static1.squarespace.com/static/5230533de4b0a5b139ff428f/t/55e5a9c0e4b0c825de437df0/1441114561032/)
 <br />

The mobile-ready application allows users to collect data as they witness it on the ground in real-time. Although the app is available via any web browser, only mobile users can edit data. The data is collected using the actual geographic coordinates of the contributor as well as photo attachments for further verification. The use of real-time coordinates adds an extra layer of authenticity that will ensure that the responder is actually present in the location being recorded.

**Data Service / Feed**

![Alt text](http://www.oracle.com/ocom/groups/public/@otn/documents/digitalasset/2406004.png)
<br/>

The mobile app publishes edits and comments to a Feature Service housed in an ArcGIS REST endpoint for consumption. The REST-endpoint is in the same format as the data services provided by the COSD Emergency Data Feed (http://goo.gl/JWGk03). This service can be moved into this environment if necessary. This functionality is enabled in the API by default and is compatible with ArcGIS Online, ArcMap, and/or additional GIS applications (i.e. CoSD Emergency App)

**Online Emergency Operations Center EOC Data Viewer**

![Alt text](http://www.dfdg.com/wp-content/uploads/project_gallery/thumb_aj_police_renovation_1_827_1028.jpg)
<br/>

Edits published to the REST data service are also viewable by an out-of-the-box ArcGIS Online webmap. Individuals and professionals that staff regional emergency operations centers (EOCs) can edit and monitor data in real time. This allows for direct, real-time viewing of the data by planners and emergency officials to document and catalog areas affected by the disaster.


## Development Plan (High-Level)

**Server & Data Feed**

The data feed (REST Service) will be set up on the development Amazon EC2 instance with ArcGIS Server 10.3 installed. A Feature Service will be published on the ArcGIS for Server instance for data collection and editing by the public. Data edits will be stored in a SQL*Express database with a small ArcGIS Spatial Database Engine (SDE) installed and configured. All additional basemaps used by the app will rely on the San Diego County Emergency Data Feed (http://goo.gl/JWGk03), ArcGIS Online Live Feed (http://goo.gl/tl4GRs) and additional feeds (FEMA, NOAA) as needed.

**Mobile / Web App**

The mobile app will be developed using a mix of ArcGIS for JavaScript API, BootStrap, and JQuery Mobile. The development environment will be a temporary Amazon EC2 instance and hosted via IIS with a temporary URL designation. The code will be stored in a collaborative GitHub workspace which will push changes to the development environment prior to the demo.

**EOC ArcGIS Online App**

The emergency operations center (EOC) data viewer application will be hosted on a temporary ArcGIS Online account set up and configured in advance of the demo. The AGOL web map will connect to the REST endpoint layer and display the data during the demo for informative purposes. Symbology, data display, and custom tools will be included as needed.
