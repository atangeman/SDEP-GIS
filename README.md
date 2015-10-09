# team-SDEP-GIS
Note: This is a draft deliverable.</br>
All changes to this file should be considered temporary until 12:00PM on Friday, October 9th.
## Inspiration

The intent of the San Diego Emergency Participatory Geospatial Information System (SDEP-GIS) is to provide real time information sharing, which allows for reliable community-based data submission to enhance the information flow during the disaster response process. The inspiration came from an understanding that disaster response and cleanup can be a community-driven and open-sourced effort that also maintains data integrity and adds a verifiability measure.

## What it does

SDEP-GIS consists of three components: 1. The online/mobile data collection and viewer application accessible by the public, and 2. A data service (ArcGIS/REST Feature Service) to host the data collected in the field. 3. The Emergency Operation Center (EOC) data feed that consumes the data service rapid display of publically submitted information to disaster response planners, officials, and others in the disaster response community.

**Mobile-Ready Component**

![Alt text](blob:https%3A//drive.google.com/447c00c8-3b32-4555-9ac5-1402a7dde1e7)
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


## Development Credits

**Server & Data Feed**

The data feed (REST Service) was set up using an Amazon EC2 instance. Feature services were published on ArcGIS Online. Additional basemaps used by the app relied on San Diego County Emergency Data Feed (http://goo.gl/JWGk03), ArcGIS Online Live Feed (http://goo.gl/tl4GRs).

**Mobile / Web App**

The mobile app was a modified fork of ESRI's Citizen Service Request app: https://github.com/Esri/citizen-service-request. The modifications to this app can be observed by running a comparison using any number of git/subversion templates. One major modification included coding a custom photo submission widget to restrict submissions to live camera feeds.

**EOC ArcGIS Online App**

The emergency operations center (EOC) data viewer application was created and hosted on a temporary ArcGIS Online account set up and configured in advance of the demo. The web app was built using ESRI's WebAppBuilder to add enhanced functionality.
